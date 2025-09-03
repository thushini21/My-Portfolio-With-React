export default function Footer() {
    return (
        <footer className="py-6 text-center border-t dark:border-white/10 mt-10">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Thushini Akashi. All rights reserved.
            </p>
        </footer>
    );
}
