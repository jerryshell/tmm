import { useBox } from "@react-three/cannon"
import { Mesh } from "three"
import { dirtTexture } from "../images/textures"

export const Cube = ({ position }: {
    position: [x: number, y: number, z: number]
}) => {
    const [ref] = useBox<Mesh>(() => {
        return {
            type: 'Static',
            position,
        }
    })
    return (
        <mesh ref={ref}>
            <boxGeometry />
            {/* <meshStandardMaterial color="red" /> */}
            <meshStandardMaterial map={dirtTexture} />
        </mesh>
    )
}