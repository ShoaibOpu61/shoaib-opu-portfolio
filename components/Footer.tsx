"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">
                            Shoaib <span className="text-gold-500">Opu</span>
                        </h3>
                        <p className="text-gray-400 max-w-sm">
                            Helping businesses grow through data-driven design and high-performance development.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/work" className="text-gray-400 hover:text-gold-500 transition-colors">Work</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-gold-500 transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-dark-900 transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Shoaib Opu. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 text-sm hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
