"use client";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative border-t border-[rgba(255,255,255,0.05)] pt-12 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,255,135,0.03) 0%, transparent 70%)" }}
            />
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Changed flex-col md:flex-row to flex-col items-center and added justify-center */}
                <div className="flex flex-col items-center justify-center gap-8 pb-12 border-b border-[rgba(255,255,255,0.05)]">
                    {/* Removed md:text-left */}
                    <div className="text-center">
                        <div className="font-mono text-xl font-bold mb-2">
                            <span className="text-[rgba(255,255,255,0.25)]">&lt;</span>
                            <span className="gradient-text">AhsanEjaz</span>
                            <span className="text-[rgba(255,255,255,0.25)]"> /&gt;</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <p className="text-xs text-[rgba(232,232,240,0.3)]">
                                © {year} Ahsan Ejaz. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}