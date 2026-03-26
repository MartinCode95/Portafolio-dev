import { useEffect, useRef, useState } from 'react'

interface TerminalLine {
  type: 'prompt' | 'output' | 'success' | 'blank'
  text: string
}

interface PipelineStep {
  number: string
  label: string
  description: string
}

const terminalLines: TerminalLine[] = [
  { type: 'prompt',  text: 'gga init --provider=claude' },
  { type: 'success', text: '✓ Provider: claude (claude-sonnet-4-6)' },
  { type: 'success', text: '✓ Rules loaded: AGENTS.md' },
  { type: 'success', text: '✓ File patterns: *.ts, *.tsx' },
  { type: 'blank',   text: '' },
  { type: 'prompt',  text: 'git commit -m "feat: add Methodology section"' },
  { type: 'output',  text: '  Reviewing 3 changed files...' },
  { type: 'output',  text: '  gga-review: checking spec compliance...' },
  { type: 'success', text: '✓ No var usage detected' },
  { type: 'success', text: '✓ All components use named exports' },
  { type: 'success', text: '✓ Tap targets ≥ 44px' },
  { type: 'success', text: '✅ Review passed — commit accepted' },
]

const steps: PipelineStep[] = [
  { number: '01', label: 'SPEC FIRST',      description: 'Antes de escribir código, defino qué debe hacer el sistema y por qué.' },
  { number: '02', label: 'AGENTS.md',       description: 'Reglas explícitas para los agentes IA. Nadie actúa sin contexto.' },
  { number: '03', label: 'BUILD con IA',    description: 'Claude Code ejecuta tareas acotadas. Yo dirijo, el agente implementa.' },
  { number: '04', label: 'REVIEW (GGA)',    description: 'Revisión automática post-commit: cumplimiento de spec, convenciones y calidad.' },
  { number: '05', label: 'DEPLOY trazable', description: 'Cada cambio tiene historia. SDD garantiza que lo que desplegás es lo que especificaste.' },
]

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Metodología />'}
        </p>

        {/* Section title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-8 md:mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Cómo desarrollo
        </h2>

        {/* Terminal block */}
        <div
          className={`rounded-lg mb-10 overflow-hidden transition-all duration-700 ease-out delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ background: '#18181B', border: '1px solid #3F3F46' }}
        >
          {/* Chrome bar */}
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ borderBottom: '1px solid #3F3F46' }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: '#EF4444' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#F59E0B' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#22C55E' }} />
            <span className="ml-3 text-xs font-mono text-[#A1A1AA]">terminal</span>
          </div>

          {/* Terminal content */}
          <pre
            className="p-4 md:p-6 text-sm font-mono leading-relaxed overflow-x-auto"
            style={{ background: 'transparent', margin: 0 }}
          >
            {terminalLines.map((line, i) => {
              if (line.type === 'blank') return <br key={i} />
              if (line.type === 'prompt') return (
                <div key={i}>
                  <span style={{ color: '#A3E635' }}>$ </span>
                  <span style={{ color: '#FAFAFA' }}>{line.text}</span>
                </div>
              )
              if (line.type === 'success') return (
                <div key={i}>
                  <span style={{ color: '#A3E635' }}>{line.text}</span>
                </div>
              )
              return (
                <div key={i}>
                  <span style={{ color: '#A1A1AA' }}>{line.text}</span>
                </div>
              )
            })}
          </pre>
        </div>

        {/* 5-step pipeline */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-700 ease-out delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-4 rounded-lg flex flex-col gap-2"
              style={{
                background: '#18181B',
                border: '1px solid #3F3F46',
                transition: 'border-color 200ms',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(163, 230, 53, 0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#3F3F46'
              }}
            >
              <span className="text-xs font-mono" style={{ color: '#A3E635' }}>{step.number}</span>
              <p className="text-sm font-bold text-[#FAFAFA]">{step.label}</p>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
