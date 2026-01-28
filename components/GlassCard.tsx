"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    gradientHighlight?: boolean;
}

export const GlassCard = ({
    children,
    className,
    gradientHighlight = false,
    ...props
}: GlassCardProps) => {
    return (
        <motion.div
            className={twMerge(
                "glass-card rounded-2xl p-6 relative overflow-hidden",
                className
            )}
            {...props}
        >
            {gradientHighlight && (
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
