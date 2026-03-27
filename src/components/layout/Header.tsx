import { useState } from 'react'

const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
]

// ─── Animated hamburger ───────────────────────────────────────────────────────
// Uses three <span> bars and CSS transforms to morph into an X.
// No external CSS file — all via inline styles with transitions.

interface HamburgerIconProps {
  open: boolean
}

function HamburgerIcon({ open }: HamburgerIconProps) {
  const baseBarStyle: React.CSSProperties = {
    display: 'block',
    width: 22,
    height: 2,
    borderRadius: 2,
    background: 'currentColor',
    transformOrigin: 'center',
    transition: 'transform 300ms ease, opacity 300ms ease',
  }

  return (
    <span
      aria-hidden="true"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: 22,
      }}
    >
      {/* Top bar: rotates +45deg and shifts down to meet middle */}
      <span
        style={{
          ...baseBarStyle,
          transform: open
            ? 'translateY(7px) rotate(45deg)'
            : 'translateY(0) rotate(0deg)',
        }}
      />
      {/* Middle bar: fades out */}
      <span
        style={{
          ...baseBarStyle,
          opacity: open ? 0 : 1,
          transform: open ? 'scaleX(0)' : 'scaleX(1)',
        }}
      />
      {/* Bottom bar: rotates -45deg and shifts up to meet middle */}
      <span
        style={{
          ...baseBarStyle,
          transform: open
            ? 'translateY(-7px) rotate(-45deg)'
            : 'translateY(0) rotate(0deg)',
        }}
      />
    </span>
  )
}

// ─── Main Header ──────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F11]/90 backdrop-blur-sm"
      style={{ borderBottom: '1px solid #3F3F46' }}
    >
      {/* Top bar */}
      <div className="h-16 flex items-center px-4 sm:px-6">
        <span className="font-bold text-[#A3E635] text-lg mr-auto">
          Martín García
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#A3E635] min-h-[44px] flex items-center"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-[#A1A1AA] hover:text-[#A3E635] transition-colors duration-200 -mr-1"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu — animated slide down with opacity */}
      <nav
        id="mobile-nav"
        className="md:hidden flex flex-col overflow-hidden"
        aria-hidden={!menuOpen}
        style={{
          borderTop: menuOpen ? '1px solid #3F3F46' : '1px solid transparent',
          maxHeight: menuOpen ? `${navLinks.length * 56}px` : '0px',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'max-height 300ms ease, opacity 250ms ease, transform 250ms ease, border-color 300ms ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="px-4 py-3 text-sm text-[#A1A1AA] hover:text-[#A3E635] hover:bg-[#18181B] transition-colors duration-200 min-h-[44px] flex items-center"
            style={{ borderBottom: '1px solid rgba(63, 63, 70, 0.5)' }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
