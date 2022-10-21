import { useEffect, useState } from "react"

const actionByKeyCode = (keyCode: string) => {
    if (keyCode === 'KeyW') {
        return 'moveForward'
    }
    if (keyCode === 'KeyS') {
        return 'moveBackward'
    }
    if (keyCode === 'KeyA') {
        return 'moveLeft'
    }
    if (keyCode === 'KeyD') {
        return 'moveRight'
    }
    if (keyCode === 'Space') {
        return 'jump'
    }
    return ''
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
    })

    const handleKeyDown = (e: KeyboardEvent) => {
        console.log('keyDown e.code', e.code)
        // e.code -> actions
        const action = actionByKeyCode(e.code)
        setActions((prevState) => {
            return {
                ...prevState,
                [action]: true,
            }
        })
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        console.log('keyUp e.code', e.code)
        const action = actionByKeyCode(e.code)
        setActions((prevState) => {
            return {
                ...prevState,
                [action]: false,
            }
        })
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return actions
}
