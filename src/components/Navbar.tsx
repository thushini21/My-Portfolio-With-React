type Props = { onToggleTheme: () => void };

export default function Navbar({ onToggleTheme }: Props) {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b dark:border-white/10">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#home" className="font-bold text-lg">
                    TA.
                </a>
                <div className="hidden sm:flex items-center gap-6">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="hover:opacity-80">
                            {l.label}
                        </a>
                    ))}
                </div>
                <button
                    onClick={onToggleTheme}
                    className="px-3 py-1.5 rounded-xl border hover:bg-gray-200 dark:hover:bg-zinc-700"
                >
                    Theme
                </button>
            </div>
        </nav>
    );
}
