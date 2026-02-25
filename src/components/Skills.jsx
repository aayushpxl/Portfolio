import { useEffect, useRef } from 'react'

const skillCategories = [
    {
        title: 'Frontend',
        emoji: '🎨',
        skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    },
    {
        title: 'Backend',
        emoji: '⚙️',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    },
    {
        title: 'Languages',
        emoji: '💻',
        skills: ['JavaScript', 'Python', 'C', 'C++', 'SQL'],
    },
    {
        title: 'Tools & Others',
        emoji: '🛠️',
        skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Linux'],
    },
]

const badgeColors = [
    'bg-primary/20 text-primary border-primary/30',
    'bg-accent/20 text-accent border-accent/30',
    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'bg-orange-500/20 text-orange-400 border-orange-500/30',
]

export default function Skills() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0')
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="section-padding bg-dark">
            <div
                ref={ref}
                className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
                <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-2">
                    What I work with
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
                    My <span className="gradient-text">Skills</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.title} className="glass-card p-6 hover:border-primary/30 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{cat.emoji}</span>
                                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1 rounded-full text-sm font-medium border ${badgeColors[i % badgeColors.length]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
