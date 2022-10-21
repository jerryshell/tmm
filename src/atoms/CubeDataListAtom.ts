import { nanoid } from "nanoid";
import { atom } from "recoil";
import { CubeData } from "../interfaces/CubeData";

export const CubeDataListAtom = atom({
    key: 'CubeDataListAtom',
    default: [
        // {
        //     id: nanoid(),
        //     position: [-2, 0, -2],
        //     textureName: 'dirtTexture',
        // },
        // {
        //     id: nanoid(),
        //     position: [-4, 0, -4],
        //     textureName: 'logTexture',
        // },
        // {
        //     id: nanoid(),
        //     position: [-6, 0, -6],
        //     textureName: 'woodTexture',
        // },
    ] as CubeData[]
})