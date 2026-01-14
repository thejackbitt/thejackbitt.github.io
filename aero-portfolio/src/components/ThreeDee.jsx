import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model.jsx'
import { useRef, useState, useEffect } from 'react'

function CameraRig() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame(({ camera }) => {
    camera.position.x = 5 - scrollY * -0.01
    camera.position.z = 5 - scrollY * -0.02
  })

  return null
} 

export default function ThreeDee() {
  return (
    <Canvas
      camera={{ position: [4.5, 0.3, 4], fov: 50 }}
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        left:0
      }}
    >
        <CameraRig />
        <Model modelName="WindowsXP" position={[0, 0.4, 2]} />
        <Model modelName="Keyboard" position={[11, -0.3, 16]} />

      <Environment preset="studio" />
    </Canvas>
  )
}
