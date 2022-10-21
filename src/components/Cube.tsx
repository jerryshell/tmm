import { useBox } from "@react-three/cannon"
import { Mesh } from "three"

export const Cube = () => {
    const [ref] = useBox<Mesh>(() => {
        return {
            type: 'Static',
            position: [-2, 0, -2]
        }
    })
    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}