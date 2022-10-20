import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <Sky/>
        <PointerLockControls/>
      </Canvas>
    </>
  )
}

export default App
