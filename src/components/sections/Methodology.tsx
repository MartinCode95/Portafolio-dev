import { Fragment, useEffect, useRef, useState } from 'react'

interface Step {
  number: string
  emoji: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    emoji: '📋',
    title: 'Defino qué construir',
    description: 'Antes de abrir el editor, escribo exactamente qué debe hacer cada parte del sistema y por qué.',
  },
  {
    number: '02',
    emoji: '📐',
    title: 'Establezco las reglas',
    description: 'Cada proyecto tiene sus propias reglas documentadas. La IA las conoce antes de generar una sola línea.',
  },
  {
    number: '03',
    emoji: '🤖',
    title: 'La IA construye',
    description: 'El agente implementa dentro del marco que yo definí. No improvisa — ejecuta lo que fue especificado.',
  },
  {
    number: '04',
    emoji: '✅',
    title: 'Un agente revisa',
    description: 'Antes de guardar cualquier cambio, un agente automático verifica que todo cumpla las reglas del proyecto.',
  },
  {
    number: '05',
    emoji: '🚀',
    title: 'Deploy sin sorpresas',
    description: 'Lo que acordamos es lo que se construyó. Cada decisión tiene trazabilidad desde el primer día.',
  },
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
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Metodología />'}
        </p>

        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Así nace una feature
        </h2>

        {/* Subtitle */}
        <p
          className={`text-[#A1A1AA] mb-12 md:mb-16 max-w-xl transition-all duration-700 ease-out delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          No escribo código para ver qué pasa. Cada feature sigue un proceso
          definido antes de que la IA genere una sola línea.
        </p>

        {/* Steps — Desktop: horizontal row with connectors */}
        <div className="hidden md:flex items-start mb-12">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div
                className={`flex-1 flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                {/* Emoji circle */}
                <div
                  className="flex items-center justify-center rounded-full text-3xl mb-3"
                  style={{
                    width: 72,
                    height: 72,
                    background: '#18181B',
                    border: '1px solid rgba(163, 230, 53, 0.35)',
                    flexShrink: 0,
                  }}
                >
                  {step.emoji}
                </div>
                <span className="text-xs font-mono text-[#A3E635] mb-1">{step.number}</span>
                <p className="text-sm font-bold text-[#FAFAFA] mb-2 leading-tight px-2">{step.title}</p>
                <p className="text-xs text-[#A1A1AA] leading-relaxed px-2">{step.description}</p>
              </div>

              {/* Connector line — not after last step */}
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 flex items-start pt-9" style={{ width: 32 }}>
                  <div className="w-full h-px" style={{ background: 'rgba(163, 230, 53, 0.35)' }} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Steps — Mobile: vertical column, no connectors */}
        <div className="md:hidden flex flex-col gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-4 items-start transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div
                className="flex items-center justify-center rounded-full text-2xl flex-shrink-0"
                style={{
                  width: 56,
                  height: 56,
                  background: '#18181B',
                  border: '1px solid rgba(163, 230, 53, 0.35)',
                }}
              >
                {step.emoji}
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-xs font-mono text-[#A3E635] mb-0.5">{step.number}</span>
                <p className="text-sm font-bold text-[#FAFAFA] mb-1">{step.title}</p>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div
          className={`text-center p-6 rounded-lg transition-all duration-700 ease-out delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            background: 'rgba(163, 230, 53, 0.05)',
            border: '1px solid rgba(163, 230, 53, 0.2)',
          }}
        >
          <p className="font-mono text-sm text-[#A3E635]">
            "Cada proyecto tiene su especificación documentada. Lo que acordamos es lo que se construye."
          </p>
        </div>
      </div>
    </section>
  )
}
