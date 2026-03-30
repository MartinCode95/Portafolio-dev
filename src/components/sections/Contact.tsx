import { useEffect, useRef, useState } from 'react'
import { personal } from '../../data/personal'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
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
      id="contacto"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      {/* Top separator — gradient fade */}
      <div
        className="max-w-4xl mx-auto mb-20"
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, #3F3F46 30%, #3F3F46 70%, transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <p
          className={`text-sm font-mono text-[#A3E635] mb-4 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {'< Contacto />'}
        </p>

        {/* Headline */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4 transition-all duration-700 ease-out delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          ¿Hablamos?
        </h2>

        {/* Subtitle */}
        <p
          className={`text-[#A1A1AA] text-base sm:text-lg max-w-md mx-auto mb-10 md:mb-12 transition-all duration-700 ease-out delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Estoy disponible para proyectos freelance, oportunidades laborales o simplemente charlar sobre tecnología.
        </p>

        {/* CTA principal — mailto */}
        <div
          className={`mb-10 transition-all duration-700 ease-out delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 min-h-[44px] rounded-lg font-semibold text-sm sm:text-base text-[#0F0F11] bg-[#A3E635] transition-all duration-200 hover:brightness-110 active:scale-95 max-w-full overflow-hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a1 1 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
            </svg>
            <span className="truncate">{personal.email}</span>
          </a>
        </div>

        {/* Links secundarios — LinkedIn y GitHub */}
        <div
          className={`flex justify-center gap-3 sm:gap-4 mb-10 md:mb-12 transition-all duration-700 ease-out delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:text-[#A3E635] hover:border-[rgba(163,230,53,0.4)] border border-[#3F3F46] bg-[#18181B]"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:text-[#A3E635] hover:border-[rgba(163,230,53,0.4)] border border-[#3F3F46] bg-[#18181B]"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>

        {/* Info adicional — location */}
        <div
          className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#A1A1AA] transition-all duration-700 ease-out delay-[400ms] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {personal.location}
          </span>
        </div>
      </div>
    </section>
  )
}
