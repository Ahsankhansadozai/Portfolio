"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from "lucide-react";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "ahsanejaz@example.com",
        href: "mailto:ahsanejaz@example.com",
        color: "#00ff87",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/ahsanejaz",
        href: "https://linkedin.com/in/ahsanejaz",
        color: "#00d4ff",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/ahsanejaz",
        href: "https://github.com/ahsanejaz",
        color: "#a78bfa",
    },
    {
        icon: Twitter,
        label: "Twitter / X",
        value: "@ahsanejaz_dev",
        href: "https://twitter.com/ahsanejaz_dev",
        color: "#f59e0b",
    },
];

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });

    const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1800));
        setLoading(false);
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            {/* Floating blobs */}
            <div
                className="absolute top-1/4 left-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)", filter: "blur(50px)" }}
            />
            <div
                className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)", filter: "blur(50px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00ff87] tracking-widest uppercase mb-3 block">
                        Get in Touch
                    </span>
                    <h2 className="section-title">
                        Let&apos;s Build <span className="gradient-text">Something</span>
                    </h2>
                    <p className="mt-4 text-[rgba(232,232,240,0.5)] max-w-lg mx-auto">
                        Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                                Drop me a message
                            </h3>
                            <p className="text-[rgba(232,232,240,0.55)] leading-relaxed">
                                Currently open to senior Android Developer roles, freelance Android projects,
                                and technical consultations. Response time: within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 glass rounded-xl p-4 group transition-all duration-300 hover:shadow-lg"
                                    style={{ borderColor: `${link.color}15` }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: `${link.color}15` }}
                                    >
                                        <link.icon size={18} style={{ color: link.color }} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-[rgba(232,232,240,0.4)] mb-0.5">{link.label}</div>
                                        <div
                                            className="text-sm font-medium transition-colors duration-200 group-hover:text-white"
                                            style={{ color: link.color }}
                                        >
                                            {link.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div className="glass rounded-xl p-4 border border-[rgba(0,255,135,0.15)]">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                                <span className="text-xs font-bold text-[#00ff87] uppercase tracking-widest">Available Now</span>
                            </div>
                            <p className="text-sm text-[rgba(232,232,240,0.5)]">
                                Open to full-time senior Android roles and freelance Android projects.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-[rgba(232,232,240,0.5)] mb-2 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-[rgba(232,232,240,0.5)] mb-2 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[rgba(232,232,240,0.5)] mb-2 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[rgba(232,232,240,0.5)] mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                    rows={5}
                                    className="form-input resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading || submitted}
                                whileHover={{ scale: loading || submitted ? 1 : 1.02 }}
                                whileTap={{ scale: loading || submitted ? 1 : 0.98 }}
                                className="btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70"
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle size={18} className="relative z-10" />
                                        <span className="relative z-10">Message Sent!</span>
                                    </>
                                ) : loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4 relative z-10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        <span className="relative z-10">Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10">Send Message</span>
                                        <Send size={16} className="relative z-10" />
                                    </>
                                )}
                            </motion.button>

                            {/* Success toast */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2 p-3 rounded-xl border border-[rgba(0,255,135,0.3)] text-sm"
                                    style={{ background: "rgba(0,255,135,0.08)", color: "#00ff87" }}
                                >
                                    <CheckCircle size={16} />
                                    <span>Thanks! I&apos;ll get back to you within 24 hours.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
