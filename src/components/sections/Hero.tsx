import GeometricBackground from '../ui/GeometricBackground'

function AvatarPlaceholder() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0">
      {/* Anillo exterior con accent color */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: '2px solid rgba(163, 230, 53, 0.4)' }}
      />
      {/* Anillo interior con gap */}
      <div
        className="absolute inset-2 rounded-full overflow-hidden"
        style={{ background: '#18181b' }}
      >
        {/* SVG avatar placeholder */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Fondo */}
          <rect width="200" height="200" fill="#27272a" />
          {/* Cuerpo */}
          <ellipse cx="100" cy="160" rx="55" ry="35" fill="#3f3f46" />
          {/* Cabeza */}
          <circle cx="100" cy="85" r="38" fill="#3f3f46" />
          {/* Cara — ojos */}
          <circle cx="88" cy="82" r="4" fill="#71717a" />
          <circle cx="112" cy="82" r="4" fill="#71717a" />
          {/* Cara — boca */}
          <path d="M88 98 Q100 108 112 98" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Detalle accent */}
          <circle cx="100" cy="85" r="38" stroke="#A3E635" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        </svg>
      </div>
      {/* Punto decorativo accent */}
      <div
        className="absolute bottom-3 right-3 w-4 h-4 rounded-full"
        style={{ background: '#A3E635', boxShadow: '0 0 10px rgba(163,230,53,0.6)' }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6">
      <GeometricBackground />
<div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-mono text-[#A3E635] mb-4">
            {'< Desarrollador Frontend />'}
            <span className="cursor-blink ml-0.5">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAFA] leading-tight">
            Martín García
          </h1>

          <p className="text-base sm:text-xl text-[#A1A1AA] mt-2">
            Desarrollo web moderno · AI-driven
          </p>

          <p className="text-sm text-[#A1A1AA] mt-4 max-w-2xl">
            Construyo productos web con React y TypeScript, usando IA como capa de arquitectura y revisión.
            Metodología SDD: especificación antes que código, calidad garantizada antes de cada commit.
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
        <AvatarPlaceholder />
      </div>
    </section>
  )
}
