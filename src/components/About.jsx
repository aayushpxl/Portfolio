import { useEffect, useRef } from 'react'

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0')
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className="section-padding bg-surface">
            <div
                ref={ref}
                className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
                <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-2">
                    Get to know me
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Avatar */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-8xl shadow-2xl shadow-primary/30 animate-float">
                                👨‍💻
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-card border border-white/10 rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-lg">
                                Open to work ✨
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Hi! I&apos;m <span className="gradient-text">Aayush</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            I&apos;m a passionate Computer Science student and frontend
                            developer based in Nepal. I love building clean, performant web
                            applications that deliver great user experiences.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            When I&apos;m not coding, you&apos;ll find me exploring new
                            technologies, contributing to open-source projects, or leveling
                            up my problem-solving skills through competitive programming.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Name', value: 'Aayush Shrestha' },
                                { label: 'Role', value: 'Frontend Developer' },
                                { label: 'Location', value: 'Nepal 🇳🇵' },
                                { label: 'Email', value: 'aayushpxl11@gmail.com' },
                            ].map(({ label, value }) => (
                                <div key={label}>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                                    <p className="text-white font-medium text-sm">{value}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-block mt-8 bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
                        >
                            Let&apos;s Talk →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
