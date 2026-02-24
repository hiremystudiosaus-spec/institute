import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { DEPARTMENTS } from '../data';
import { ArrowRight, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Features Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Institution?</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<BookOpen size={48} className="text-accent" />}
                            title="Modern Curriculum"
                            desc="Our courses are updated annually to align with industry standards and technological advancements."
                        />
                        <FeatureCard
                            icon={<UserCheck size={48} className="text-accent" />}
                            title="Expert Mentorship"
                            desc="Learn from 100+ PhD faculty members who are pioneers in their respective research fields."
                        />
                        <FeatureCard
                            icon={<ShieldCheck size={48} className="text-accent" />}
                            title="Global Recognition"
                            desc="Accredited degree programs recognized worldwide, ensuring great career opportunities."
                        />
                    </div>
                </div>
            </section>

            {/* Departments Preview */}
            <section className="section-padding bg-slate-50">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h2>
                            <p className="text-slate-600 max-w-xl text-lg">Explore our diverse academic departments offering specialized training and research facilities.</p>
                        </div>
                        <Link to="/departments" className="btn-primary">View All Departments <ArrowRight size={20} /></Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DEPARTMENTS.slice(0, 3).map((dept) => (
                            <motion.div
                                whileHover={{ y: -10 }}
                                key={dept.id}
                                className="card"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-primary">{dept.name}</h3>
                                <p className="text-slate-600 mb-8">{dept.description}</p>
                                <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                                    <div>
                                        <span className="block text-accent font-bold text-2xl">{dept.studentCount}+</span>
                                        <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Students</span>
                                    </div>
                                    <div>
                                        <span className="block text-primary font-bold text-2xl">{dept.facultyCount}+</span>
                                        <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Faculty</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course CTA */}
            <section className="section-padding bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Shape Your Future?</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                        Join thousands of students pursuing their dreams at Global Institute.
                        Applications for the Fall 2026 semester are now open.
                    </p>
                    <Link to="/contact" className="btn-accent px-12 py-5 text-xl inline-block">Start Your Application</Link>
                </div>
            </section>
        </main>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="card text-center"
    >
        <div className="mb-8 p-4 bg-slate-50 rounded-2xl inline-block">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
);

export default Home;
