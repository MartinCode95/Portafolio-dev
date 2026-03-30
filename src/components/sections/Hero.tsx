import { useEffect, useState } from 'react'
import { GeometricBackground } from '../ui/GeometricBackground'

// ─── Terminal animation ───────────────────────────────────────────────────────

const LINES = [
  { text: '$ sdd init feature/nueva-feature', type: 'command' },
  { text: '  ✓ Spec created. Rules documented.', type: 'output' },
  { text: '$ claude code --apply tasks.md', type: 'command' },
  { text: '  ✓ 3/3 tasks implemented.', type: 'output' },
  { text: '$ gga review --pre-commit', type: 'command' },
  { text: '  ✓ All checks passed. Ready to deploy.', type: 'success' },
] as const

type LineType = (typeof LINES)[number]['type']

const TYPING_SPEED = 45
const OUTPUT_SPEED = 18
const PAUSE_AFTER_LINE = 280
const PAUSE_AFTER_COMPLETE = 2800

function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: LineType }[]>([])
  const [currentText, setCurrentText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) return

    const line = LINES[lineIndex]

    if (!line) {
      setPausing(true)
      const t = setTimeout(() => {
        setDisplayedLines([])
        setCurrentText('')
        setLineIndex(0)
        setCharIndex(0)
        setPausing(false)
      }, PAUSE_AFTER_COMPLETE)
      return () => clearTimeout(t)
    }

    if (charIndex < line.text.length) {
      const speed = line.type === 'command' ? TYPING_SPEED : OUTPUT_SPEED
      const t = setTimeout(() => {
        setCurrentText(line.text.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayedLines(prev => [...prev, { text: line.text, type: line.type }])
      setCurrentText('')
      setCharIndex(0)
      setLineIndex(i => i + 1)
    }, PAUSE_AFTER_LINE)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex, pausing])

  const getColor = (type: LineType) => {
    if (type === 'command') return '#FAFAFA'
    if (type === 'success') return '#A3E635'
    return '#71717A'
  }

  const currentLine = LINES[lineIndex]

  return (
    <div
      className="w-full rounded-lg overflow-hidden"
      style={{ background: '#0D0D0F', border: '1px solid #3F3F46' }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: '#18181B', borderBottom: '1px solid #3F3F46' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
        <span className="text-xs font-mono text-[#52525B] ml-2">~/portafolio — zsh</span>
      </div>
      {/* Body */}
      <div className="p-4 font-mono text-sm" style={{ minHeight: '130px' }}>
        {displayedLines.map((line, i) => (
          <div key={i} style={{ color: getColor(line.type) }}>
            {line.text}
          </div>
        ))}
        {currentLine && (
          <div style={{ color: getColor(currentLine.type) }}>
            {currentText}
            <span className="animate-pulse">▋</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0">
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: '2px solid rgba(163, 230, 53, 0.4)' }}
      />
      <div className="absolute inset-2 rounded-full overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}martin-garcia.jpg`}
          alt="Martín García"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div
        className="absolute bottom-3 right-3 w-4 h-4 rounded-full"
        style={{ background: '#A3E635', boxShadow: '0 0 10px rgba(163,230,53,0.6)' }}
      />
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6">
      <GeometricBackground />
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col gap-10 py-12">

        {/* Fila: texto + avatar */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-mono text-[#A3E635] mb-4">
              {'< Fullstack Developer · AI-driven />'}
              <span className="cursor-blink ml-0.5">_</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAFA] leading-tight">
              Martín García
            </h1>

            <p className="text-base sm:text-xl text-[#A1A1AA] mt-2">
              Fullstack · AI-driven
            </p>

            <p className="text-sm text-[#A1A1AA] mt-4 max-w-2xl">
              Desarrollo con React, TypeScript y el ecosistema moderno. Antes de escribir la primera línea,
              defino qué construir y con qué reglas — la IA ejecuta dentro de ese marco. Cada entrega es
              predecible porque el proceso lo garantiza.
            </p>

            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full mt-6"
              style={{
                background: 'rgba(163, 230, 53, 0.1)',
                border: '1px solid rgba(163, 230, 53, 0.3)',
                color: '#A3E635',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
              Disponible · Mar 2026
            </span>

            <div className="flex gap-3 mt-8 flex-wrap justify-center md:justify-start">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-md font-semibold text-black bg-[#A3E635] transition-colors duration-200 hover:bg-[#8fcc1f]"
              >
                Ver proyectos
              </a>
              <a
                href="/Martin_Gonzalo_Garcia_CV.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-md font-semibold text-[#A3E635] transition-colors duration-200 hover:bg-[rgba(163,230,53,0.15)]"
                style={{ border: '1px solid #A3E635' }}
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Foto */}
          <Avatar />
        </div>

        {/* Terminal animada */}
        <TerminalAnimation />

      </div>
    </section>
  )
}
