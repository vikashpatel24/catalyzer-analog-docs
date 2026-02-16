import React from "react";

// const AccessDenied = () => {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "var(--ifm-background-color)",
//         padding: "2rem",
//       }}
//     >
//       <div
//         style={{
//           background: "var(--ifm-background-surface-color)",
//           border: "1px solid var(--ifm-color-emphasis-200)",
//           borderRadius: "8px",
//           padding: "2rem",
//           textAlign: "center",
//           maxWidth: "500px",
//           width: "100%",
//           boxShadow: "var(--ifm-global-shadow-lw)",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "1.8rem",
//             fontWeight: "bold",
//             color: "var(--ifm-color-primary)",
//           }}
//         >
//           🔐 Access Denied
//         </h1>
//         <p style={{ color: "var(--ifm-color-content-secondary)", marginTop: "1rem" }}>
//           You need to be logged in and have a valid activated license to view this documentation.
//         </p>

//         <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "0.75rem" }}>
//           <a
//             href="https://compcarta.com/login"
//             style={{
//               backgroundColor: "var(--ifm-color-primary)",
//               color: "#fff",
//               padding: "0.6rem 1.2rem",
//               borderRadius: "6px",
//               textDecoration: "none",
//             }}
//           >
//             Login
//           </a>
//           <a
//             href="https://compcarta.com/signup"
//             style={{
//               border: "1px solid var(--ifm-color-primary)",
//               color: "var(--ifm-color-primary)",
//               padding: "0.6rem 1.2rem",
//               borderRadius: "6px",
//               textDecoration: "none",
//             }}
//           >
//             Create Account
//           </a>
//         </div>

//         <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
//           Need help?{" "}
//           <a
//             href="https://compcarta.com/support"
//             style={{ color: "var(--ifm-color-primary)", textDecoration: "underline" }}
//           >
//             Contact Support
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccessDenied;

const DOC_ACCESS_REASONS = {
  expired: {
    title: "Documentation Access Expired",
    message:
      "Your license for this product has expired, so access to the documentation is currently unavailable.",
    action: "Renew License",
    link: "https://compcarta.com/billing",
  },

  revoked: {
    title: "Documentation Access Revoked",
    message:
      "Access to this documentation has been revoked by your organization or administrator.",
  },

  suspended: {
    title: "Documentation Access Suspended",
    message:
      "Your license is currently suspended, which temporarily disables access to this documentation.",
  },

  no_active_features: {
    title: "No Documentation Access",
    message:
      "Your license does not include any active features for this product, so the documentation is not available.",
    action: "Upgrade License",
    link: "https://compcarta.com/pricing",
  },

  not_activated: {
    title: "Documentation Not Available",
    message:
      "This product is not activated on your account. Documentation is only available for activated products.",
    action: "View Plans",
    link: "https://compcarta.com/pricing",
  },

  no_domain_license: {
    title: "Domain License Required",
    message:
      "Your organization does not have an active license for this product, so the documentation cannot be accessed.",
  },

  server_error: {
    title: "Unable to Verify Access",
    message:
      "We couldn't verify your documentation access at the moment. Please try again shortly.",
  },
};

const AccessDenied = ({ reason = "not_activated" }) => {
  const config = DOC_ACCESS_REASONS[reason] || DOC_ACCESS_REASONS.not_activated;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--ifm-background-color)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          width: "100%",
          background: "var(--ifm-background-surface-color)",
          borderRadius: "12px",
          border: "1px solid var(--ifm-color-emphasis-200)",
          boxShadow: "var(--ifm-global-shadow-lw)",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.75rem",
          }}
        >
          📘
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "var(--ifm-color-primary)",
            marginBottom: "0.75rem",
          }}
        >
          {config.title}
        </h1>

        {/* Message */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "var(--ifm-color-content-secondary)",
            marginBottom: "2rem",
          }}
        >
          {config.message}
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {/* {config.action && (
            <a
              href={config.link}
              style={{
                backgroundColor: "var(--ifm-color-primary)",
                color: "#fff",
                padding: "0.6rem 1.4rem",
                borderRadius: "6px",
                fontSize: "0.95rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              {config.action}
            </a>
          )} */}

          <a
            href="https://compcarta.com/contact-us"
            style={{
              border: "1px solid var(--ifm-color-primary)",
              color: "var(--ifm-color-primary)",
              padding: "0.6rem 1.4rem",
              borderRadius: "6px",
              fontSize: "0.95rem",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Contact Support
          </a>
        </div>

        {/* Footnote */}
        <div
          style={{
            marginTop: "2rem",
            fontSize: "0.85rem",
            color: "var(--ifm-color-content-secondary)",
          }}
        >
          Documentation access is determined by your product license status.
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
