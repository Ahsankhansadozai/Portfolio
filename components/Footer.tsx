"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/ahsanejaz", label: "GitHub", color: "#a78bfa" },
    { icon: Linkedin, href: "https://linkedin.com/in/ahsanejaz", label: "LinkedIn", color: "#00d4ff" },
    { icon: Twitter, href: "https://twitter.com/ahsanejaz_dev", label: "Twitter", color: "#00ff87" },
    { icon: Mail, href: "mailto:ahsanejaz@example.com", label: "Email", color: "#f59e0b" },
];

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,255,135,0.03) 0%, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[rgba(255,255,255,0.05)]">
                    {/* Logo + tagline */}
                    <div className="text-center md:text-left">
                        <div className="font-mono text-xl font-bold mb-2">
                            <span className="text-[rgba(255,255,255,0.25)]">&lt;</span>
                            <span className="gradient-text">AhsanEjaz</span>
                            <span className="text-[rgba(255,255,255,0.25)]"> /&gt;</span>
                        </div>
                        <p className="text-sm text-[rgba(232,232,240,0.4)] max-w-xs">
                            Building the future, one app at a time 🚀
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-sm text-[rgba(232,232,240,0.45)] hover:text-[#00ff87] transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-9 h-9 rounded-xl glass flex items-center justify-center transition-all duration-200 group"
                                style={{ borderColor: `${social.color}20` }}
                            >
                                <social.icon
                                    size={16}
                                    className="text-[rgba(232,232,240,0.45)] group-hover:text-white transition-colors duration-200"
                                    style={{ color: undefined }}
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
                    <p className="text-xs text-[rgba(232,232,240,0.3)]">
                        © 2024 Ahsan Ejaz. All rights reserved.
                    </p>
                    <p className="text-xs text-[rgba(232,232,240,0.3)] flex items-center gap-1.5">
                        Designed & Built with{" "}
                        <Heart size={11} className="text-[#ec4899] fill-[#ec4899]" />{" "}
                        using{" "}
                        <span className="text-[#00ff87]">Next.js</span>
                        {" & "}
                        <span className="text-[#00d4ff]">Framer Motion</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
