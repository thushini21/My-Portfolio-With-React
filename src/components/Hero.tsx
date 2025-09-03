export default function Hero() {
    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
            <h2 className="text-lg">Hi, I'm</h2>
            <h1 className="text-5xl font-bold mt-2">Thushini Akashi</h1>
            <p className="mt-4 text-lg">Frontend Developer • React | TypeScript | Tailwind</p>
            <div className="mt-6 flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-2 rounded-lg border border-gray-500 hover:bg-gray-200 dark:hover:bg-zinc-700"
                >
                    Contact
                </a>
            </div>
        </section>
    );
}
