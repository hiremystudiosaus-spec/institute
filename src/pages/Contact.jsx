import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title="Admissions - Join HS Times Today"
                description="Ready to embark on your educational journey with HS Times? Apply now for domestic or international courses and shape your global future."
                path="/contact"
            />
            <div className="container">
                <header className="text-center mb-20 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Community</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ready to embark on your educational journey? Our admissions team is here to guide you through every step.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-10">Get In Touch</h2>
                            <div className="space-y-10">
                                <ContactInfoItem
                                    icon={<MapPin className="text-accent" size={32} />}
                                    title="Main Campus"
                                    content="123 Academic Way, Education District, NY 10001, USA"
                                />
                                <ContactInfoItem
                                    icon={<Phone className="text-accent" size={32} />}
                                    title="Admissions Hotline"
                                    content="+1 (555) 000-1234 / +1 (555) 999-5678"
                                />
                                <ContactInfoItem
                                    icon={<Mail className="text-accent" size={32} />}
                                    title="Official Email"
                                    content="admissions@globalinstitute.edu"
                                />
                                <ContactInfoItem
                                    icon={<Clock className="text-accent" size={32} />}
                                    title="Office Hours"
                                    content="Mon - Fri: 9:00 AM - 6:00 PM EST"
                                />
                            </div>
                        </div>

                        <div className="bg-primary p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full translate-x-10 -translate-y-10 blur-2xl"></div>
                            <h3 className="text-3xl font-bold mb-6 relative z-10">Global Desk</h3>
                            <p className="text-slate-300 mb-8 text-lg relative z-10">Dedicated support for international students and global exchange programs.</p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                    <Globe size={24} className="text-white" />
                                </div>
                                <span className="font-bold text-xl hover:text-accent transition-colors cursor-pointer">international@globalinstitute.edu</span>
                            </div>
                        </div>
                    </div>

                    {/* Admission Form */}
                    <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100 relative">
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-10">
                                        <CheckCircle2 size={56} className="text-green-500" />
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6">Application Received!</h3>
                                    <p className="text-slate-600 text-xl leading-relaxed mb-10">
                                        Your inquiry has been successfully logged. Our admissions officer will contact you within 48 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-primary"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <h3 className="text-3xl font-bold mb-10">Admission Inquiry</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <FormGroup label="First Name">
                                            <input type="text" placeholder="John" className="form-input" required />
                                        </FormGroup>
                                        <FormGroup label="Last Name">
                                            <input type="text" placeholder="Doe" className="form-input" required />
                                        </FormGroup>
                                    </div>

                                    <FormGroup label="Email Address">
                                        <input type="email" placeholder="john@example.com" className="form-input" required />
                                    </FormGroup>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <FormGroup label="Interested Department">
                                            <select className="form-input" required>
                                                <option value="">Select Department</option>
                                                <option value="cs">Computer Science</option>
                                                <option value="ee">Electrical</option>
                                                <option value="ece">Electronics</option>
                                                <option value="me">Mechanical</option>
                                                <option value="ce">Civil</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup label="Course Type">
                                            <select className="form-input" required>
                                                <option value="domestic">Domestic Course</option>
                                                <option value="international">International Course</option>
                                            </select>
                                        </FormGroup>
                                    </div>

                                    <FormGroup label="Your Message">
                                        <textarea
                                            className="form-input min-h-[160px]"
                                            placeholder="Tell us about your educational background and goals..."
                                            required
                                        ></textarea>
                                    </FormGroup>

                                    <button type="submit" className="w-full btn-accent py-6 rounded-2xl text-xl flex justify-center gap-4 transition-all hover:scale-[1.02]">
                                        Send Application <Send size={24} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, content }) => (
    <div className="flex gap-8 items-center">
        <div className="shrink-0 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center border border-slate-100">
            {icon}
        </div>
        <div>
            <h4 className="text-2xl font-bold mb-1">{title}</h4>
            <p className="text-slate-600 text-lg">{content}</p>
        </div>
    </div>
);

const FormGroup = ({ label, children }) => (
    <div className="space-y-3">
        <label className="block text-sm font-bold text-primary uppercase tracking-widest">{label}</label>
        {children}
    </div>
);

export default Contact;
