import { useEffect, useRef } from 'react'

interface Shape {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  type: 'triangle' | 'hexagon' | 'circle'
  opacity: number
}

function drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.beginPath()
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3 - Math.PI / 2
    const px = Math.cos(angle) * size
    const py = Math.sin(angle) * size
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.restore()
}

function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.beginPath()
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6
    const px = Math.cos(angle) * size
    const py = Math.sin(angle) * size
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
  }
  ctx.closePath()
  ctx.restore()
}

function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<Shape[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const types: Shape['type'][] = ['triangle', 'hexagon', 'circle']
    shapesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 30 + 10,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.007,
      type: types[Math.floor(Math.random() * types.length)],
      opacity: Math.random() * 0.06 + 0.04,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const s of shapesRef.current) {
        s.x += s.vx
        s.y += s.vy
        s.rotation += s.rotationSpeed

        if (s.x < -s.size) s.x = canvas.width + s.size
        else if (s.x > canvas.width + s.size) s.x = -s.size
        if (s.y < -s.size) s.y = canvas.height + s.size
        else if (s.y > canvas.height + s.size) s.y = -s.size

        ctx.strokeStyle = `rgba(163, 230, 53, ${s.opacity})`
        ctx.lineWidth = 1.5

        if (s.type === 'triangle') drawTriangle(ctx, s.x, s.y, s.size, s.rotation)
        else if (s.type === 'hexagon') drawHexagon(ctx, s.x, s.y, s.size, s.rotation)
        else drawCircle(ctx, s.x, s.y, s.size)

        ctx.stroke()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    const observer = new ResizeObserver(resize)
    observer.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
