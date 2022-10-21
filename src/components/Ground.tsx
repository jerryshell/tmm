import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { Mesh } from "three";
import textures from "../images/textures";

export const Ground = ({ addCube }: {
  addCube: Function,
}) => {
  const [ref] = usePlane<Mesh>(() => {
    return {
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, -0.5, 0]
    }
  })

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    console.log('ground click e', e)
    const [x, y, z] = Object.values(e.point)
      .map(value => Math.ceil(value))
    console.log('ground click [x, y, z]', [x, y, z])
    addCube(x, y, z)
  }

  return (
    <mesh
      onClick={handleClick}
      ref={ref}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={textures.groundTexture} />
    </mesh>
  )
}
