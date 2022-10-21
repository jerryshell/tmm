import { useSphere } from "@react-three/cannon";
import { Mesh, Vector3 } from "three";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboard } from "../hooks/useKeyboard";

export const Player = () => {
  const actions = useKeyboard();
  useEffect(() => {
    console.log('actions', actions)
  }, [actions])

  const { camera } = useThree()
  const [ref, api] = useSphere<Mesh>(() => {
    return {
      mass: 1,
      type: 'Dynamic',
      position: [0, 1, 0],
    }
  })

  const pos = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe(position => {
      pos.current = position
    })
  }, [])

  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe(velocity => {
      vel.current = velocity
    })
  }, [])

  useFrame(() => {
    // camera
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

    // jump
    if (actions.jump) {
      api.velocity.set(vel.current[0], 10, vel.current[2])
    }
  })

  return (
    <mesh ref={ref}></mesh>
  )
}
