import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { CubeTextureAtom } from "../atoms/CubeTextureAtom"
import { useKeyboard } from "../hooks/useKeyboard"
import dirtImage from '../images/dirt.jpg';
import glassImage from '../images/glass.png';
import grassImage from '../images/grass.jpg';
import logImage from '../images/log.jpg';
import woodImage from '../images/wood.png';

export const TextureSelector = () => {
    const images = {
        dirt: dirtImage,
        glass: glassImage,
        grass: grassImage,
        log: logImage,
        wood: woodImage,
    }

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
        <div className="texture-selector">
            {Object.keys(images).map(k => {
                return (
                    <img
                        src={images[k as keyof typeof images]}
                        className={
                            cubeTexture.includes(k) ? 'active' : ''
                        }
                    ></img>
                )
            })}
        </div>
    )
}