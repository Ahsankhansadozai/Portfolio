"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);

            // Scroll-spy
            const sections = navLinks.map((l) => l.href.slice(1));
            let current = "";
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = useCallback((href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-mono text-2xl font-bold"
                    >
                        <span className="text-[rgba(255,255,255,0.3)]">&lt;</span>
                        <span className="gradient-text">AhsanEjaz</span>
                        <span className="text-[rgba(255,255,255,0.3)]"> /&gt;</span>
                    </motion.button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className={`cursor-pointer  relative text-sm font-medium transition-colors duration-200 group ${isActive
                                        ? "text-[#00ff87]"
                                        : "text-[rgba(232,232,240,0.7)] hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-px bg-linear-to-r from-[#00ff87] to-[#00d4ff] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo("#contact")}
                            className="cursor-pointer btn-primary text-sm px-5 py-2.5"
                        >
                            <span>Hire Me</span>
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="md:hidden p-2 rounded-lg text-[rgba(232,232,240,0.8)] hover:text-[#00ff87] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="fixed top-16 left-0 right-0 z-40 glass-strong border-t border-[rgba(255,255,255,0.07)] shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 p-4">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    onClick={() => scrollTo(link.href)}
                                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${activeSection === link.href.slice(1)
                                        ? "text-[#00ff87] bg-[rgba(0,255,135,0.08)]"
                                        : "text-[rgba(232,232,240,0.8)] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <div className="mt-2 px-4 pb-2">
                                <button
                                    onClick={() => scrollTo("#contact")}
                                    className="cursor-pointer btn-primary w-full text-sm text-center"
                                >
                                    <span>Hire Me</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
