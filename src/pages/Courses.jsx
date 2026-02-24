import React, { useState } from 'react';
import { COURSES } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Courses = () => {
    const [filter, setFilter] = useState('All');

    const filteredCourses = filter === 'All'
        ? COURSES
        : COURSES.filter(c => c.type === filter);

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title="Academic Programs - Study with HS Times"
                description="Explore the domestic and international programs at HS Times. From AI to sustainable energy, our curriculum is designed for the innovators of tomorrow."
                path="/courses"
            />
            <div className="container">
                <header className="text-center mb-20 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Academic Programs</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Broaden your horizons with our meticulously crafted domestic and international academic paths, designed for the innovators of tomorrow.
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {['All', 'Domestic', 'International'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-10 py-4 rounded-full font-bold transition-all shadow-sm ${filter === type
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-primary hover:bg-slate-100 hover:shadow-md'
                                }`}
                        >
                            {type} Programs
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                key={course.id}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-md group hover:shadow-2xl transition-all border border-slate-100 flex flex-col md:flex-row h-full"
                            >
                                <div className="md:w-2/5 relative h-72 md:h-auto overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className={`absolute top-6 left-6 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${course.type === 'International' ? 'bg-accent text-white' : 'bg-primary text-white'
                                        }`}>
                                        {course.type}
                                    </div>
                                </div>

                                <div className="p-10 md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <span className="text-sm font-bold text-accent uppercase tracking-widest mb-2 block">{course.department}</span>
                                        <h3 className="text-3xl font-bold mt-2 mb-6 group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                                        <div className="space-y-4 text-slate-500 mb-8">
                                            <div className="flex items-center gap-3">
                                                <Clock size={20} className="text-primary" />
                                                <span className="font-medium">{course.duration} Duration</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin size={20} className="text-primary" />
                                                <span className="font-medium">Global Institute Campus</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-5 border-2 border-slate-100 rounded-2xl font-bold hover:bg-primary hover:text-white hover:border-primary transition-all text-lg shadow-sm">
                                        Course Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm">
                        <h3 className="text-3xl font-bold text-slate-300">No programs found matching your selection.</h3>
                        <button onClick={() => setFilter('All')} className="mt-8 text-primary font-bold underline text-lg">Clear Filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
