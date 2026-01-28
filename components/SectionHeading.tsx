"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    subtitle: string;
    title: string;
    align?: "left" | "center";
}

export const SectionHeading = ({ subtitle, title, align = "center" }: SectionHeadingProps) => {
    return (
        <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gold-500 font-medium tracking-wider uppercase text-sm mb-2 block"
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif text-white leading-tight"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`h-px bg-gold-500/30 w-24 mt-6 ${align === "center" ? "mx-auto" : ""}`}
            />
        </div>
    );
};
