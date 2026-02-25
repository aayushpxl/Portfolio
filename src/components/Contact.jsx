import { useEffect, useRef } from 'react'

export default function Contact() {
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
        <section id="contact" className="section-padding bg-dark">
            <div
                ref={ref}
                className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out text-center"
            >
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">
                    Let&apos;s build together
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a
                        href="mailto:aayushpxl11@gmail.com"
                        className="bg-primary hover:bg-primary/80 text-white text-xl font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
                    >
                        aayushpxl11@gmail.com
                    </a>

                    <div className="flex gap-6 mt-4">
                        {[
                            { name: 'GitHub', url: 'https://github.com/aayushpxl' },
                            { name: 'LinkedIn', url: '#' },
                            { name: 'Twitter', url: '#' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500 hover:text-white transition-colors duration-200"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
