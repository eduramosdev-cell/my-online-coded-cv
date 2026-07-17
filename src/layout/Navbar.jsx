const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
    {href: '#testimonials', label: 'Testimonials'},
    {href: '#contact', label: 'Contact'},
]

export const Navbar = () => {
    return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-xl tracking-tight hover:text-primary">
                ER<span className="text-primary">.</span>
            </a>
            {/*Desktop Nav Links*/}
            <div className="flex items center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
}