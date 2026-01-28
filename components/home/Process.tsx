"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8 text-gold-500" />,
        title: "Discovery",
        description: "Understanding your goals, target audience, and market position."
    },
    {
        icon: <PenTool className="w-8 h-8 text-gold-500" />,
        title: "Design",
        description: "Crafting intuitive and visually stunning interfaces."
    },
    {
        icon: <Code className="w-8 h-8 text-gold-500" />,
        title: "Development",
        description: "Building robust, scalable, and high-performance solutions."
    },
    {
        icon: <Rocket className="w-8 h-8 text-gold-500" />,
        title: "Launch",
        description: "Testing, deploying, and optimizing for maximum impact."
    }
];

export const Process = () => {
    return (
        <section className="py-32 bg-black/40">
            <div className="container mx-auto px-6">
                <SectionHeading subtitle="How I Work" title="My Process" />

                <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10"
                        >
                            <GlassCard className="text-center h-full hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 mx-auto bg-dark-900 rounded-full border border-gold-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
