import { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setOpen(false);
        if (href.startsWith('#')) {
            if (location.pathname === '/') {
                const el = document.getElementById(href.substring(1));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(href.substring(1));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        } else {
            navigate(href);
        }
    };

    const navLinks = [
        { name: 'Szolgáltatások', href: '#services' },
        { name: 'Rólunk', href: '#about' },
        { name: 'Helyszínek', href: '/helyszinek' },
        { name: 'Referenciák', href: '#portfolio' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled ? 'glass py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-black font-black text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                        B
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-white">
                        Bond <span className="gradient-text">&</span> Beyond
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-10 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="text-[13px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 relative group cursor-pointer"
                        >
                            {link.name}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full rounded-full" />
                        </button>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button asChild size="sm" className="hidden md:inline-flex">
                        <Link to="/ajanlatkeres">
                            Ajánlatkérés
                            <ArrowRight size={15} />
                        </Link>
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-primary">
                                <Menu size={28} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            {/* Decorative circles */}
                            <div className="absolute top-20 right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-3xl font-black uppercase tracking-widest text-white hover:text-primary transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <Button asChild size="lg" className="mt-6">
                                <Link to="/ajanlatkeres" onClick={() => setOpen(false)}>
                                    Ajánlatkérés
                                </Link>
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
