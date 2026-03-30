import { useEffect, useRef, useState, useCallback } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  visible: boolean
}

interface ProjectPreviewProps {
  title: string
  imageUrl?: string
}

function getInitials(title: string): string {
  return title
    .split(/[\s–\-]+/)
    .filter(word => word.length > 0 && /[A-Za-z]/.test(word[0]))
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')
}

function ProjectPreview({ title, imageUrl }: ProjectPreviewProps) {
  if (imageUrl) {
    return (
      <div className="w-full overflow-hidden rounded-t-lg" style={{ aspectRatio: '16/9' }}>
        <img
          src={imageUrl}
          alt={`Preview de ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  const initials = getInitials(title)

  return (
    <div
      className="w-full flex items-center justify-center rounded-t-lg relative overflow-hidden"
      style={{
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, #18181B 0%, #1e1e21 50%, #1a1e18 100%)',
        borderBottom: '1px solid #3F3F46',
      }}
    >
      {/* Noise texture layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 40%, rgba(163, 230, 53, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 75% 70%, rgba(163, 230, 53, 0.04) 0%, transparent 50%)',
        }}
      />

      {/* Terminal icon SVG */}
      <div className="relative flex flex-col items-center gap-3 select-none">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={{ opacity: 0.35 }}
        >
          <rect x="2" y="3" width="20" height="18" rx="3" stroke="#A3E635" strokeWidth="1.5" />
          <path d="M7 9l3 3-3 3" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 15h4" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span
          className="font-mono font-bold tracking-widest"
          style={{ color: 'rgba(163, 230, 53, 0.45)', fontSize: '0.9rem', letterSpacing: '0.2em' }}
        >
          {initials}
        </span>
      </div>
    </div>
  )
}

function ProjectCard({ project, visible }: ProjectCardProps) {
  return (
    <div
      className="rounded-lg flex flex-col overflow-hidden h-full"
      style={{
        background: '#18181B',
        border: '1px solid #3F3F46',
        transition: 'opacity 600ms ease-out, transform 600ms ease-out, border-color 200ms, background 200ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = project.wip
          ? 'rgba(234, 179, 8, 0.4)'
          : 'rgba(163, 230, 53, 0.4)'
        ;(e.currentTarget as HTMLDivElement).style.background = '#27272A'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#3F3F46'
        ;(e.currentTarget as HTMLDivElement).style.background = '#18181B'
      }}
    >
      {/* Image / Placeholder preview */}
      <ProjectPreview title={project.title} imageUrl={project.imageUrl} />

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Header: title + badges */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-[#FAFAFA] leading-snug">
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-2">
            {project.wip && (
              <span
                className="text-xs font-mono px-2.5 py-1 rounded"
                style={{
                  background: 'rgba(234, 179, 8, 0.1)',
                  border: '1px solid rgba(234, 179, 8, 0.35)',
                  color: '#EAB308',
                }}
              >
                En desarrollo
              </span>
            )}
            {project.featured && (
              <span
                className="text-xs font-mono px-2.5 py-1 rounded"
                style={{
                  background: 'rgba(163, 230, 53, 0.1)',
                  border: '1px solid rgba(163, 230, 53, 0.35)',
                  color: '#A3E635',
                }}
              >
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          {project.description}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded"
              style={{
                background: 'rgba(163, 230, 53, 0.07)',
                border: '1px solid rgba(163, 230, 53, 0.2)',
                color: '#FAFAFA',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links — only render if they exist */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-3 pt-1 mt-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-mono px-4 py-2 min-h-[44px] rounded transition-colors duration-200 border border-[#3F3F46] text-[#A1A1AA] bg-transparent hover:border-[rgba(163,230,53,0.4)] hover:text-[#A3E635]"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-mono px-4 py-2 min-h-[44px] rounded transition-colors duration-200 border border-[rgba(163,230,53,0.35)] text-[#A3E635] bg-[rgba(163,230,53,0.1)] hover:bg-[rgba(163,230,53,0.18)]"
              >
                Live ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Carousel nav buttons ────────────────────────────────────────────────────

interface NavButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}

function NavButton({ direction, onClick, disabled }: NavButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Proyecto anterior' : 'Proyecto siguiente'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: '#18181B',
        border: `1px solid ${hovered && !disabled ? 'rgba(163, 230, 53, 0.6)' : '#3F3F46'}`,
        color: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.3 : 1,
        transition: 'border-color 200ms, opacity 200ms',
        flexShrink: 0,
        padding: 0,
      }}
    >
      {direction === 'prev' ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="#FAFAFA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="#FAFAFA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

// ─── Dots ────────────────────────────────────────────────────────────────────

interface DotsProps {
  count: number
  active: number
  onSelect: (index: number) => void
}

function Dots({ count, active, onSelect }: DotsProps) {
  if (count <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Slides del carrusel">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Ir al proyecto ${i + 1}`}
          onClick={() => onSelect(i)}
          className="inline-flex items-center justify-center"
          style={{
            minWidth: 44,
            minHeight: 44,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: i === active ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: i === active ? '#A3E635' : '#3F3F46',
              transition: 'width 300ms ease, background 300ms ease',
            }}
          />
        </button>
      ))}
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

// How many cards visible per viewport
const CARDS_DESKTOP = 2
const CARDS_MOBILE = 1

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  // Pointer drag state
  const pointerStartX = useRef<number | null>(null)
  const pointerStartTime = useRef<number>(0)
  const isDragging = useRef(false)

  // How many cards per slide in current viewport
  const cardsPerSlide = isDesktop ? CARDS_DESKTOP : CARDS_MOBILE

  // Total number of "pages" (slides)
  const totalSlides = Math.ceil(projects.length / cardsPerSlide)

  // Clamp helper
  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)

  // Responsive detection
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Reset index when viewport changes to avoid out-of-bounds
  useEffect(() => {
    setCurrentIndex(prev => clamp(prev, 0, Math.max(0, totalSlides - 1)))
  }, [isDesktop, totalSlides])

  // Intersection observer for section entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(clamp(index, 0, totalSlides - 1))
  }, [totalSlides])

  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])
  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])

  // ── Pointer drag / swipe handlers ──────────────────────────────────────────
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary pointer (finger or left mouse)
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerStartX.current = e.clientX
    pointerStartTime.current = Date.now()
    isDragging.current = false
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const delta = Math.abs(e.clientX - pointerStartX.current)
    if (delta > 8) isDragging.current = true
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return

    const deltaX = e.clientX - pointerStartX.current
    const elapsed = Date.now() - pointerStartTime.current

    // Swipe threshold: moved >40px OR fast flick
    const isSwipe = Math.abs(deltaX) > 40 || (Math.abs(deltaX) > 20 && elapsed < 300)

    if (isSwipe) {
      if (deltaX < 0) goNext()
      else goPrev()
    }

    pointerStartX.current = null
    isDragging.current = false
  }

  const handlePointerCancel = () => {
    pointerStartX.current = null
    isDragging.current = false
  }

  // Prevent click on children after drag
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const showControls = projects.length > 1

  // translateX percentage: each slide moves by (100 / cardsPerSlide)% per card group
  const translateX = currentIndex * -(100 / cardsPerSlide) * cardsPerSlide

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Proyectos />'}
        </p>

        {/* Section title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-8 md:mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Lo que construí
        </h2>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev / Next buttons — overlaid on the sides */}
          {showControls && (
            <>
              <div
                className="absolute left-0 top-1/2 z-10 hidden md:flex"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <NavButton direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
              </div>
              <div
                className="absolute right-0 top-1/2 z-10 hidden md:flex"
                style={{ transform: 'translate(50%, -50%)' }}
              >
                <NavButton direction="next" onClick={goNext} disabled={currentIndex >= totalSlides - 1} />
              </div>
            </>
          )}

          {/* Overflow clip */}
          <div className="overflow-hidden rounded-lg">
            {/* Sliding track */}
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: 'transform 420ms cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: showControls ? 'grab' : 'default',
                userSelect: 'none',
                touchAction: 'pan-y',
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onClick={handleClick}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    // Each card takes exactly 1/cardsPerSlide of the track width
                    flex: `0 0 ${100 / cardsPerSlide}%`,
                    maxWidth: `${100 / cardsPerSlide}%`,
                    // Gutter between cards
                    paddingLeft: cardsPerSlide > 1 ? '8px' : 0,
                    paddingRight: cardsPerSlide > 1 ? '8px' : 0,
                    boxSizing: 'border-box',
                  }}
                >
                  <ProjectCard
                    project={project}
                    visible={visible}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile prev/next — shown below on small screens */}
          {showControls && (
            <div className="flex md:hidden items-center justify-center gap-4 mt-4">
              <NavButton direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
              <NavButton direction="next" onClick={goNext} disabled={currentIndex >= totalSlides - 1} />
            </div>
          )}

          {/* Dots */}
          <Dots count={totalSlides} active={currentIndex} onSelect={goTo} />
        </div>
      </div>
    </section>
  )
}
