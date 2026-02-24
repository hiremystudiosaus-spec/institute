import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Departments', path: '/departments' },
        { name: 'Admission', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <GraduationCap size={32} className={isScrolled ? 'text-primary' : 'text-white'} />
                    <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>GLOBAL INSTITUTE</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium hover:text-accent transition-colors ${location.pathname === link.path
                                        ? 'text-accent'
                                        : (isScrolled ? 'text-primary' : 'text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link to="/contact" className="btn-accent">Apply Now</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
                    ) : (
                        <Menu size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden">
                    <button
                        className="absolute top-6 right-6"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={32} className="text-white" />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-2xl text-white font-bold hover:text-accent"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Apply Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
