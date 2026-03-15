export default function Footer() {
  const yr = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-6"
      style={{
        background: '#0a0d14',
        borderTop: '2px solid #00ff8822',
      }}
    >
      {/* Top accent line */}
      <div
        className="w-full h-px mb-8"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, #b14aff, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.6rem',
              color: '#00ff88',
              textShadow: '0 0 8px #00ff88',
            }}
          >
            &gt;_
          </span>
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '0.55rem',
              color: '#ffffff',
            }}
          >
            AAYUSH.EXE
          </span>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: '1rem',
            color: '#4b5563',
          }}
        >
          © {yr} Aayush Shrestha · All rights reserved
        </p>

        {/* Built with */}
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: '1rem',
              color: '#4b5563',
            }}
          >
            Built with{' '}
          </span>
          <span style={{ color: '#00ff88', fontFamily: "'VT323', monospace", fontSize: '1rem' }}>React</span>
          <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', color: '#4b5563' }}> &amp; </span>
          <span style={{ color: '#00d4ff', fontFamily: "'VT323', monospace", fontSize: '1rem' }}>Tailwind</span>
          <span style={{ color: '#ffe54c', fontSize: '0.9rem' }}>⚡</span>
        </div>
      </div>

      {/* Bottom pixel row decoration */}
      <div className="flex justify-center gap-1 mt-8">
        {['#00ff88', '#00d4ff', '#b14aff', '#ffe54c', '#ff4488', '#b14aff', '#00d4ff', '#00ff88'].map(
          (color, i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: color,
                boxShadow: `0 0 4px ${color}`,
                imageRendering: 'pixelated',
                opacity: 0.6,
              }}
            />
          )
        )}
      </div>
    </footer>
  )
}
