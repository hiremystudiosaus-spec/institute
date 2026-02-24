import React from 'react';
import { DEPARTMENTS } from '../data';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, ChevronRight } from 'lucide-react';

const Departments = () => {
    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="container">
                <header className="text-center mb-24 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">Specialized Departments</h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Leading the frontier of innovation across five core engineering disciplines,
                        each equipped with state-of-the-art labs and mentored by industry veterans.
                    </p>
                </header>

                <div className="space-y-24">
                    {DEPARTMENTS.map((dept, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            key={dept.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center p-4`}
                        >
                            <div className="lg:w-1/2 space-y-10">
                                <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/5 rounded-full text-primary">
                                    <Building2 size={24} className="text-accent" />
                                    <span className="font-bold uppercase tracking-widest text-sm">Academic Department</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold">{dept.name}</h2>

                                <p className="text-xl text-slate-600 leading-relaxed font-light">
                                    {dept.description} Our curriculum integrates early research opportunities and industrial internships to ensure students are day-one ready.
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="card !p-8 border-l-4 border-l-accent">
                                        <Users size={28} className="text-accent mb-4" />
                                        <div className="text-3xl font-bold text-primary">{dept.studentCount}+</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Active Students</div>
                                    </div>
                                    <div className="card !p-8 border-l-4 border-l-primary">
                                        <GraduationCap size={28} className="text-primary mb-4" />
                                        <div className="text-3xl font-bold text-primary">{dept.facultyCount}+</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">PhD Faculty</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                                        {dept.head.split(' ').pop().charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-1">Director / HOD</div>
                                        <div className="text-2xl font-bold text-primary">{dept.head}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-accent/5 rounded-[4rem] -rotate-2"></div>
                                <img
                                    src={`https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200&sig=${index}`}
                                    alt={dept.name}
                                    className="rounded-[3.5rem] shadow-2xl w-full h-[550px] object-cover relative z-10"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
