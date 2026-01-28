import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
    title: "Contact | Shoaib Opu",
    description: "Get in touch for your next project.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading subtitle="Get in Touch" title="Let's Build Something Extraordinary" />

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mt-12 backdrop-blur-sm">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Name</label>
                                <input type="text" className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Email</label>
                                <input type="email" className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm">Project Type</label>
                            <select className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors">
                                <option>Web Development</option>
                                <option>Mobile App Design</option>
                                <option>Product Design</option>
                                <option>Brand Identity</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm">Message</label>
                            <textarea rows={5} className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Tell me about your project..." />
                        </div>

                        <Button size="lg" className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
