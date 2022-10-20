import { useState } from 'react'
import './App.css'
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <Sky/>
      </Canvas>
    </>
  )
}

export default App
