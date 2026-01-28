"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ContactCTA = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/5" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                        Ready to <span className="text-gold-500">Elevate</span> Your Brand?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Let's collaborate to build something that stands out and drives real results.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" icon={<ArrowRight size={20} />}>
                            Start a Conversation
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
