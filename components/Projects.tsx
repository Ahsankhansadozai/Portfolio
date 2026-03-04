"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const featuredProjects = [
    {
        name: "FinTrack Pro",
        tagline: "Personal Finance Tracker",
        description:
            "A full-featured personal finance app with biometric authentication, interactive spending charts, multi-currency support, and complete offline functionality using Room DB.",
        tech: ["Kotlin", "Compose", "MVVM", "Room", "Hilt", "Biometric API"],
        techColors: ["#00ff87", "#00d4ff", "#a78bfa", "#f59e0b", "#ec4899", "#34d399"],
        github: "#",
        playStore: "#",
        gradient: "from-[#00ff87]/10 to-[#00d4ff]/5",
        accentColor: "#00ff87",
        emoji: "💰",
        stars: "4.8★",
    },
    {
        name: "ShopEase",
        tagline: "E-Commerce Platform",
        description:
            "Feature-rich Android e-commerce app with real-time inventory, Razorpay payment gateway integration, cart management, and Firebase-powered push notifications.",
        tech: ["Kotlin", "Retrofit", "Firebase", "Coroutines", "Razorpay", "FCM"],
        techColors: ["#00ff87", "#00d4ff", "#f59e0b", "#a78bfa", "#ec4899", "#34d399"],
        github: "#",
        playStore: "#",
        gradient: "from-[#f59e0b]/10 to-[#ec4899]/5",
        accentColor: "#f59e0b",
        emoji: "🛍️",
        stars: "4.6★",
    },
    {
        name: "FitPulse",
        tagline: "Fitness & Health Tracker",
        description:
            "Advanced fitness tracking app with Google Fit & Health Connect integration, custom animated progress rings, workout logging, and personalized health insights.",
        tech: ["Kotlin", "Compose", "Health Connect", "MPAndroidChart", "WorkManager"],
        techColors: ["#00ff87", "#00d4ff", "#a78bfa", "#f59e0b", "#ec4899"],
        github: "#",
        playStore: "#",
        gradient: "from-[#a78bfa]/10 to-[#ec4899]/5",
        accentColor: "#a78bfa",
        emoji: "🏃",
        stars: "4.9★",
    },
];

const minorProjects = [
    {
        name: "WeatherNow",
        description: "Real-time weather app with MVVM, Retrofit, and custom animated weather icons.",
        tech: ["Kotlin", "Retrofit", "MVVM"],
        color: "#00d4ff",
        emoji: "🌦️",
    },
    {
        name: "CryptoWatch",
        description: "Live cryptocurrency price tracker with WebSocket updates and portfolio management.",
        tech: ["Kotlin", "WebSocket", "Room"],
        color: "#f59e0b",
        emoji: "₿",
    },
    {
        name: "QuizMaster",
        description: "Offline trivia quiz game with custom animations and difficulty progression engine.",
        tech: ["Kotlin", "Compose", "Room"],
        color: "#ec4899",
        emoji: "🧠",
    },
];

function FeaturedCard({ project, index }: { project: (typeof featuredProjects)[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="glass rounded-2xl overflow-hidden transition-all duration-300 group relative"
            style={{
                boxShadow: hovered ? `0 20px 60px ${project.accentColor}25, 0 0 0 1px ${project.accentColor}20` : undefined,
                transform: hovered ? "translateY(-6px) scale(1.01)" : undefined,
            }}
        >
            {/* Phone mockup header area */}
            <div
                className={`relative h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
            >
                {/* Decorative grid */}
                <div className="absolute inset-0 grid-bg opacity-60" />

                {/* Center emoji / mockup */}
                <div className="relative z-10 text-center">
                    <div
                        className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl mb-3 border border-[rgba(255,255,255,0.15)]"
                        style={{ background: `${project.accentColor}15` }}
                    >
                        {project.emoji}
                    </div>
                    <div className="flex items-center justify-center gap-1 glass px-3 py-1 rounded-full">
                        <Star size={10} style={{ color: project.accentColor }} fill={project.accentColor} />
                        <span className="text-xs font-bold" style={{ color: project.accentColor }}>{project.stars}</span>
                    </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 z-20"
                    style={{ background: "rgba(10,10,15,0.85)" }}
                >
                    <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-white hover:text-[#00ff87] transition-colors border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,255,135,0.3)]"
                    >
                        <Github size={15} /> GitHub
                    </a>
                    <a
                        href={project.playStore}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all"
                        style={{
                            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`,
                            color: "#0a0a0f",
                        }}
                    >
                        <ExternalLink size={15} /> Play Store
                    </a>
                </motion.div>
            </div>

            {/* Card body */}
            <div className="p-6">
                <div className="mb-3">
                    <span className="text-xs font-medium tracking-widest uppercase" style={{ color: project.accentColor }}>
                        {project.tagline}
                    </span>
                    <h3 className="text-xl font-bold mt-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {project.name}
                    </h3>
                </div>

                <p className="text-sm text-[rgba(232,232,240,0.6)] leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, ti) => (
                        <span
                            key={t}
                            className="tech-badge"
                            style={{
                                color: project.techColors[ti] || project.accentColor,
                                background: `${project.techColors[ti] || project.accentColor}12`,
                                border: `1px solid ${project.techColors[ti] || project.accentColor}30`,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function MinorCard({ project, index }: { project: (typeof minorProjects)[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-5 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            style={{
                "--hover-color": project.color,
            } as React.CSSProperties}
        >
            <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{project.emoji}</span>
                <a href="#" className="text-[rgba(232,232,240,0.3)] hover:text-[#00ff87] transition-colors">
                    <Github size={16} />
                </a>
            </div>
            <h4 className="font-bold mb-1.5" style={{ fontFamily: "var(--font-space-grotesk)", color: project.color }}>
                {project.name}
            </h4>
            <p className="text-xs text-[rgba(232,232,240,0.55)] leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                        style={{ color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}25` }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { amount: 0.1, once: true });

    return (
        <section id="projects" className="py-28 relative overflow-hidden">
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00ff87] tracking-widest uppercase mb-3 block">
                        What I&apos;ve Built
                    </span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="mt-4 text-[rgba(232,232,240,0.5)] max-w-lg mx-auto">
                        A selection of production apps I&apos;ve shipped to the Google Play Store.
                    </p>
                </motion.div>

                {/* Featured cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project, i) => (
                        <FeaturedCard key={project.name} project={project} index={i} />
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
                    <span className="text-sm text-[rgba(232,232,240,0.3)] font-medium whitespace-nowrap">Other Notable Projects</span>
                    <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
                </div>

                {/* Minor projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {minorProjects.map((project, i) => (
                        <MinorCard key={project.name} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
