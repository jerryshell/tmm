import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { Cube } from './components/Cube';

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
          <Cube position={[-2, 0, -2]} textureName={'dirtTexture'} />
          <Cube position={[-4, 0, -4]} textureName={'glassTexture'} />
          <Cube position={[-6, 0, -6]} textureName={'logTexture'} />
        </Physics>
      </Canvas>
      <div className="center">+</div>
    </>
  )
}

export default App
