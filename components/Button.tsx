"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


type ButtonProps = HTMLMotionProps<"button"> & {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    children?: React.ReactNode; // ✅ ADD THIS
};



export const Button = ({
    variant = "primary",
    size = "md",
    children,
    className,
    icon,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-gold-500 text-dark-900 hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        outline: "border border-gold-500 text-gold-500 hover:bg-gold-500/10",
        ghost: "text-gray-300 hover:text-gold-500 hover:bg-white/5",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <span>{children}</span>
            {icon && <span className="ml-2">{icon}</span>}
        </motion.button>
    );
};
