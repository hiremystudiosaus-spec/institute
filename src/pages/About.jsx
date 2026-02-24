import React from 'react';
import { FACULTY } from '../data';
import { motion } from 'framer-motion';
import { Award, Zap, Heart, Target, ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero Header */}
            <section className="bg-primary pt-40 pb-28 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        Nurturing Excellence <br /> <span className="text-accent">Since 1995</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Leading the way in higher education through innovative research,
                        academic rigor, and a commitment to global student success.
                    </p>
                </div>
            </section>

            {/* Vision/Mission */}
            <section className="section-padding bg-white">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523050335102-c6744740bb1e?auto=format&fit=crop&q=80&w=1000"
                            alt="Campus Life"
                            className="rounded-[3rem] shadow-2xl z-10 relative"
                        />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-[3rem] -z-0"></div>
                    </motion.div>

                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Foundation</h2>
                        <div className="space-y-8">
                            <ValueItem
                                icon={<Target className="text-accent" size={32} />}
                                title="Our Vision"
                                desc="To be a premier global institution recognized for academic excellence and developing students into future leaders who drive positive change."
                            />
                            <ValueItem
                                icon={<Zap className="text-accent" size={32} />}
                                title="Our Mission"
                                desc="To provide a stimulating learning environment where students can realize their full potential through research-driven education."
                            />
                            <ValueItem
                                icon={<Heart className="text-accent" size={32} />}
                                title="Our Values"
                                desc="Integrity, Innovation, Inclusivity, and Pursuit of Excellence in everything we do, from basic research to student wellbeing."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Faculty</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Learn from world-renowned researchers and industry leaders committed to your academic journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {FACULTY.map((member) => (
                            <motion.div
                                whileHover={{ y: -12 }}
                                key={member.id}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-100"
                            >
                                <div className="h-72 overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-accent font-bold text-sm mb-4 tracking-widest uppercase">{member.role} - {member.dept}</p>
                                    <div className="pt-6 border-t border-slate-100 mt-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 block">Focus Area</span>
                                        <p className="text-md text-slate-600 font-medium italic">{member.research}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Expanded Faculty Indicator */}
                        <div className="bg-primary text-white rounded-[2.5rem] flex flex-col items-center justify-center p-10 shadow-xl text-center group cursor-pointer hover:bg-primary-light transition-colors">
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ChevronRight size={40} className="text-white" />
                            </div>
                            <span className="text-4xl font-bold mb-2">98+</span>
                            <p className="text-slate-300 font-semibold uppercase tracking-widest text-sm">More PhD Faculty <br /> Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4">Recognized Globally By</h4>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                        <Award size={80} strokeWidth={1} />
                        <GlobeAcademic size={80} strokeWidth={1} />
                        <Award size={80} strokeWidth={1} />
                        <GlobeAcademic size={80} strokeWidth={1} />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueItem = ({ icon, title, desc }) => (
    <div className="flex gap-6 items-start">
        <div className="shrink-0 p-4 bg-slate-50 rounded-2xl">{icon}</div>
        <div>
            <h4 className="text-2xl font-bold mb-2">{title}</h4>
            <p className="text-slate-600 text-lg leading-relaxed">{desc}</p>
        </div>
    </div>
);

const GlobeAcademic = ({ size, strokeWidth }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export default About;
