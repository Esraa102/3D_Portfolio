/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
// eslint-disable-next-line react/prop-types
const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={isMobile ? 1.9 : 2.5}
        position={[0, 0, 0]}
      />
    </mesh>
  );
};

const CanvasPlanet = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:350px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <Canvas
      className="canvas"
      frameloop="deman"
      gl={{ preserveDrawingBuffer: true }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CanvasPlanet;
