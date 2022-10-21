import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { CubeDataListAtom } from "../atoms/CubeDataListAtom"

export const Menu = () => {
    const [cubeDataList, setCubeDataList] = useRecoilState(CubeDataListAtom)

    const handleSaveBtnClick = () => {
        localStorage.setItem('cubeDataList', JSON.stringify(cubeDataList))
    }

    const handleResetBtnClick = () => {
        setCubeDataList([])
    }

    useEffect(() => {
        let cubeDataListStr = localStorage.getItem('cubeDataList')
        if (!cubeDataListStr) {
            cubeDataListStr = '[]'
        }
        setCubeDataList(JSON.parse(cubeDataListStr))
    }, [])

    return (
        <div style={{ position: 'absolute', top: '0px', left: '10px' }}>
            <button onClick={handleSaveBtnClick}>Save</button>
            <button onClick={handleResetBtnClick}>Reset</button>
        </div>
    )
}