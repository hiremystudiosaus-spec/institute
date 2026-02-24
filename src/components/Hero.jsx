import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/hero-bg.png")' }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="container relative z-10 text-center text-white pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                    Empowering Your <br />
                    <span className="text-accent">Global Future</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-200"
                >
                    Experience excellence in education with 100+ expert faculty and diverse domestic & international courses designed for the visionaries of tomorrow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link to="/courses" className="btn-accent flex items-center justify-center gap-2 text-lg px-8 py-4">
                        Explore Courses <ArrowRight size={20} />
                    </Link>
                    <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-lg">
                        About Institution
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="flex flex-col items-center">
                        <GraduationCap className="text-accent mb-2" size={32} />
                        <span className="text-3xl font-bold">100+</span>
                        <span className="text-slate-300">Expert Faculty</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="text-accent mb-2" size={32} />
                        <span className="text-3xl font-bold">5000+</span>
                        <span className="text-slate-300">Alumni</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Globe className="text-accent mb-2" size={32} />
                        <span className="text-3xl font-bold">20+</span>
                        <span className="text-slate-300">Global Partners</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <GraduationCap className="text-accent mb-2" size={32} />
                        <span className="text-3xl font-bold">50+</span>
                        <span className="text-slate-300">Degree Labs</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
