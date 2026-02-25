import { useEffect, useRef } from 'react'

const projects = [
    {
        title: 'Modern Portfolio',
        description: 'A premium, responsive portfolio website built with React and Tailwind CSS.',
        tech: ['React', 'Tailwind', 'Vite'],
        link: '#',
        github: 'https://github.com/aayushpxl/Portfolio'
    },
    {
        title: 'Task Manager',
        description: 'A collaborative task management tool with real-time updates and team features.',
        tech: ['Node.js', 'MongoDB', 'React'],
        link: '#',
        github: '#'
    },
    {
        title: 'E-commerce API',
        description: 'A scalable RESTful API for an e-commerce platform with secure payment integration.',
        tech: ['Express', 'PostgreSQL', 'JWT'],
        link: '#',
        github: '#'
    }
]

export default function Projects() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0')
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="section-padding bg-surface">
            <div
                ref={ref}
                className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
                <p className="text-primary font-semibold tracking-widest uppercase text-sm text-center mb-2">
                    Selected work
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
                    Recent <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className="glass-card group flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="aspect-video bg-gradient-to-br from-card to-surface flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500">
                                🚀
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-5 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.link}
                                        className="text-primary hover:text-accent text-sm font-bold transition-colors"
                                    >
                                        Live Demo →
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
