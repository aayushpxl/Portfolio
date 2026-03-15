import { useEffect, useRef, useState } from 'react'

const PIXELS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
  size: 4 + Math.floor(Math.random() * 4) * 4,
  color: ['#00ff88', '#00d4ff', '#b14aff', '#ffe54c'][Math.floor(Math.random() * 4)],
}))

const TITLE = "Aayush Shrestha"
const SUBTITLE_FRAMES = [
  "Frontend Developer_",
  "CS Student_",
  "Full Stack Dev_",
  "Code Adventurer_",
]

export default function Hero() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleIdx, setSubtitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [hp] = useState(87)
  const ref = useRef(null)

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  // Typewriter for subtitle
  useEffect(() => {
    const target = SUBTITLE_FRAMES[subtitleIdx]
    let i = 0
    setDisplayed('')
    setTyping(true)
    const typingTimer = setInterval(() => {
      i++
      setDisplayed(target.slice(0, i))
      if (i === target.length) {
        clearInterval(typingTimer)
        setTyping(false)
        setTimeout(() => {
          let j = target.length
          const eraseTimer = setInterval(() => {
            j--
            setDisplayed(target.slice(0, j))
            if (j === 0) {
              clearInterval(eraseTimer)
              setSubtitleIdx((prev) => (prev + 1) % SUBTITLE_FRAMES.length)
            }
          }, 40)
        }, 1800)
      }
    }, 70)
    return () => clearInterval(typingTimer)
  }, [subtitleIdx])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0a0d14' }}
    >
      {/* Floating pixel particles */}
      {PIXELS.map((p) => (
        <div
          key={p.id}
          className="absolute pointer-events-none"
          style={{
            left: `${p.x}%`,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size}px ${p.color}`,
            animation: `pixelFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            imageRendering: 'pixelated',
            opacity: 0.7,
          }}
        />
      ))}

      {/* Background subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        {/* Status bar */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 mb-8"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '0.45rem',
            border: '2px solid #00ff8844',
            color: '#00ff88',
            background: 'rgba(0,255,136,0.06)',
            letterSpacing: '0.1em',
          }}
        >
          <span
            className="w-2 h-2 rounded-none"
            style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'blink 1s step-end infinite' }}
          />
          PLAYER 1 — READY
          <span style={{ color: '#ffe54c' }}>LVL 21</span>
        </div>

        {/* Pixel Avatar */}
        <div className="flex justify-center mb-8">
          <div
            className="relative"
            style={{
              width: '120px',
              height: '120px',
              border: '4px solid #00ff88',
              boxShadow: '0 0 20px #00ff8866, 8px 8px 0 #00ff8822, inset 0 0 20px #00ff8810',
              imageRendering: 'pixelated',
              background: 'linear-gradient(135deg, #0f1520 0%, #1a2236 100%)',
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            {/* Pixel art face */}
            <div className="absolute inset-0 flex items-center justify-center text-6xl select-none">
              👾
            </div>
            {/* Corner pixels */}
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: '#00ff88' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: '#00ff88' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: '#00ff88' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: '#00ff88' }} />
          </div>
        </div>

        {/* HP Bar */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.45rem', color: '#6b7280' }}
          >
            HP
          </span>
          <div className="w-40 pixel-progress">
            <div className="pixel-progress-fill" style={{ width: `${hp}%` }} />
          </div>
          <span
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.45rem', color: '#00ff88' }}
          >
            {hp}/100
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-4">
          <p
            className="mb-3"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.55rem',
              color: '#00d4ff',
              textShadow: '0 0 8px #00d4ff66',
              letterSpacing: '0.2em',
            }}
          >
            ★ HI, I&apos;M ★
          </p>
          <h1
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(1rem, 4vw, 2rem)',
              lineHeight: 1.8,
              color: '#ffffff',
              textShadow: '0 0 20px #ffffff44, 4px 4px 0 #00ff8822',
            }}
            className="animate-glitch"
          >
            {TITLE}
          </h1>
        </div>

        {/* Typewriter subtitle */}
        <div
          className="mb-10 h-10 flex items-center justify-center"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: '1.6rem',
            color: '#00ff88',
            textShadow: '0 0 10px #00ff8866',
          }}
        >
          &gt; {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '1.2em',
              background: '#00ff88',
              marginLeft: '2px',
              animation: 'blink 0.7s step-end infinite',
              verticalAlign: 'middle',
            }}
          />
        </div>

        {/* Quest description */}
        <p
          className="mb-10 max-w-lg mx-auto"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: '1.25rem',
            color: '#8892b0',
            lineHeight: 1.6,
          }}
        >
          ★ QUEST: Building apps, systems, and digital experiences that push pixels into purpose. ★
        </p>

        {/* Pixel Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#projects" className="pixel-btn-green">
            ▶ START JOURNEY
          </a>
          <a href="#projects" className="pixel-btn-blue">
            ◈ VIEW PROJECTS
          </a>
          <a href="#contact" className="pixel-btn-purple">
            ✉ CONTACT
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.4rem',
              color: '#00ff8855',
              letterSpacing: '0.15em',
            }}
          >
            ▼ SCROLL DOWN ▼
          </p>
          <div
            className="w-0.5 h-10"
            style={{
              background: 'linear-gradient(to bottom, #00ff88, transparent)',
              boxShadow: '0 0 4px #00ff88',
            }}
          />
        </div>
      </div>
    </section>
  )
}
