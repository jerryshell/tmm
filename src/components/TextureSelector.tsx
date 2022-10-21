import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { CubeTextureAtom } from "../atoms/CubeTextureAtom"
import { useKeyboard } from "../hooks/useKeyboard"

export const TextureSelector = () => {
    const [cubeTexture, setCubeTexture] = useRecoilState(CubeTextureAtom)
    useEffect(() => {
        console.log('cubeTexture', cubeTexture)
    }, [cubeTexture])

    const {
        dirtTexture,
        glassTexture,
        grassTexture,
        logTexture,
        woodTexture
    } = useKeyboard();

    useEffect(() => {
        if (dirtTexture) {
            setCubeTexture('dirtTexture')
        } else if (glassTexture) {
            setCubeTexture('glassTexture')
        } else if (grassTexture) {
            setCubeTexture('grassTexture')
        } else if (logTexture) {
            setCubeTexture('logTexture')
        } else if (woodTexture) {
            setCubeTexture('woodTexture')
        }
    }, [dirtTexture, glassTexture, grassTexture, logTexture, woodTexture])

    return (
        <></>
    )
}