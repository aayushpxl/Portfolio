import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'PIXEL PORTFOLIO',
    description: 'A premium retro pixel-art portfolio built with React and Tailwind CSS. Full responsive design with CRT effects.',
    tech: ['React', 'Tailwind', 'Vite'],
    link: '#',
    github: 'https://github.com/aayushpxl/Portfolio',
    icon: '🚀',
    rarity: 'RARE',
    rarityColor: '#00d4ff',
    xp: 250,
  },
  {
    title: 'TASK COMMANDER',
    description: 'A collaborative task management tool with real-time updates and team-based quest tracking features.',
    tech: ['Node.js', 'MongoDB', 'React'],
    link: '#',
    github: '#',
    icon: '⚔',
    rarity: 'EPIC',
    rarityColor: '#b14aff',
    xp: 400,
  },
  {
    title: 'E-COMMERCE API',
    description: 'A scalable RESTful API for an e-commerce platform with secure JWT authentication and payment integration.',
    tech: ['Express', 'PostgreSQL', 'JWT'],
    link: '#',
    github: '#',
    icon: '💎',
    rarity: 'LEGENDARY',
    rarityColor: '#ffe54c',
    xp: 600,
  },
]

export default function Projects() {
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
    <section id="projects" className="section-padding bg-pixel-grid">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
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
              color: '#00d4ff',
              letterSpacing: '0.2em',
              textShadow: '0 0 8px #00d4ff66',
              marginBottom: '12px',
            }}
          >
            ◈ QUEST LOG ◈
          </p>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(0.8rem, 3vw, 1.3rem)',
              color: '#ffffff',
              textShadow: '4px 4px 0 #00d4ff20',
              lineHeight: 2,
            }}
          >
            MY{' '}
            <span style={{ color: '#00d4ff', textShadow: '0 0 12px #00d4ff' }}>
              PROJECTS
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="quest-card group">
              {/* Card top - item frame */}
              <div
                className="relative"
                style={{
                  height: '140px',
                  background: `linear-gradient(135deg, ${project.rarityColor}10 0%, #151c2c 100%)`,
                  borderBottom: `2px solid ${project.rarityColor}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Corner decorations */}
                <div
                  className="absolute top-0 left-0 w-4 h-4"
                  style={{ border: `2px solid ${project.rarityColor}`, borderRight: 'none', borderBottom: 'none' }}
                />
                <div
                  className="absolute top-0 right-0 w-4 h-4"
                  style={{ border: `2px solid ${project.rarityColor}`, borderLeft: 'none', borderBottom: 'none' }}
                />
                <div
                  className="absolute bottom-0 left-0 w-4 h-4"
                  style={{ border: `2px solid ${project.rarityColor}`, borderRight: 'none', borderTop: 'none' }}
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4"
                  style={{ border: `2px solid ${project.rarityColor}`, borderLeft: 'none', borderTop: 'none' }}
                />

                {/* Item icon */}
                <div
                  className="text-6xl"
                  style={{
                    filter: `drop-shadow(0 0 12px ${project.rarityColor})`,
                    animation: 'float 3s ease-in-out infinite',
                    imageRendering: 'pixelated',
                  }}
                >
                  {project.icon}
                </div>

                {/* Rarity badge */}
                <div
                  className="absolute top-3 right-3"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.35rem',
                    color: project.rarityColor,
                    textShadow: `0 0 6px ${project.rarityColor}`,
                    border: `1px solid ${project.rarityColor}44`,
                    padding: '3px 6px',
                    background: `${project.rarityColor}15`,
                    letterSpacing: '0.05em',
                  }}
                >
                  ★ {project.rarity}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.6rem',
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                    lineHeight: 1.8,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-4 flex-grow"
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '1.05rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '0.35rem',
                        color: project.rarityColor,
                        border: `1px solid ${project.rarityColor}44`,
                        padding: '3px 7px',
                        background: `${project.rarityColor}12`,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* XP reward */}
                <div
                  className="flex items-center gap-2 mb-4"
                  style={{ borderTop: `1px solid ${project.rarityColor}22`, paddingTop: '10px' }}
                >
                  <span
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.35rem',
                      color: '#ffe54c',
                      textShadow: '0 0 6px #ffe54c',
                    }}
                  >
                    +{project.xp} XP
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pixel-btn-green flex-1 text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    VIEW CODE
                  </a>
                  <a
                    href={project.link}
                    className="pixel-btn-blue flex-1 text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
