import { useEffect, useRef, useState } from 'react'
import { skills } from '../../data/skills'
import type { SkillCategory } from '../../types'

interface SkillCardProps {
  category: SkillCategory
  index: number
  visible: boolean
  secondary?: boolean
}

function SkillCard({ category, index, visible, secondary = false }: SkillCardProps) {
  const delay = index * 100
  const borderColor = secondary ? 'rgba(251, 191, 36, 0.3)' : '#3F3F46'
  const borderHover = secondary ? 'rgba(251, 191, 36, 0.55)' : 'rgba(163, 230, 53, 0.4)'
  const headerColor = secondary ? '#FBB024' : '#A3E635'
  const badgeBg = secondary ? 'rgba(251, 191, 36, 0.07)' : 'rgba(163, 230, 53, 0.07)'
  const badgeBorder = secondary ? 'rgba(251, 191, 36, 0.25)' : 'rgba(163, 230, 53, 0.2)'

  return (
    <div
      className="p-6 rounded-lg flex flex-col gap-4"
      style={{
        background: '#18181B',
        border: `1px solid ${borderColor}`,
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms, border-color 200ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = borderHover
        ;(e.currentTarget as HTMLDivElement).style.background = '#27272A'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = borderColor
        ;(e.currentTarget as HTMLDivElement).style.background = '#18181B'
      }}
    >
      <h3 className="text-sm font-mono uppercase tracking-wider" style={{ color: headerColor }}>
        {category.category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map(skill => (
          <span
            key={skill}
            className="text-xs font-mono px-2.5 py-1 rounded"
            style={{
              background: badgeBg,
              border: `1px solid ${badgeBorder}`,
              color: '#FAFAFA',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-mono text-[#A3E635] mb-4">
          {'< Skills />'}
        </p>

        {/* Section title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-8 md:mb-12 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Stack tecnológico
        </h2>

        {/* Grid — skills principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.filter(c => !c.secondary).map((category, index) => (
            <SkillCard
              key={category.category}
              category={category}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* Label + grid — skills secundarias */}
        {skills.some(c => c.secondary) && (
          <div className="mt-10">
            <p
              className={`text-xs font-mono text-[#71717A] uppercase tracking-widest mb-4 transition-all duration-700 ease-out delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Formándome también en:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.filter(c => c.secondary).map((category, index) => (
                <SkillCard
                  key={category.category}
                  category={category}
                  index={index}
                  visible={visible}
                  secondary
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
