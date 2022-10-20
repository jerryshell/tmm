import { groundTexture } from "../images/textures";

export const Ground = () => {
  return (
    <mesh>
      <planeGeometry args={[100, 100]}/>
      <meshStandardMaterial map={groundTexture}/>
    </mesh>
  )
}
