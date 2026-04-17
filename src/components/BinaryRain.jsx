import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const binaryChars = '01'.split('')

export default function BinaryRain() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    const fontSize = 18
    const columns = Math.floor(width / fontSize)
    const drops = Array(columns).fill(1)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 7, 1, 0.08)'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = '#65e1a9'
      ctx.font = `${fontSize}px Consolas, monospace`
      for (let i = 0; i < drops.length; i += 1) {
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 1
      }
      animationRef.current = requestAnimationFrame(draw)
    }

    gsap.fromTo(canvas, { opacity: 0 }, { opacity: 0.92, duration: 1.2, ease: 'power3.out' })
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="canvas-binary" />
}
