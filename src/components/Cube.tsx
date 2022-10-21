import { useBox } from "@react-three/cannon"
import { Mesh } from "three"
import textures from "../images/textures"

export const Cube = ({ position, textureName }: {
    position: [x: number, y: number, z: number],
    textureName: string,
}) => {
    const [ref] = useBox<Mesh>(() => {
        return {
            type: 'Static',
            position,
        }
    })
    const texture = textures[textureName as keyof typeof textures]

    return (
        <mesh ref={ref}>
            <boxGeometry />
            {/* <meshStandardMaterial color="red" /> */}
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}