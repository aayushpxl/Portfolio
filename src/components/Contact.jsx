import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [cursor, setCursor] = useState(true)

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

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 500)
    return () => clearInterval(id)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding bg-pixel-grid">
      <div
        ref={ref}
        className="max-w-3xl mx-auto"
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
              color: '#00ff88',
              letterSpacing: '0.2em',
              textShadow: '0 0 8px #00ff8866',
              marginBottom: '12px',
            }}
          >
            ✉ TRANSMISSION ✉
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
            CONTACT{' '}
            <span style={{ color: '#00ff88', textShadow: '0 0 12px #00ff88' }}>
              ME
            </span>
          </h2>
        </div>

        {/* Terminal window */}
        <div
          className="retro-panel overflow-hidden"
          style={{ border: '2px solid #00ff8844' }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: '#00ff8812',
              borderBottom: '2px solid #00ff8833',
            }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3" style={{ background: '#ff4488', boxShadow: '0 0 5px #ff4488' }} />
              <div className="w-3 h-3" style={{ background: '#ffe54c', boxShadow: '0 0 5px #ffe54c' }} />
              <div className="w-3 h-3" style={{ background: '#00ff88', boxShadow: '0 0 5px #00ff88' }} />
            </div>
            <p
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.4rem',
                color: '#00ff8888',
                letterSpacing: '0.1em',
              }}
            >
              terminal@aayush:~$
            </p>
            <div className="flex gap-2 invisible">
              <div className="w-3 h-3" />
            </div>
          </div>

          <div className="p-6">
            {/* Terminal prompt header */}
            <div className="mb-6">
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '1.1rem',
                  color: '#00ff88',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: '#00d4ff' }}>$</span> init_contact --new-session
              </p>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '1.05rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                &gt; Session ready. Fill in your details and press TRANSMIT.
              </p>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '1.05rem',
                  color: '#64748b',
                }}
              >
                &gt; Response guaranteed within 24hrs.{' '}
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '1em',
                    background: cursor ? '#00ff88' : 'transparent',
                    verticalAlign: 'middle',
                  }}
                />
              </p>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.4rem',
                      color: '#00ff8888',
                      display: 'block',
                      marginBottom: '6px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    &gt; NAME:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="retro-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.4rem',
                      color: '#00ff8888',
                      display: 'block',
                      marginBottom: '6px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    &gt; EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="retro-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '0.4rem',
                      color: '#00ff8888',
                      display: 'block',
                      marginBottom: '6px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    &gt; MESSAGE:
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="retro-input resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button type="submit" className="pixel-btn-green">
                    ▶ TRANSMIT MESSAGE
                  </button>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:aayushpxl11@gmail.com"
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: '1rem',
                        color: '#00d4ff',
                        textDecoration: 'none',
                      }}
                    >
                      ✉ aayushpxl11@gmail.com
                    </a>
                    <a
                      href="https://github.com/aayushpxl"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: '1rem',
                        color: '#b14aff',
                        textDecoration: 'none',
                      }}
                    >
                      ◈ github.com/aayushpxl
                    </a>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div
                  className="text-5xl mb-6"
                  style={{ filter: 'drop-shadow(0 0 12px #00ff88)' }}
                >
                  ✅
                </div>
                <p
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '0.6rem',
                    color: '#00ff88',
                    textShadow: '0 0 10px #00ff88',
                    marginBottom: '12px',
                    lineHeight: 2,
                  }}
                >
                  TRANSMISSION SENT!
                </p>
                <p
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '1.1rem',
                    color: '#64748b',
                  }}
                >
                  &gt; Message queued. I&apos;ll respond soon. Thank you!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
