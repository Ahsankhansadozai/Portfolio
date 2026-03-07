"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

const titles = [
    "Android Developer",
    "Kotlin Expert",
    "Jetpack Compose Specialist",
    "5+ Years Experience",
];

function useTypingEffect(strings: string[], speed = 80, pause = 1800) {
    const [displayText, setDisplayText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = strings[titleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.substring(0, displayText.length + 1));

                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setDisplayText(current.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex, strings, speed, pause]);

    return displayText;
}

const AndroidBotSVG = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Antenna left */}
        <line x1="75" y1="45" x2="60" y2="25" stroke="#00ff87" strokeWidth="3" strokeLinecap="round" />
        <circle cx="58" cy="23" r="4" fill="#00ff87" />
        {/* Antenna right */}
        <line x1="125" y1="45" x2="140" y2="25" stroke="#00ff87" strokeWidth="3" strokeLinecap="round" />
        <circle cx="142" cy="23" r="4" fill="#00ff87" />
        {/* Head */}
        <rect x="55" y="50" width="90" height="55" rx="27" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="85" cy="77" r="8" fill="#00ff87" />
        <circle cx="115" cy="77" r="8" fill="#00ff87" />
        <circle cx="87" cy="75" r="3" fill="#0a0a0f" />
        <circle cx="117" cy="75" r="3" fill="#0a0a0f" />
        {/* Body */}
        <rect x="45" y="115" width="110" height="65" rx="12" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        {/* Body details - buttons */}
        <rect x="88" y="128" width="24" height="6" rx="3" fill="#00ff87" opacity="0.3" />
        <rect x="88" y="140" width="24" height="6" rx="3" fill="#00d4ff" opacity="0.3" />
        <rect x="88" y="152" width="24" height="6" rx="3" fill="#00ff87" opacity="0.3" />
        {/* Arms */}
        <rect x="15" y="115" width="22" height="55" rx="11" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        <rect x="163" y="115" width="22" height="55" rx="11" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        {/* Legs */}
        <rect x="60" y="178" width="25" height="18" rx="8" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        <rect x="115" y="178" width="25" height="18" rx="8" fill="#111118" stroke="#00ff87" strokeWidth="2" />
        {/* Glow effect */}
        <ellipse cx="100" cy="200" rx="60" ry="8" fill="rgba(0,255,135,0.15)" />
    </svg>
);

export default function Hero() {
    const typedText = useTypingEffect(titles);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden grid-bg"
        >
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,135,0.04) 0%, transparent 70%)" }}
            />

            {/* Floating blobs */}
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <div className="absolute bottom-32 left-10 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
                    {/* Text Content */}
                    <div className="flex-1 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                            <span className="text-sm text-[rgba(232,232,240,0.7)] font-medium">
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
                        >
                            Hi, I&apos;m{" "}
                            <span className="gradient-text text-glow-green">Ahsan Ejaz</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-2xl sm:text-3xl font-semibold mb-6 h-10 flex items-center"
                        >
                            <span className="text-[rgba(232,232,240,0.5)] mr-2">&gt;&nbsp;</span>
                            <span className="text-[#00ff87]">{typedText}</span>
                            <span className="typing-cursor ml-0.5 font-light">|</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-[rgba(232,232,240,0.6)] text-lg max-w-xl mb-10 leading-relaxed"
                        >
                            Mobile App Developer specializing in{" "}
                            <span className="text-[#00ff87] font-medium">Android (Kotlin)</span> &{" "}
                            <span className="text-[#00d4ff] font-medium">Flutter</span>{" "}
                            building scalable, high-performance apps used in real-world products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.65 }}
                            className="flex flex-wrap gap-4"
                        >
                            {/* <motion.button
                                onClick={scrollToProjects}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary flex items-center gap-2"
                            >
                                <span>View My Work</span>
                                <ArrowRight size={16} className="relative z-10" />
                            </motion.button> */}

                            <motion.a
                                href="/Ahsan-Ejaz-Resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-outline flex items-center gap-2"
                            >
                                <Download size={16} />
                                Download Resume
                            </motion.a>
                        </motion.div>

                        {/* Decorative code snippet */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-12 glass rounded-xl p-4 max-w-xs font-mono text-xs hidden lg:block"
                        >
                            <div className="flex gap-1.5 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <div className="text-[rgba(232,232,240,0.4)]">
                                <span className="text-[#00d4ff]">fun </span>
                                <span className="text-[#00ff87]">buildAmazingApp</span>
                                <span className="text-white">() {"{"}</span><br />
                                <span className="ml-4 text-[rgba(232,232,240,0.4)]">  val <span className="text-purple-300">passion</span> = </span>
                                <span className="text-[#ffb86c]">true</span><br />
                                <span className="ml-4 text-[rgba(232,232,240,0.4)]">  val <span className="text-orange-300">years</span> = </span>
                                <span className="text-[#bd93f9]">5</span><br />
                                <span className="ml-4 text-[rgba(232,232,240,0.4)]">  return <span className="text-[#00ff87]">Masterpiece</span><span className="text-white">()</span></span><br />
                                <span className="text-white">{"}"}</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Android Bot Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                        className="flex-1 flex justify-center items-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 float-animation">
                            {/* Outer ring glow */}
                            <div className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 70%)",
                                    filter: "blur(20px)"
                                }}
                            />
                            <div className="relative w-full h-full">
                                <AndroidBotSVG />
                            </div>
                            {/* Orbit ring */}
                            <div className="absolute inset-[-20px] rounded-full border border-dashed border-[rgba(0,255,135,0.15)]" />

                            {/* Tech badges floating */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-4 glass px-3 py-1.5 rounded-full text-xs font-bold text-[#00ff87]"
                            >
                                Kotlin ✦
                            </motion.div>
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-4 glass px-3 py-1.5 rounded-full text-xs font-bold text-[#00d4ff]"
                            >
                                ✦ Flutter
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll down indicator */}
            <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[rgba(232,232,240,0.3)] hover:text-[#00ff87] transition-colors bounce-arrow"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <ChevronDown size={18} />
            </motion.button>
        </section>
    );
}
