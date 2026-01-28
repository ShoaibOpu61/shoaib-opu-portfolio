"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Fintech Dashboard",
        category: "Web Application",
        description: "A comprehensive financial analytics platform for enterprise clients.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: 2,
        title: "E-Commerce Mobile App",
        category: "Mobile Design",
        description: "High-conversion shopping experience for a luxury fashion brand.",
        tags: ["React Native", "UX Design"],
        color: "from-rose-500/20 to-orange-500/20"
    },
    {
        id: 3,
        title: "AI SaaS Platform",
        category: "Product Design",
        description: "User interface for a generative AI content creation tool.",
        tags: ["Figma", "React"],
        color: "from-emerald-500/20 to-teal-500/20"
    }
];

export const Projects = () => {
    return (
        <section className="py-32 relative" id="work">
            <div className="container mx-auto px-6">
                <SectionHeading subtitle="Selected Work" title="Featured Projects" />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full group hover:border-gold-500/30 transition-colors">
                                <div className={`h-48 mb-6 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                    <span className="text-white/20 font-serif text-4xl">{project.id}</span>
                                </div>

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-gold-500 text-xs uppercase tracking-wider font-medium">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-gold-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <Link href={`/work/${project.id}`}>
                                        <Button variant="ghost" size="sm" className="!p-2 rounded-full">
                                            <ExternalLink size={20} />
                                        </Button>
                                    </Link>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/work">
                        <Button variant="outline">View All Projects</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
