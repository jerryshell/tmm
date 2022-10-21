import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { Cube } from './components/Cube';
import { useRecoilState } from 'recoil';
import { CubeDataListAtom } from './atoms/CubeDataListAtom';

function App() {
  const [cubeDataList, setCubeDataList] = useRecoilState(CubeDataListAtom)
  return (
    <>
      <Canvas>
        <Sky />
        <ambientLight intensity={0.5} />
        <PointerLockControls />
        <Physics>
          <Ground />
          <Player />
          {cubeDataList.map(cubeData => (
            <Cube key={cubeData.id} position={cubeData.position} textureName={cubeData.textureName} />
          ))}
        </Physics>
      </Canvas>
      <div className="center">+</div>
    </>
  )
}

export default App
