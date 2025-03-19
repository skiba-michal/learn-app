interface LoaderProps {
  size?: "tiny" | "small" | "medium" | "large" | "extraLarge" | "Huge";
  color?: "primary" | "secondary" | "accent" | "primaryText";
  className?: string;
}

const getLoaderSize = (size: LoaderProps["size"]) => {
  switch (size) {
    case "tiny":
      return { width: "20px", height: "20px" };
    case "small":
      return { width: "25px", height: "25px" };
    case "medium":
      return { width: "35px", height: "35px" };
    case "large":
      return { width: "50px", height: "50px" };
    case "extraLarge":
      return { width: "100px", height: "100px" };
    case "Huge":
      return { width: "150px", height: "150px" };
    default:
      return { width: "50px", height: "50px" };
  }
};

const getColor = (color: LoaderProps["color"]) => {
  switch (color) {
    case "primary":
      return "var(--primary)";
    case "secondary":
      return "var(--secondary)";
    case "accent":
      return "var(--accent)";
    case "primaryText":
      return "var(--primaryText)";
    default:
      return "var(--primary)";
  }
};

export const Loader = ({ size = "small", color = "accent", className = "" }: LoaderProps) => {
  const sizeStyle = getLoaderSize(size);
  const colorStyle = getColor(color);

  return (
    <div className={className} style={sizeStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <path
          fill={colorStyle}
          stroke={colorStyle}
          strokeWidth="15"
          style={{ transformOrigin: "50% 50%" }}
          d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="0;120"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
};
