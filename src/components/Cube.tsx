import { useBox } from "@react-three/cannon"
import { Mesh } from "three"

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
            <meshStandardMaterial color="red" />
        </mesh>
    )
}