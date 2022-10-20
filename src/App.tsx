import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";

function App() {
  return (
    <>
      <Canvas>
        <Sky/>
        <ambientLight intensity={0.5}/>
        <PointerLockControls/>
        <Physics>
          <Ground/>
        </Physics>
      </Canvas>
    </>
  )
}

export default App
