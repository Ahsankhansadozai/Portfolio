"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { GraduationCap } from "lucide-react";

// const certifications = [
//     {
//         name: "Associate Android Developer",
//         issuer: "Google",
//         year: "2021",
//         description:
//             "Official Google certification validating expertise in core Android development skills including architecture, testing, and UI.",
//         color: "#00ff87",
//         emoji: "🏅",
//     },
//     {
//         name: "Kotlin for Android Developers",
//         issuer: "Udacity",
//         year: "2020",
//         description:
//             "Completed advanced Kotlin programming course covering coroutines, flows, and idiomatic Android development patterns.",
//         color: "#00d4ff",
//         emoji: "🎓",
//     },
//     {
//         name: "Firebase in a Weekend",
//         issuer: "Google",
//         year: "2019",
//         description:
//             "Mastered Firebase suite: Realtime DB, Firestore, Cloud Functions, Auth, and Cloud Messaging for production apps.",
//         color: "#f59e0b",
//         emoji: "🔥",
//     },
// ];

// function FlipCard({ cert, index }: { cert: (typeof certifications)[0]; index: number }) {
//     const ref = useRef(null);
//     const inView = useInView(ref, { amount: 0.1, once: true });

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 40 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: index * 0.15 }}
//             className="flip-card h-52"
//         >
//             <div className="flip-card-inner w-full h-full">
//                 {/* Front */}
//                 <div
//                     className="flip-card-front glass rounded-2xl w-full h-full p-6 flex flex-col justify-between"
//                     style={{ borderColor: `${cert.color}20` }}
//                 >
//                     <div>
//                         <div className="flex items-start justify-between mb-3">
//                             <span className="text-3xl">{cert.emoji}</span>
//                             <span className="text-xs text-[rgba(232,232,240,0.4)] glass px-2 py-1 rounded-full">{cert.year}</span>
//                         </div>
//                         <h4
//                             className="font-bold text-sm leading-snug mb-1"
//                             style={{ fontFamily: "var(--font-space-grotesk)", color: cert.color }}
//                         >
//                             {cert.name}
//                         </h4>
//                         <p className="text-xs text-[rgba(232,232,240,0.5)]">by {cert.issuer}</p>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <div
//                             className="h-0.5 w-10 rounded-full"
//                             style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
//                         />
//                         <span className="text-[10px] text-[rgba(232,232,240,0.3)] tracking-widest uppercase">Hover to flip</span>
//                     </div>
//                 </div>

//                 {/* Back */}
//                 <div
//                     className="flip-card-back glass rounded-2xl w-full h-full p-6 flex flex-col justify-center"
//                     style={{ background: `linear-gradient(135deg, ${cert.color}12, rgba(17,17,24,0.95))`, borderColor: `${cert.color}30` }}
//                 >
//                     <Award size={24} style={{ color: cert.color }} className="mb-3" />
//                     <h4
//                         className="font-bold text-sm mb-2"
//                         style={{ fontFamily: "var(--font-space-grotesk)", color: cert.color }}
//                     >
//                         {cert.name}
//                     </h4>
//                     <p className="text-xs text-[rgba(232,232,240,0.65)] leading-relaxed mb-4">{cert.description}</p>
//                     <a
//                         href="#"
//                         className="flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-80"
//                         style={{ color: cert.color }}
//                     >
//                         <ExternalLink size={12} /> View Certificate
//                     </a>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });

    return (
        <section id="education" className="py-28 relative overflow-hidden">
            <div
                className="absolute right-0 bottom-0 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)", filter: "blur(50px)" }}
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
                        Academic & Professional
                    </span>
                    <h2 className="section-title">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                </motion.div>

                {/* <div className="grid lg:grid-cols-2 gap-12 items-start"> */}
                <div className="max-w-3xl mx-auto">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {/* <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: "rgba(0,255,135,0.12)" }}
                            >
                                <GraduationCap size={18} className="text-[#00ff87]" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                                Education
                            </h3>
                        </div> */}

                        <div className="space-y-6">

                            {/* MS Degree */}
                            <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">

                                <div
                                    className="absolute top-0 left-0 w-full h-0.5"
                                    style={{ background: "linear-gradient(90deg, #00ff87, transparent)" }}
                                />

                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                                        style={{
                                            background: "rgba(0,255,135,0.08)",
                                            border: "1px solid rgba(0,255,135,0.15)"
                                        }}
                                    >
                                        🎓
                                    </div>

                                    <span className="text-sm text-[rgba(232,232,240,0.4)] glass px-3 py-1 rounded-full">
                                        Sep 2023 – Sep 2024
                                    </span>
                                </div>

                                <h4
                                    className="text-lg font-bold mb-1"
                                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                                >
                                    MS Advanced Computer Science
                                </h4>

                                <p className="text-[#00ff87] font-semibold text-sm mb-1">
                                    Liverpool Hope University
                                    <span className="text-xs px-3 py-1 rounded-full glass text-[rgba(232,232,240,0.6)]">
                                        Master's Degree
                                    </span>
                                </p>

                                <p className="text-[rgba(232,232,240,0.45)] text-sm mb-5">
                                    Liverpool, United Kingdom
                                </p>

                                <div className="space-y-2.5">
                                    {[
                                        "Master’s degree in Advanced Computer Science",
                                        "Focused on modern software engineering and advanced computing systems",
                                        "Expanded expertise in scalable and high-performance software solutions"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2.5 text-sm text-[rgba(232,232,240,0.6)]">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#00ff87]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                            </div>


                            {/* BS Degree */}

                            <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">

                                <div
                                    className="absolute top-0 left-0 w-full h-0.5"
                                    style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }}
                                />

                                <div className="flex items-start justify-between mb-4">

                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                                        style={{
                                            background: "rgba(0,212,255,0.08)",
                                            border: "1px solid rgba(0,212,255,0.15)"
                                        }}
                                    >
                                        🎓
                                    </div>

                                    <span className="text-sm text-[rgba(232,232,240,0.4)] glass px-3 py-1 rounded-full">
                                        2016 – 2020
                                    </span>

                                </div>

                                <h4
                                    className="text-lg font-bold mb-1"
                                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                                >
                                    BS Software Engineering
                                </h4>

                                <p className="text-[#00d4ff] font-semibold text-sm mb-1">
                                    International Islamic University, Islamabad
                                    <span className="text-xs px-3 py-1 rounded-full glass text-[rgba(232,232,240,0.6)]">
                                        Bachelor's Degree
                                    </span>
                                </p>

                                <p className="text-[rgba(232,232,240,0.45)] text-sm mb-5">
                                    Islamabad, Pakistan
                                </p>

                                <div className="space-y-2.5">
                                    {[
                                        "Bachelor’s degree in Software Engineering",
                                        "Built strong foundations in software development and system design",
                                        "Developed multiple academic and practical software projects"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2.5 text-sm text-[rgba(232,232,240,0.6)]">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#00d4ff]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </motion.div>

                    {/* Certifications */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: "rgba(0,212,255,0.12)" }}
                            >
                                <Award size={18} className="text-[#00d4ff]" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                                Certifications
                            </h3>
                            <span className="text-xs text-[rgba(232,232,240,0.3)] ml-1">(hover to flip)</span>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, i) => (
                                <FlipCard key={cert.name} cert={cert} index={i} />
                            ))}
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}
