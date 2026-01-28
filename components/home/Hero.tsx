"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold-500 font-medium tracking-wide uppercase text-sm mb-4 block">
                        Product Designer & Developer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                        Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Vision</span> Into Reality.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I help startups and established brands create premium, conversion-focused digital experiences that leave a lasting impression.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button size="lg" icon={<ArrowRight size={18} />}>
                                Start a Project
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" icon={<Download size={18} />}>
                            Download CV
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm">
                        <div className="flex -space-x-4">
                            {/* Mock avatars */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-dark-900 flex items-center justify-center text-xs">U{i}</div>
                            ))}
                        </div>
                        <p>Trusted by 50+ Happy Clients</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden glass-card border border-white/10 group">
                        {/* Placeholder for Portrait */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                            [Shoaib Opu Portrait]
                        </div>

                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="glass-nav rounded-lg p-4 backdrop-blur-md bg-black/40 border border-white/10 animate-bounce">
                                <p className="text-gold-500 font-bold text-xl">5+ Years</p>
                                <p className="text-xs text-gray-300">Experience</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
