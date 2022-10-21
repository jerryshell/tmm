import { useBox } from "@react-three/cannon"
import { ThreeEvent } from "@react-three/fiber"
import { Mesh } from "three"
import textures from "../images/textures"

export const Cube = ({ position, textureName, addCube }: {
    position: [x: number, y: number, z: number],
    textureName: string,
    addCube: Function,
}) => {
    const [ref] = useBox<Mesh>(() => {
        return {
            type: 'Static',
            position,
        }
    })
    const texture = textures[textureName as keyof typeof textures]

    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        if (!e.faceIndex) {
            return
        }
        // console.log('cube click e.faceIndex', e.faceIndex)
        const cubeFace = Math.floor(e.faceIndex / 2)
        console.log('cube click cubeFace', cubeFace)
        const [x, y, z] = Object.values(ref.current!.position)
        if (cubeFace === 0) {
            addCube(x + 1, y, z)
            return
        }
        if (cubeFace === 1) {
            addCube(x - 1, y, z)
            return
        }
        if (cubeFace === 2) {
            addCube(x, y + 1, z)
            return
        }
        if (cubeFace === 3) {
            addCube(x, y - 1, z)
            return
        }
        if (cubeFace === 4) {
            addCube(x, y, z + 1)
            return
        }
        if (cubeFace === 5) {
            addCube(x, y, z - 1)
            return
        }
    }

    return (
        <mesh
            onClick={handleClick}
            ref={ref}
        >
            <boxGeometry />
            {/* <meshStandardMaterial color="red" /> */}
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}