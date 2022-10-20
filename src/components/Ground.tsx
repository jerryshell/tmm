import { usePlane } from "@react-three/cannon";
import { Mesh } from "three";
import { groundTexture } from "../images/textures";

export const Ground = () => {
  const [ref] = usePlane<Mesh>(() => {
    return {
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, -0.5, 0]
    }
  })
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={groundTexture} />
    </mesh>
  )
}
