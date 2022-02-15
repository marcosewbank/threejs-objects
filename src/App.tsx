import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";
import Box from "./components/Box";
import Iphone from "./components/Iphone";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
