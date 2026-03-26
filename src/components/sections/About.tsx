import { useEffect, useRef, useState } from 'react'
import { personal } from '../../data/personal'

interface StatCard {
  value: string
  label: string
  suffix?: string
}

const stats: StatCard[] = [
  { value: '2+', label: 'Años de formación activa' },
  { value: '3', label: 'Proyectos personales en producción' },
  { value: '10+', label: 'Tecnologías en el stack' },
]

export default function About() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Sobre mí />'}
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column — text */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-6">
              Quién soy
            </h2>

            <p className="text-[#A1A1AA] leading-relaxed mb-4">
              {personal.bio}
            </p>

            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              Lo que me diferencia es el proceso: cada componente que construyo fue especificado antes
              de ser codificado, revisado por un agente antes de commiteado, y pensado para escalar.
              No "vibe coding" — desarrollo con intención, reglas explícitas y trazabilidad completa.
            </p>

            {/* Location + role pill */}
            <div className="flex flex-wrap gap-3">
              <span
                className="text-xs font-mono text-[#A3E635] px-3 py-1.5 rounded-full"
                style={{ border: '1px solid rgba(163, 230, 53, 0.3)', background: 'rgba(163, 230, 53, 0.05)' }}
              >
                {personal.role}
              </span>
              <span
                className="text-xs font-mono text-[#A1A1AA] px-3 py-1.5 rounded-full"
                style={{ border: '1px solid #3F3F46', background: '#18181B' }}
              >
                📍 {personal.location}
              </span>
            </div>
          </div>

          {/* Right column — stats */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ease-out delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-[#18181B] border border-[#3F3F46] hover:border-[rgba(163,230,53,0.4)] transition-colors duration-200"
              >
                <span className="text-3xl font-bold text-[#A3E635]">
                  {stat.value}
                </span>
                <p className="text-sm text-[#A1A1AA] mt-1">{stat.label}</p>
              </div>
            ))}

            {/* Differentiator highlight card */}
            <div
              className="p-5 rounded-lg mt-2"
              style={{
                background: 'rgba(163, 230, 53, 0.05)',
                border: '1px solid rgba(163, 230, 53, 0.2)',
              }}
            >
              <p className="text-xs font-mono text-[#A3E635] mb-1 uppercase tracking-wider">
                AI-driven dev
              </p>
              <p className="text-sm text-[#FAFAFA] font-medium">
                SDD · Claude Code · GGA
              </p>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Spec primero, calidad antes del commit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
