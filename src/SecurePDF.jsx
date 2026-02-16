import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AccessDenied from "./components/AccessDenied";

const compcartaApiURL = import.meta.env.VITE_COMPCARTA_API_BASE_URL;

const SecurePDF = () => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const refresh = await fetch(
                    `${compcartaApiURL}/api/auth/refresh`,
                    {
                        method: "POST",
                        credentials: "include",
                    }
                );

                const { accessToken } = await refresh.json();

                const res = await fetch(
                    `${compcartaApiURL}/api/docs/catalyzer-analog`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                // ⭐ IMPORTANT — Check status BEFORE blob
                if (!res.ok) {
                    const data = await res.json();
                    setError(data.message || "Unable to load document");
                    return;
                }

                // const blob = await res.blob();
                // setPdfUrl(URL.createObjectURL(blob));
                // const blob = await res.blob();

                // // Create File object with proper name
                // const file = new File(
                //     [blob],
                //     "catalyzer_analog_doc.pdf",
                //     { type: "application/pdf" }
                // );

                // setPdfUrl(URL.createObjectURL(file));
                const disposition = res.headers.get("Content-Disposition");

                let filename = "document.pdf";

                if (disposition) {
                    const match = disposition.match(/filename="(.+)"/);
                    if (match) filename = match[1];
                }

                const blob = await res.blob();
                const file = new File([blob], filename, { type: "application/pdf" });

                setPdfUrl(URL.createObjectURL(file));



            } catch (e) {
                setError("Network error. Please try again.");
            }
        };

        loadPdf();
    }, []);

    // Loading
    if (!pdfUrl && !error) return <Loader />;

    // Error UI ⭐
    if (error) {
        return (
            <AccessDenied
                config={{
                    title: "Access Restricted",
                    message: error
                }}
            />
        );
    }


    // PDF Viewer
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="Secure PDF"
            />
        </div>
    );
};

export default SecurePDF;
