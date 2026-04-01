import { useEffect, useRef, useState } from 'react'
import { personal } from '../../data/personal'
import type { ReactNode } from 'react'

interface SoftSkill {
  icon: ReactNode
  title: string
  description: string
}

const softSkills: SoftSkill[] = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="5" /><line x1="15" y1="2" x2="15" y2="5" />
        <line x1="9" y1="19" x2="9" y2="22" /><line x1="15" y1="19" x2="15" y2="22" />
        <line x1="2" y1="9" x2="5" y2="9" /><line x1="2" y1="15" x2="5" y2="15" />
        <line x1="19" y1="9" x2="22" y2="9" /><line x1="19" y1="15" x2="22" y2="15" />
      </svg>
    ),
    title: 'Pensamiento sistémico',
    description: 'Pensar de forma sistemática me ayuda a organizar mejor mis proyectos y anticipar problemas antes de que aparezcan.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: 'Comunicación clara',
    description: 'Me resulta natural explicar lo que hago y por qué — tanto a otros developers como a clientes sin perfil técnico.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Autonomía',
    description: 'Cuando es necesario resuelvo los problemas por mi cuenta, pero también sé cuándo pedir ayuda o trabajar en equipo para llegar más rápido.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Aprendizaje continuo',
    description: 'Me gusta mantenerme al día con lo que está cambiando en la industria y adoptar lo que realmente aporta, no lo que está de moda.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="8 11 10 13 14 9" />
      </svg>
    ),
    title: 'Atención al detalle',
    description: 'Los detalles importan. Prefiero revisar todo antes de dar algo por terminado — me da tranquilidad y el resultado es mejor.',
  },
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
              Cada proyecto que entrego tiene especificación documentada, reglas explícitas y revisión
              antes del commit. No importa el tamaño del producto ni quién esté detrás — el método es
              el mismo. Y ese método es lo que garantiza predecibilidad en cada entrega.
            </p>

            <div className="flex flex-wrap gap-3">
              <span
                className="text-xs font-mono text-[#A3E635] px-3 py-1.5 rounded-full"
                style={{ border: '1px solid rgba(163, 230, 53, 0.3)', background: 'rgba(163, 230, 53, 0.05)' }}
              >
                {personal.role}
              </span>
            </div>
          </div>

          {/* Right column — soft skills */}
          <div
            className={`flex flex-col gap-3 transition-all duration-700 ease-out delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {softSkills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#18181B] border border-[#3F3F46] hover:border-[rgba(163,230,53,0.4)] transition-colors duration-200"
              >
                <div
                  className="flex items-center justify-center rounded-md shrink-0 mt-0.5 w-9 h-9"
                  style={{
                    background: 'rgba(163, 230, 53, 0.08)',
                    border: '1px solid rgba(163, 230, 53, 0.2)',
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FAFAFA] mb-0.5">{skill.title}</p>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
