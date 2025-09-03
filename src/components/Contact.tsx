export default function Contact() {
    return (
        <section id="contact" className="py-20 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border dark:border-white/10 bg-transparent"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border dark:border-white/10 bg-transparent"
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-lg border dark:border-white/10 bg-transparent"
                />
                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
