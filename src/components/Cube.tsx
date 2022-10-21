import { useBox } from "@react-three/cannon"
import { ThreeEvent } from "@react-three/fiber"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Mesh } from "three"
import { CubeDataListAtom } from "../atoms/CubeDataListAtom"
import textures from "../images/textures"

export const Cube = ({ position, textureName, addCube }: {
    position: [x: number, y: number, z: number],
    textureName: string,
    addCube: Function,
}) => {
    const [hoverFlag, setHoverFlag] = useState(false)

    const [cubeDataList, setCubeDataList] = useRecoilState(CubeDataListAtom)

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
        if (e.nativeEvent.altKey) {
            const newCubeDataList = cubeDataList.filter(item => {
                const [itemX, itemY, itemZ] = item.position
                return itemX !== x || itemY !== y || itemZ !== z
            })
            setCubeDataList(newCubeDataList)
            return
        }
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
            onPointerMove={e => {
                e.stopPropagation()
                setHoverFlag(true)
            }}
            onPointerOut={e => {
                e.stopPropagation()
                setHoverFlag(false)
            }}
        >
            <boxGeometry />
            {/* <meshStandardMaterial color="red" /> */}
            <meshStandardMaterial
                map={texture}
                color={hoverFlag ? 'grey' : 'white'}
                opacity={textureName === 'glassTexture' ? 0.7 : 1}
                transparent={true}
            />
        </mesh>
    )
}