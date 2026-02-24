import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 border-bottom border-white/10 pb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <GraduationCap size={40} className="text-accent" />
                        <span className="text-2xl font-bold tracking-tighter">GLOBAL INSTITUTE</span>
                    </Link>
                    <p className="text-slate-400">
                        Leading the way in higher education since 1995. We provide world-class facilities and globally recognized courses.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all"><Facebook size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all"><Twitter size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
                        <li><Link to="/courses" className="hover:text-accent">Courses</Link></li>
                        <li><Link to="/departments" className="hover:text-accent">Departments</Link></li>
                        <li><Link to="/contact" className="hover:text-accent">Admissions</Link></li>
                        <li><Link to="#" className="hover:text-accent">Student Portal</Link></li>
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h4 className="text-xl font-bold mb-6">Featured Programs</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/courses" className="hover:text-accent">Artificial Intelligence</Link></li>
                        <li><Link to="/courses" className="hover:text-accent">Sustainable Energy</Link></li>
                        <li><Link to="/courses" className="hover:text-accent">Global Data Science</Link></li>
                        <li><Link to="/courses" className="hover:text-accent">Advanced Robotics</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-accent shrink-0" size={20} />
                            <span>123 Academic Way, Education District, NY 10001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-accent shrink-0" size={20} />
                            <span>+1 (555) 000-1234</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-accent shrink-0" size={20} />
                            <span>admissions@globalinstitute.edu</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mt-10 pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Global Institute of Technology & Science. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
