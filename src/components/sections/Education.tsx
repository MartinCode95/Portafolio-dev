import { useEffect, useRef, useState } from 'react'
import { education } from '../../data/education'
import type { Education } from '../../types'

interface TimelineItemProps {
  item: Education
  index: number
  visible: boolean
  isLast: boolean
}

function TimelineItem({ item, index, visible, isLast }: TimelineItemProps) {
  const delay = index * 130

  const isCompleted = item.status === 'completed'

  return (
    <div className="flex gap-6 relative">
      {/* Left column: dot + connecting line */}
      <div className="flex flex-col items-center shrink-0" style={{ width: '20px' }}>
        {/* Dot */}
        <div
          className="rounded-full shrink-0 z-10 transition-all duration-500"
          style={{
            width: '14px',
            height: '14px',
            marginTop: '4px',
            background: '#0F0F11',
            border: `2px solid ${isCompleted ? '#A3E635' : '#EAB308'}`,
            boxShadow: visible
              ? `0 0 8px ${isCompleted ? 'rgba(163, 230, 53, 0.5)' : 'rgba(234, 179, 8, 0.5)'}`
              : 'none',
            transitionDelay: `${delay}ms`,
          }}
        />

        {/* Vertical connector — hidden on last item */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-1"
            style={{
              background: 'linear-gradient(to bottom, #3F3F46 0%, rgba(63, 63, 70, 0.3) 100%)',
              minHeight: '32px',
            }}
          />
        )}
      </div>

      {/* Right column: card */}
      <div
        className="pb-10 flex-1"
        style={{
          transition: `opacity 550ms ease-out ${delay}ms, transform 550ms ease-out ${delay}ms`,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        }}
      >
        <div
          className="p-5 rounded-lg"
          style={{
            background: '#18181B',
            border: '1px solid #3F3F46',
            transition: 'border-color 200ms, background 200ms',
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(163, 230, 53, 0.35)'
            ;(e.currentTarget as HTMLDivElement).style.background = '#27272A'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor = '#3F3F46'
            ;(e.currentTarget as HTMLDivElement).style.background = '#18181B'
          }}
        >
          {/* Top row: institution + status badge */}
          <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
            <span className="text-xs font-mono text-[#A3E635] uppercase tracking-wider">
              {item.institution}
            </span>

            <span
              className="shrink-0 text-xs font-mono px-2.5 py-0.5 rounded"
              style={
                isCompleted
                  ? {
                      background: 'rgba(163, 230, 53, 0.1)',
                      border: '1px solid rgba(163, 230, 53, 0.3)',
                      color: '#A3E635',
                    }
                  : {
                      background: 'rgba(234, 179, 8, 0.1)',
                      border: '1px solid rgba(234, 179, 8, 0.3)',
                      color: '#EAB308',
                    }
              }
            >
              {isCompleted ? 'Completado' : 'En curso'}
            </span>
          </div>

          {/* Degree */}
          <h3 className="text-base font-semibold text-[#FAFAFA] leading-snug">
            {item.degree}
          </h3>

          {/* Year — only if present */}
          {item.year && (
            <p className="mt-2 text-sm text-[#A1A1AA] font-mono">
              {item.year}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="educacion"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Educación />'}
        </p>

        {/* Section title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-8 md:mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Formación académica
        </h2>

        {/* Timeline */}
        <div className="ml-1">
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              visible={visible}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
