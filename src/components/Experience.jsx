import { useEffect, useRef } from 'react'

const timeline = [
  {
    type: 'EDUCATION',
    icon: '🎓',
    title: "Bachelor's in Computer Science",
    org: 'Tribhuvan University',
    year: '2022 – PRESENT',
    desc: 'Studying CS fundamentals, algorithms, data structures, and systems programming.',
    color: '#00ff88',
    badge: '🏅 ACTIVE QUEST',
    xp: 500,
  },
  {
    type: 'PROJECT',
    icon: '🚀',
    title: 'Pixel Portfolio',
    org: 'Personal Project',
    year: '2025',
    desc: 'Built a full retro-themed developer portfolio with React, pixel art UI, CRT effects, and animations.',
    color: '#00d4ff',
    badge: '⭐ COMPLETED',
    xp: 250,
  },
  {
    type: 'ACHIEVEMENT',
    icon: '🏆',
    title: 'Open Source Contributor',
    org: 'GitHub Community',
    year: '2024',
    desc: 'Contributed to open-source projects and built a growing repository of personal projects.',
    color: '#b14aff',
    badge: '🌟 ACHIEVEMENT',
    xp: 300,
  },
  {
    type: 'PROJECT',
    icon: '⚔',
    title: 'Full Stack Development',
    org: 'Self-Taught',
    year: '2023 – 2024',
    desc: 'Mastered Node.js, Express, MongoDB to complement frontend skills and build complete web apps.',
    color: '#ffe54c',
    badge: '🔓 UNLOCKED',
    xp: 400,
  },
]

export default function Experience() {
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
    <section id="experience" className="section-padding" style={{ background: '#0a0d14' }}>
      <div
        ref={ref}
        className="max-w-4xl mx-auto"
        style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'all 0.7s ease-out',
        }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.5rem',
              color: '#ffe54c',
              letterSpacing: '0.2em',
              textShadow: '0 0 8px #ffe54c66',
              marginBottom: '12px',
            }}
          >
            ◉ LEVEL MAP ◉
          </p>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(0.8rem, 3vw, 1.3rem)',
              color: '#ffffff',
              textShadow: '4px 4px 0 #ffe54c20',
              lineHeight: 2,
            }}
          >
            MY{' '}
            <span style={{ color: '#ffe54c', textShadow: '0 0 12px #ffe54c' }}>
              JOURNEY
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical path line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, #00ff88, #00d4ff, #b14aff, #ffe54c)',
              boxShadow: '0 0 8px #00ff8844',
            }}
          />

          <div className="space-y-10 pl-16">
            {timeline.map((item, idx) => (
              <div key={item.title} className="relative">
                {/* Node on path */}
                <div
                  className="absolute"
                  style={{
                    left: '-52px',
                    top: '12px',
                    width: '28px',
                    height: '28px',
                    background: item.color,
                    border: '3px solid #0a0d14',
                    boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    imageRendering: 'pixelated',
                  }}
                >
                  {idx + 1}
                </div>

                {/* Connector arrows */}
                {idx < timeline.length - 1 && (
                  <div
                    className="absolute"
                    style={{
                      left: '-40px',
                      top: '46px',
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.4rem',
                      color: item.color,
                    }}
                  >
                    ▼
                  </div>
                )}

                {/* Card */}
                <div
                  className="retro-panel p-5"
                  style={{
                    border: `2px solid ${item.color}33`,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}88`
                    e.currentTarget.style.boxShadow = `0 0 16px ${item.color}33, 4px 4px 0 ${item.color}22`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}33`
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{item.icon}</span>
                        <span
                          style={{
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: '0.38rem',
                            color: item.color,
                            letterSpacing: '0.08em',
                            textShadow: `0 0 6px ${item.color}`,
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Press Start 2P', cursive",
                          fontSize: '0.55rem',
                          color: '#e2e8f0',
                          lineHeight: 1.8,
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'VT323', monospace",
                          fontSize: '1rem',
                          color: '#64748b',
                        }}
                      >
                        {item.org}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        style={{
                          fontFamily: "'Press Start 2P', cursive",
                          fontSize: '0.38rem',
                          color: '#6b7280',
                          marginBottom: '6px',
                        }}
                      >
                        {item.year}
                      </p>
                      <div className="achievement-badge" style={{ color: item.color, borderColor: `${item.color}55`, background: `${item.color}10` }}>
                        {item.badge}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: '1.05rem',
                      color: '#94a3b8',
                      lineHeight: 1.5,
                      marginBottom: '10px',
                    }}
                  >
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '0.35rem',
                        color: '#ffe54c',
                        textShadow: '0 0 5px #ffe54c',
                      }}
                    >
                      +{item.xp} XP
                    </span>
                    <div className="flex-1 pixel-progress">
                      <div
                        className="pixel-progress-fill"
                        style={{
                          width: '100%',
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
