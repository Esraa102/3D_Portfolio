import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p className="canvas-loader"></p>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "14px",
          fontWeight: 800,
          marginTop: 40,
          transform: "translateX(-16px)",
        }}
      >
        {progress.toFixed(2)}
      </p>
    </Html>
  );
};

export default Loader;
