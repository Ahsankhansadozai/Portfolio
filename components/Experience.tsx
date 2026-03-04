"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Senior Android Developer",
        company: "TechCorp Inc.",
        location: "Lahore, Pakistan",
        duration: "2022 – Present",
        type: "Full-time",
        color: "#00ff87",
        achievements: [
            "Led a team of 4 Android developers building a fintech app used by 500K+ users",
            "Migrated entire codebase from XML layouts to Jetpack Compose, reducing UI code by 40%",
            "Architected a scalable MVVM + Clean Architecture foundation with Hilt DI",
            "Implemented biometric authentication and end-to-end encrypted transactions",
            "Reduced app startup time by 60% through modularization and lazy loading",
        ],
        stack: ["Kotlin", "Compose", "MVVM", "Hilt", "Room", "Coroutines"],
    },
    {
        role: "Android Developer",
        company: "MobileSoft Solutions",
        location: "Karachi, Pakistan",
        duration: "2020 – 2022",
        type: "Full-time",
        color: "#00d4ff",
        achievements: [
            "Developed a full-featured e-commerce app from design specs to Play Store launch",
            "Integrated Razorpay payment gateway with secure PCI-DSS compliant flow",
            "Improved app performance by 40% via Profiler-guided optimizations",
            "Built real-time order tracking using WebSockets and Firebase Realtime DB",
            "Wrote comprehensive unit tests achieving 80%+ code coverage",
        ],
        stack: ["Kotlin", "Retrofit", "Firebase", "Room", "Coroutines", "Dagger 2"],
    },
    {
        role: "Android Developer",
        company: "StartupXYZ",
        location: "Islamabad, Pakistan",
        duration: "2018 – 2020",
        type: "Full-time",
        color: "#a78bfa",
        achievements: [
            "Built a fitness tracking MVP from scratch, launched in 3 months",
            "Integrated Google Fit API and Health Connect for real-time health metrics",
            "Implemented push notifications with FCM and custom notification channels",
            "Set up CI/CD pipeline with GitHub Actions, reducing release cycle by 70%",
            "Designed offline-first architecture using Room + WorkManager sync strategy",
        ],
        stack: ["Kotlin", "Java", "Google Fit", "FCM", "WorkManager", "LiveData"],
    },
    {
        role: "Junior Android Developer",
        company: "AppWorks",
        location: "Lahore, Pakistan",
        duration: "2017 – 2018",
        type: "Full-time",
        color: "#f59e0b",
        achievements: [
            "Maintained and enhanced a legacy Java Android codebase with 100K+ users",
            "Fixed 50+ critical bugs improving app store rating from 3.2 to 4.5 stars",
            "Wrote unit tests with JUnit and Mockito, establishing first testing baseline",
            "Participated in Agile sprints, daily standups, and code review culture",
        ],
        stack: ["Java", "Android SDK", "SQLite", "JUnit", "Mockito", "XML"],
    },
];

function TimelineEntry({
    exp,
    index,
}: {
    exp: (typeof experiences)[0];
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.15, once: true });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="relative flex items-start gap-0 lg:gap-8 mb-12 last:mb-0">
            {/* Timeline line connector visible on desktop */}
            <div className="hidden lg:flex flex-col items-center relative" style={{ width: "48px", minWidth: "48px" }}>
                {/* Dot */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative z-10 mt-6"
                >
                    <div
                        className="w-4 h-4 rounded-full border-2 border-[#0a0a0f] cursor-pointer"
                        style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                    />
                    {/* Pulse ring */}
                    <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: exp.color, opacity: 0.2 }}
                    />
                </motion.div>
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1 glass rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group"
                style={{ borderColor: inView ? `${exp.color}20` : undefined }}
            >
                {/* Top bar */}
                <div
                    className="h-0.5 w-16 rounded-full mb-5 transition-all duration-500 group-hover:w-24"
                    style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                        <h3
                            className="text-xl font-bold mb-1"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold" style={{ color: exp.color }}>
                                {exp.company}
                            </span>
                            <span className="text-[rgba(232,232,240,0.3)]">•</span>
                            <div className="flex items-center gap-1 text-[rgba(232,232,240,0.45)] text-sm">
                                <MapPin size={12} />
                                {exp.location}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-1.5 text-[rgba(232,232,240,0.5)] text-sm">
                            <Calendar size={13} />
                            <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <Briefcase size={11} style={{ color: exp.color }} />
                            <span style={{ color: exp.color }}>{exp.type}</span>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[rgba(232,232,240,0.65)]">
                            <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: exp.color }}
                            />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                        <span
                            key={tech}
                            className="tech-badge glass"
                            style={{ color: exp.color, borderColor: `${exp.color}25`, border: "1px solid" }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default function Experience() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { amount: 0.1, once: true });

    return (
        <section id="experience" className="py-28 relative overflow-hidden">
            {/* BG blob */}
            <div
                className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00ff87] tracking-widest uppercase mb-3 block">
                        Where I&apos;ve Worked
                    </span>
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                {/* Vertical Timeline Line */}
                <div className="relative">
                    {/* Animated vertical line (desktop) */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={headerInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ transformOrigin: "top" }}
                        className="hidden lg:block absolute left-6 top-0 bottom-0 w-px timeline-line"
                    />

                    {/* Entries */}
                    <div className="space-y-2">
                        {experiences.map((exp, i) => (
                            <TimelineEntry key={exp.company} exp={exp} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
