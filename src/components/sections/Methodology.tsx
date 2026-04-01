import { Fragment, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const SpecIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
)

const RulesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const BuildIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="5" width="14" height="14" rx="1" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="2" x2="9" y2="5" />
    <line x1="15" y1="2" x2="15" y2="5" />
    <line x1="9" y1="19" x2="9" y2="22" />
    <line x1="15" y1="19" x2="15" y2="22" />
    <line x1="2" y1="9" x2="5" y2="9" />
    <line x1="2" y1="15" x2="5" y2="15" />
    <line x1="19" y1="9" x2="22" y2="9" />
    <line x1="19" y1="15" x2="22" y2="15" />
  </svg>
)

const ReviewIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <polyline points="8 11 10 13 14 9" />
  </svg>
)

const DeployIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
)

interface Step {
  number: string
  icon: ReactNode
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: <SpecIcon />,
    title: 'Defino qué construir',
    description: 'Antes de abrir el editor, escribo exactamente qué debe hacer cada parte del sistema y por qué.',
  },
  {
    number: '02',
    icon: <RulesIcon />,
    title: 'Establezco las reglas',
    description: 'Cada proyecto tiene sus propias reglas documentadas. La IA las conoce antes de generar una sola línea.',
  },
  {
    number: '03',
    icon: <BuildIcon />,
    title: 'La IA construye',
    description: 'El agente implementa dentro del marco que yo definí. No improvisa — ejecuta lo que fue especificado.',
  },
  {
    number: '04',
    icon: <ReviewIcon />,
    title: 'Un agente revisa',
    description: 'Antes de guardar cualquier cambio, un agente automático verifica que todo cumpla las reglas del proyecto.',
  },
  {
    number: '05',
    icon: <DeployIcon />,
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
                  className="flex items-center justify-center rounded-full mb-3 w-[72px] h-[72px] shrink-0"
                  style={{
                    background: '#18181B',
                    border: '1px solid rgba(163, 230, 53, 0.35)',
                  }}
                >
                  {step.icon}
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
                className="flex items-center justify-center rounded-full shrink-0 w-14 h-14"
                style={{
                  background: '#18181B',
                  border: '1px solid rgba(163, 230, 53, 0.35)',
                }}
              >
                {step.icon}
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
