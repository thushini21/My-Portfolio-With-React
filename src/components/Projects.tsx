const projects = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with React, TypeScript, and Tailwind.",
        link: "https://github.com/",
    },
    {
        title: "E-Commerce App",
        description: "Full-stack shopping app with cart & payment integration.",
        link: "https://github.com/",
    },
    {
        title: "Task Manager",
        description: "A simple task manager app with authentication.",
        link: "https://github.com/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-xl border dark:border-white/10 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-300">{p.description}</p>
                        <a
                            href={p.link}
                            target="_blank"
                            className="text-blue-500 hover:underline"
                            rel="noreferrer"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
