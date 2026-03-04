"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        color: "#00ff87",
        skills: [
            { name: "Kotlin", level: 95 },
            { name: "Java", level: 85 },
            { name: "XML", level: 90 },
        ],
    },
    {
        title: "Jetpack & Frameworks",
        color: "#00d4ff",
        skills: [
            { name: "Jetpack Compose", level: 92 },
            { name: "Navigation", level: 90 },
            { name: "Room DB", level: 88 },
            { name: "WorkManager", level: 82 },
            { name: "Hilt / DI", level: 88 },
            { name: "Coroutines / Flow", level: 90 },
            { name: "LiveData / ViewModel", level: 92 },
            { name: "DataStore", level: 85 },
        ],
    },
    {
        title: "Architecture",
        color: "#a78bfa",
        skills: [
            { name: "MVVM", level: 95 },
            { name: "MVI", level: 80 },
            { name: "Clean Architecture", level: 88 },
        ],
    },
    {
        title: "Tools & Cloud",
        color: "#f59e0b",
        skills: [
            { name: "Android Studio", level: 96 },
            { name: "Firebase", level: 85 },
            { name: "Git / GitHub", level: 92 },
            { name: "Gradle", level: 80 },
            { name: "Postman", level: 78 },
        ],
    },
    {
        title: "Testing",
        color: "#ec4899",
        skills: [
            { name: "JUnit", level: 85 },
            { name: "Espresso", level: 75 },
            { name: "Mockito", level: 80 },
        ],
    },
];

function SkillBar({ name, level, color, inView, delay }: {
    name: string; level: number; color: string; inView: boolean; delay: number;
}) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between items-center">
                <span className="text-sm text-[rgba(232,232,240,0.8)] font-medium">{name}</span>
                <span className="text-xs font-bold" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay, ease: "easeOut" }}
                    style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
                />
            </div>
        </div>
    );
}

function SkillCard({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="glass rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
            style={{
                borderColor: hovered ? `${category.color}30` : undefined,
                boxShadow: hovered ? `0 8px 40px ${category.color}15` : undefined,
                transform: hovered ? "translateY(-4px)" : undefined,
            }}
        >
            {/* Top accent bar */}
            <div
                className="h-0.5 w-full rounded-full mb-5"
                style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
            />

            {/* Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, ${category.color}06 0%, transparent 60%)` }}
            />

            <h3
                className="text-sm font-bold tracking-widest uppercase mb-5"
                style={{ color: category.color, fontFamily: "var(--font-space-grotesk)" }}
            >
                {category.title}
            </h3>

            <div className="space-y-4">
                {category.skills.map((skill, si) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                        inView={inView}
                        delay={si * 0.08}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { amount: 0.1, once: true });

    return (
        <section id="skills" className="py-28 relative">
            {/* Background */}
            <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00ff87] tracking-widest uppercase mb-3 block">
                        What I Work With
                    </span>
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="mt-4 text-[rgba(232,232,240,0.5)] max-w-lg mx-auto">
                        A curated set of battle-tested technologies I use to build production-grade Android apps.
                    </p>
                </motion.div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <SkillCard key={cat.title} category={cat} index={i} />
                    ))}
                </div>

                {/* Tech cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-14 flex flex-wrap justify-center gap-3"
                >
                    {["Android SDK", "Retrofit", "OkHttp", "Accompanist", "Glide/Coil", "MPAndroidChart",
                        "Material Design 3", "Health Connect", "Google Fit API", "Razorpay SDK", "Play Billing",
                        "Crashlytics", "FCM"].map((tech) => (
                            <span
                                key={tech}
                                className="glass px-4 py-2 rounded-full text-xs font-medium text-[rgba(232,232,240,0.6)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,255,135,0.3)] hover:text-[#00ff87] transition-all duration-200 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                </motion.div>
            </div>
        </section>
    );
}
