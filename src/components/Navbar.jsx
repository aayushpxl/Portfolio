import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'HOME', href: '#hero', icon: '⌂' },
  { label: 'SKILLS', href: '#skills', icon: '⚔' },
  { label: 'PROJECTS', href: '#projects', icon: '◈' },
  { label: 'QUEST', href: '#experience', icon: '◉' },
  { label: 'CONTACT', href: '#contact', icon: '✉' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '2px solid #00ff8822' : '2px solid transparent',
          boxShadow: scrolled ? '0 0 20px #00ff8810' : 'none',
        }}
      >
        {/* Top pixel accent bar */}
        <div
          className="w-full h-0.5"
          style={{
            background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, #b14aff, transparent)',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
          >
            <span
              className="text-neon-green"
              style={{ textShadow: '0 0 10px #00ff88' }}
            >
              &gt;_
            </span>
            <span
              className="text-white"
              style={{ textShadow: '0 0 6px #ffffff55' }}
            >
              AAYUSH
            </span>
            <span className="text-neon-green animate-blink">█</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative group px-4 py-2 flex items-center gap-1.5 transition-all duration-200"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.5rem',
                      color: isActive ? '#00ff88' : '#6b7280',
                      textShadow: isActive ? '0 0 8px #00ff88' : 'none',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <span
                      className="opacity-60 group-hover:opacity-100"
                      style={{ color: isActive ? '#00ff88' : '#00d4ff' }}
                    >
                      {link.icon}
                    </span>
                    {link.label}
                    {/* Active underline pixel border */}
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
                      style={{
                        background: isActive ? '#00ff88' : 'transparent',
                        boxShadow: isActive ? '0 0 6px #00ff88' : 'none',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                    {/* Hover glow frame */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                      style={{
                        border: '1px solid #00ff8844',
                        boxShadow: 'inset 0 0 8px #00ff8820',
                      }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ border: '1px solid #00ff8844' }}
          >
            <div
              className="w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff88',
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }}
            />
            <div
              className="w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff88',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              className="w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#00ff88',
                transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden bg-dark/98 backdrop-blur-xl px-6 py-6"
            style={{ borderTop: '2px solid #00ff8833' }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 transition-all duration-200"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.55rem',
                      color: '#00ff88',
                      border: '1px solid #00ff8833',
                      letterSpacing: '0.08em',
                    }}
                  >
                    <span style={{ color: '#00d4ff' }}>{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
