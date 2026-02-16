const Loader = (props) => (
  <div style={styles.loaderContainer}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-30 -30 260 260"
      width={200}
      height={200}
      {...props}
    >
      <g
        style={{
          opacity: 0.7,
        }}
      >
        <circle cx={84.6} cy={153.38} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="M87.1 153.38h32.24l24.52-20.58h24.64"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-2s",
          }}
          d="M173.46 118.8h-70"
        />
        <circle cx={103.46} cy={118.8} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="m152.86 86.68-9.9 9.88.42 1.72 7.08 7.08.46.06h24"
        />
        <circle cx={152.86} cy={86.68} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-2s",
          }}
          d="m142.96 74.62-14.14 14.14"
        />
        <circle cx={142.96} cy={74.62} r={4} />
        <circle cx={115.4} cy={46.82} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="M112.9 46.82H80.66L56.14 67.38H31.5"
        />
        <circle
          cx={100}
          cy={100}
          r={30}
          fill="none"
          stroke="#000"
          strokeWidth={3}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-2s",
          }}
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="m120.62 79.38 32.42-32.42"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-2s",
          }}
          d="m46.96 153.04 32.76-32.76"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="M26.54 81.38h70"
        />
        <circle cx={96.54} cy={81.38} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-4s",
          }}
          d="m47.14 113.52 9.9-10.9-.42-.72-7.08-7.06-.46-.06h-24"
        />
        <circle cx={47.14} cy={113.52} r={4} />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeMiterlimit={10}
          style={{
            strokeDasharray: 6,
            animation: "flowLines 4s linear infinite",
            animationDelay: "-2s",
          }}
          d="m57.04 125.58 14.14-14.16"
        />
        <circle cx={57.04} cy={125.58} r={4} />
      </g>
      <circle
        cx={100}
        cy={100}
        r={85}
        fill="transparent"
        stroke="#e91a00"
        strokeWidth={30}
        style={{
          animation: "gentlePulse 2s ease-in-out infinite",
          transformOrigin: "center",
          transformBox: "fill-box",
        }}
      />
      <style>
        {
          "\n    @keyframes gentlePulse{0%,to{transform:scale(1)}50%{transform:scale(1.06)}}@keyframes flowLines{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}\n  "
        }
      </style>
    </svg>
  </div>
);

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 1000,
    backgroundColor: "white",
  },
};

export default Loader;
