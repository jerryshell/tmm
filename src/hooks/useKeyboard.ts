import { useEffect } from "react"

export const useKeyboard = () => {
    const handleKeyDown = (e: KeyboardEvent) => {
        console.log('keyDown e.code', e.code)
    }
    const handleKeyUp = (e: KeyboardEvent) => {
        console.log('keyUp e.code', e.code)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
}
