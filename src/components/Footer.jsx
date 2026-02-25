export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-dark">
            <div className="max-w-6xl mx-auto flex flex-col md:row items-center justify-between gap-6">
                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Aayush Shrestha. All rights reserved.
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind</span>
                </div>
            </div>
        </footer>
    )
}
