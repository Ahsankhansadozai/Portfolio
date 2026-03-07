"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    type: string;
    color: string;
    achievements: string[];
    stack: string[];
}

const experiences: Experience[] = [
    {
        role: "Software Engineer (Contract)",
        company: "Gisgen Digital Innovation",
        location: "United Kingdom",
        duration: "Nov 2023 – Nov 2024",
        type: "Contract",
        color: "#00ff87",
        achievements: [
            "Worked with a UK-based startup delivering freelance and project-based software solutions",
            "Developed and maintained mobile applications for international clients",
            "Collaborated remotely with cross-functional teams to deliver scalable mobile products",
            "Implemented REST API integrations, real-time communication, and secure authentication flows",
            "Gained experience working in international software development environments",
        ],
        stack: ["Android", "Flutter", "Kotlin", "REST APIs", "Firebase", "Git"],
    },

    {
        role: "Lead Android / Flutter Developer",
        company: "Farmtohome",
        location: "Islamabad, Pakistan",
        duration: "Oct 2022 – Sep 2023",
        type: "Full-time",
        color: "#00d4ff",
        achievements: [
            "Hired as Lead Mobile Developer to build the Farmtohome grocery delivery platform",
            "Learned Flutter quickly and led development of the platform from scratch",
            "Developed multiple applications including Customer App and Rider App",
            "Implemented complete order flow including browsing, checkout, warehouse processing and delivery",
            "Successfully launched the platform in Islamabad and Peshawar supporting real delivery operations",
        ],
        stack: ["Flutter", "Dart", "REST APIs", "Firebase", "SQLite", "Git"],
    },

    {
        role: "Android Developer",
        company: "Metis International",
        location: "Islamabad, Pakistan",
        duration: "Feb 2021 – Sep 2022",
        type: "Full-time",
        color: "#a78bfa",
        achievements: [
            "Worked on large scale IoT based systems for international clients",
            "Contributed to fleet management system integrated with IoT devices for real-time truck monitoring",
            "Developed mobile applications for fleet drivers and fleet management operations",
            "Worked on enterprise level projects for clients including Vodafone Qatar",
            "Gained strong experience in IoT integrations and large scale mobile systems",
        ],
        stack: ["Kotlin", "Java", "REST APIs", "IoT Systems", "Firebase", "SQLite"],
    },

    {
        role: "Android Developer",
        company: "Zaryans Group",
        location: "Lahore, Pakistan",
        duration: "Jun 2021 – Jan 2022",
        type: "Full-time",
        color: "#f59e0b",
        achievements: [
            "Developed advanced mobile applications including photo editors, video editors and mobile games",
            "Worked with experienced senior developers building large scale advertisement-based applications",
            "Contributed to new product development and implementation of innovative app ideas",
            "Improved application stability and performance through debugging and crash resolution",
        ],
        stack: ["Java", "Kotlin", "Android SDK", "Firebase", "REST APIs"],
    },

    {
        role: "Android Developer (Intern)",
        company: "Taramob Tech",
        location: "Lahore, Pakistan",
        duration: "Aug 2020 – May 2021",
        type: "Internship",
        color: "#ec4899",
        achievements: [
            "Started career as an Android Developer Intern working on advertisement-based mobile apps",
            "Maintained and improved existing apps including Quran reading and PDF reader applications",
            "Implemented new features and fixed crashes across multiple production apps",
            "Gained hands-on experience in Android development, debugging and app maintenance",
        ],
        stack: ["Java", "Android SDK", "XML", "Firebase", "SQLite"],
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
