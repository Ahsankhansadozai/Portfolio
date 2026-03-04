"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, TrendingUp } from "lucide-react";

const stats = [
    { icon: TrendingUp, value: 5, suffix: "+", label: "Years Experience", color: "#00ff87" },
    { icon: Smartphone, value: 20, suffix: "+", label: "Apps Built", color: "#00d4ff" },
    { icon: Code2, value: 1, suffix: "M+", label: "Downloads", color: "#a78bfa" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const step = (target / duration) * 16;
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span>{count}{suffix}</span>
    );
}

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.15, once: true });

    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(0,255,135,0.3), transparent)" }}
            />
            <div
                className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-30"
                style={{ background: "radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00ff87] tracking-widest uppercase mb-3 block">Who I Am</span>
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute -inset-3 rounded-full"
                                style={{
                                    background: "conic-gradient(from 0deg, #00ff87, #00d4ff, #a78bfa, #00ff87)",
                                    padding: "2px",
                                    borderRadius: "9999px",
                                    filter: "blur(0px)",
                                }}
                            />
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[rgba(0,255,135,0.3)] glow-green"
                                style={{ background: "linear-gradient(135deg, #111118, #0d0d14)" }}
                            >
                                {/* Avatar placeholder with initials */}
                                <div className="w-full h-full flex flex-col items-center justify-center"
                                    style={{ background: "linear-gradient(135deg, #111118 0%, #1a1a2e 100%)" }}
                                >
                                    <div className="w-24 h-24 rounded-full mb-3"
                                        style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)" }}
                                    >
                                        <div className="w-full h-full rounded-full flex items-center justify-center text-3xl font-bold text-[#0a0a0f]"
                                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                                        >
                                            AE
                                        </div>
                                    </div>
                                    <span className="text-[rgba(232,232,240,0.4)] text-sm">Senior Android Dev</span>
                                </div>

                                {/* Scan line effect */}
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,135,0.015) 2px, rgba(0,255,135,0.015) 4px)"
                                    }}
                                />
                            </div>

                            {/* Conic border overlay */}
                            <div className="absolute -inset-1 rounded-full pointer-events-none"
                                style={{
                                    background: "conic-gradient(from 0deg, #00ff87 0%, transparent 30%, #00d4ff 60%, transparent 80%, #00ff87 100%)",
                                    opacity: 0.4,
                                    borderRadius: "9999px",
                                    filter: "blur(3px)",
                                }}
                            />

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-[rgba(0,255,135,0.2)]"
                            >
                                <span className="text-xs text-[#00ff87] font-bold">🚀 Open to Work</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4 text-[rgba(232,232,240,0.75)] leading-relaxed">
                            <p className="text-lg">
                                Passionate <span className="text-white font-semibold">Android developer</span> with{" "}
                                <span className="text-[#00ff87] font-semibold">5+ years</span> crafting high-performance
                                mobile experiences that users love.
                            </p>
                            <p>
                                Specialized in <span className="text-[#00d4ff] font-medium">Kotlin</span>,{" "}
                                <span className="text-[#00d4ff] font-medium">Jetpack Compose</span>, and scalable{" "}
                                <span className="text-[#a78bfa] font-medium">MVVM architectures</span>. I don&apos;t just
                                write code — I craft digital experiences that solve real-world problems at scale.
                            </p>
                            <p>
                                From fintech apps with biometric security to fitness trackers with real-time analytics —
                                I&apos;ve shipped apps with{" "}
                                <span className="text-[#00ff87] font-semibold">1M+ downloads</span> across the Play Store.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Clean Architecture", "Test-Driven Dev", "Performance Optimization", "CI/CD", "Code Reviews"].map((tag) => (
                                <span key={tag} className="glass px-3 py-1.5 rounded-full text-xs font-medium text-[rgba(232,232,240,0.6)] border border-[rgba(255,255,255,0.07)]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stat Counters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                            className="glass rounded-2xl p-8 text-center relative overflow-hidden group hover:border-[rgba(0,255,135,0.2)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}08 0%, transparent 70%)` }}
                            />
                            <stat.icon size={28} style={{ color: stat.color }} className="mx-auto mb-3 opacity-80" />
                            <div className="text-5xl font-bold mb-2" style={{ color: stat.color, fontFamily: "var(--font-space-grotesk)" }}>
                                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <div className="text-[rgba(232,232,240,0.5)] text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
