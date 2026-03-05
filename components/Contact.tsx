"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

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

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });

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

                <div className="max-w-xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-6"
                    >
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
                </div>
            </div>
        </section>
    );
}
