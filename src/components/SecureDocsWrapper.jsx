import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import AccessDenied from "./AccessDenied";

// const compcartaApiURL = import.meta.env.VITE_COMPCARTA_API_BASE_URL;
// const compcartaApiURL = "http://localhost:5000"; // Update if needed
// const compcartaURL = "http://localhost:5000"; // Update if needed // Update if needed
// const compcartaApiURL = process.env.REACT_APP_COMPCARTA_API_BASE_URL;
// const compcartaURL = process.env.REACT_APP_COMPCARTA_API_BASE_URL;; // Update if needed
// console.log("first", process.env.NODE_ENV);
// const compcartaURL = "https://compcarta.com"; // Update if needed // Update if needed
// const compcartaApiURL = "https://backend.compcarta.com"; // Update if needed
const compcartaURL = import.meta.env.VITE_COMPCARTA_BASE_URL; // Update if needed // Update if needed
const compcartaApiURL = import.meta.env.VITE_COMPCARTA_API_BASE_URL; // Update if needed



const SecureDocsWrapper = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);
  const [denyReason, setDenyReason] = useState(null);
  console.log("compcartaURL", compcartaURL);
  console.log("compcartaApiURL", compcartaApiURL);

  useEffect(() => {
    const init = async () => {
      try {
        const token = await tryRefresh();

        if (!token) {
          redirectToLogin();
          return;
        }

        const activation = await checkActivation(token);

        if (!activation.isActivated) {
          setDenyReason(activation.status);
          setAuthorized(false);
          return;
        }

        setAuthorized(true);
      } catch {
        redirectToLogin();
      }
    };

    init();
  }, []);

  const tryRefresh = async () => {
    try {
      const res = await fetch(`${compcartaApiURL}/api/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) return null;

      const { accessToken } = await res.json();
      return accessToken;
    } catch {
      return null;
    }
  };

  const checkActivation = async (token) => {
    try {
      const res = await axios.post(
        `${compcartaApiURL}/api/license/check`,
        { productName: "edacloud" },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      return res.data; // { isActivated, status }
    } catch {
      return { isActivated: false, status: "server_error" };
    }
  };

  const redirectToLogin = () => {
    const current = encodeURIComponent(window.location.href);
    window.location.href = `${compcartaURL}/login?redirect=${current}`;
  };

  if (authorized === null) return <Loader />;

  if (authorized === false) {
    return <AccessDenied reason={denyReason} />;
  }

  return <>{children}</>;
};

export default SecureDocsWrapper;
