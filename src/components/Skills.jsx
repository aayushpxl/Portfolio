import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'FRONTEND',
    icon: '🎨',
    color: '#00ff88',
    skills: [
      { name: 'React', icon: '⚛' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'HTML5', icon: '⬡' },
      { name: 'CSS3', icon: '◈' },
      { name: 'Tailwind', icon: '≋' },
      { name: 'Vite', icon: '⚡' },
    ],
  },
  {
    title: 'BACKEND',
    icon: '⚙',
    color: '#00d4ff',
    skills: [
      { name: 'Node.js', icon: '◎' },
      { name: 'Express', icon: '◉' },
      { name: 'REST API', icon: '⟋' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'LANGUAGES',
    icon: '💻',
    color: '#b14aff',
    skills: [
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: 'C' },
      { name: 'C++', icon: 'C+' },
      { name: 'SQL', icon: '🗄' },
    ],
  },
  {
    title: 'TOOLS',
    icon: '🛠',
    color: '#ffe54c',
    skills: [
      { name: 'Git', icon: '◱' },
      { name: 'GitHub', icon: '⬡' },
      { name: 'VS Code', icon: '◧' },
      { name: 'Postman', icon: '◎' },
      { name: 'Figma', icon: '✦' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding" style={{ background: '#0a0d14' }}>
      <div
        ref={ref}
        className="max-w-5xl mx-auto"
        style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'all 0.7s ease-out',
        }}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.5rem',
              color: '#b14aff',
              letterSpacing: '0.2em',
              textShadow: '0 0 8px #b14aff66',
              marginBottom: '12px',
            }}
          >
            ⚔ INVENTORY ⚔
          </p>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(0.8rem, 3vw, 1.3rem)',
              color: '#ffffff',
              textShadow: '4px 4px 0 #b14aff20',
              lineHeight: 2,
            }}
          >
            SKILL{' '}
            <span style={{ color: '#b14aff', textShadow: '0 0 12px #b14aff' }}>
              SLOTS
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="retro-panel p-5"
              style={{
                border: `2px solid ${group.color}33`,
                '--group-color': group.color,
              }}
            >
              {/* Group header */}
              <div
                className="flex items-center gap-3 mb-5"
                style={{ borderBottom: `1px solid ${group.color}22`, paddingBottom: '12px' }}
              >
                <span className="text-xl">{group.icon}</span>
                <p
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.55rem',
                    color: group.color,
                    textShadow: `0 0 8px ${group.color}`,
                    letterSpacing: '0.1em',
                  }}
                >
                  {group.title}
                </p>
              </div>

              {/* Skill tiles grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="skill-tile group"
                    style={{
                      '--hover-color': group.color,
                      border: `2px solid ${group.color}30`,
                      minWidth: '72px',
                      flex: '0 0 auto',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = group.color
                      e.currentTarget.style.boxShadow = `0 0 16px ${group.color}55, 4px 4px 0 ${group.color}30`
                      e.currentTarget.style.background = `${group.color}10`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${group.color}30`
                      e.currentTarget.style.boxShadow = ''
                      e.currentTarget.style.background = ''
                    }}
                  >
                    <span
                      className="text-lg mb-1"
                      style={{ color: group.color, imageRendering: 'pixelated' }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '0.35rem',
                        color: '#94a3b8',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                      }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XP bar */}
        <div
          className="mt-10 retro-panel p-5"
          style={{ border: '2px solid #00ff8833' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.45rem',
                color: '#00ff88',
              }}
            >
              TOTAL XP GAINED
            </span>
            <span
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.45rem',
                color: '#ffe54c',
                textShadow: '0 0 6px #ffe54c',
              }}
            >
              ★ 9,420 / 10,000
            </span>
          </div>
          <div className="pixel-progress">
            <div className="pixel-progress-fill" style={{ width: '94%' }} />
          </div>
          <p
            className="mt-2 text-center"
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: '0.9rem',
              color: '#6b7280',
            }}
          >
            Almost max level... keep grinding!
          </p>
        </div>
      </div>
    </section>
  )
}
