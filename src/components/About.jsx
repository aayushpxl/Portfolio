import { useEffect, useRef } from 'react'

const stats = [
  { label: 'PROJECTS', value: '10+', icon: '◈', color: '#00ff88' },
  { label: 'TECH STACK', value: '15+', icon: '⚔', color: '#00d4ff' },
  { label: 'COMMITS', value: '300+', icon: '◉', color: '#b14aff' },
  { label: 'HOURS CODED', value: '1000+', icon: '⏱', color: '#ffe54c' },
]

const info = [
  { label: 'NAME', value: 'Aayush Shrestha' },
  { label: 'CLASS', value: 'CS Student' },
  { label: 'ORIGIN', value: 'Nepal 🇳🇵' },
  { label: 'MAIL', value: 'aayushpxl11@gmail.com' },
  { label: 'STATUS', value: '✅ Open to Work' },
]

export default function About() {
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
    <section id="about" className="section-padding bg-pixel-grid">
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
              color: '#00d4ff',
              letterSpacing: '0.2em',
              textShadow: '0 0 8px #00d4ff66',
              marginBottom: '12px',
            }}
          >
            ◈ PLAYER INFO ◈
          </p>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(0.8rem, 3vw, 1.3rem)',
              color: '#ffffff',
              textShadow: '4px 4px 0 #00ff8820',
              lineHeight: 2,
            }}
          >
            ABOUT{' '}
            <span style={{ color: '#00ff88', textShadow: '0 0 12px #00ff88' }}>
              ME
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Pixel player card */}
          <div>
            {/* Avatar card */}
            <div
              className="retro-panel p-6 mb-6"
              style={{
                border: '2px solid #00ff8844',
              }}
            >
              <div
                className="flex items-center gap-4 mb-6"
                style={{ borderBottom: '1px solid #00ff8822', paddingBottom: '16px' }}
              >
                {/* Avatar */}
                <div
                  className="flex items-center justify-center text-5xl"
                  style={{
                    width: '80px',
                    height: '80px',
                    border: '2px solid #00ff88',
                    boxShadow: '0 0 12px #00ff8844',
                    background: 'rgba(0,255,136,0.08)',
                    imageRendering: 'pixelated',
                    flexShrink: 0,
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  👨‍💻
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.6rem',
                      color: '#00ff88',
                      textShadow: '0 0 8px #00ff88',
                      marginBottom: '8px',
                    }}
                  >
                    AAYUSH
                  </p>
                  <div className="achievement-badge">🏆 LVL 21 DEV</div>
                </div>
              </div>

              {/* Info grid */}
              <div className="space-y-3">
                {info.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '0.4rem',
                        color: '#6b7280',
                        letterSpacing: '0.08em',
                        minWidth: '70px',
                      }}
                    >
                      {label}:
                    </span>
                    <span
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: '1rem',
                        color: '#e2e8f0',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ label, value, icon, color }) => (
                <div
                  key={label}
                  className="retro-panel p-4 text-center"
                  style={{ border: `2px solid ${color}33` }}
                >
                  <div className="text-2xl mb-1" style={{ color }}>{icon}</div>
                  <p
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.7rem',
                      color,
                      textShadow: `0 0 8px ${color}`,
                      marginBottom: '4px',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.35rem',
                      color: '#6b7280',
                      letterSpacing: '0.07em',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="retro-panel p-6" style={{ border: '2px solid #00d4ff33' }}>
            <p
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.5rem',
                color: '#00d4ff',
                marginBottom: '16px',
                letterSpacing: '0.1em',
              }}
            >
              &gt; BIO.txt
            </p>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: '1.15rem',
                color: '#94a3b8',
                lineHeight: 1.7,
              }}
            >
              <p className="mb-4">
                I&apos;m a passionate Computer Science student and frontend developer
                based in Nepal. I love building clean, performant web applications that
                deliver great user experiences.
              </p>
              <p className="mb-4">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or leveling up my problem-solving
                skills through competitive programming.
              </p>
              <p>
                Currently questing through the full-stack realm, mastering React,
                Node.js, and everything in between. Always looking for new adventures in code.
              </p>
            </div>
            <a
              href="#contact"
              className="pixel-btn-green mt-6 inline-block"
            >
              ▶ LET&apos;S TALK
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
