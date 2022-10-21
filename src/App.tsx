import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";

function App() {
  return (
    <>
      <Canvas>
        <Sky />
        <ambientLight intensity={0.5} />
        <PointerLockControls />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
      <div className="center">+</div>
    </>
  )
}

export default App
