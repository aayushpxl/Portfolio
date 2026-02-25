import { useEffect, useRef } from 'react'

export default function Hero() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (el) {
            el.classList.add('opacity-100', 'translate-y-0')
        }
    }, [])

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark"
        >
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div
                ref={ref}
                className="relative z-10 text-center px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
                    👋 Hello, I&apos;m
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                    <span className="gradient-text">Aayush</span>{' '}
                    <span className="text-white">Shrestha</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-2xl font-light mb-8 max-w-xl mx-auto">
                    Frontend Developer &amp;{' '}
                    <span className="text-accent font-medium">CS Student</span> crafting
                    beautiful web experiences.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="border border-white/20 hover:border-primary text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 flex flex-col items-center gap-2 text-gray-600">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-float" />
                </div>
            </div>
        </section>
    )
}
