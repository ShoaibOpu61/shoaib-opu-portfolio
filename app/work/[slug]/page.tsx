import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    // Mock data lookup would go here
    const { slug } = params;

    return (
        <article className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <Link href="/work" className="inline-block mb-8">
                    <Button variant="ghost" size="sm" icon={<ArrowLeft size={16} />}>Back to Work</Button>
                </Link>

                <header className="mb-16 text-center max-w-4xl mx-auto">
                    <span className="text-gold-500 uppercase tracking-widest text-sm font-medium mb-4 block">Case Study</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 capitalize">{slug.replace(/-/g, ' ')}</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        A deep dive into how we transformed a vision into a high-performance digital product.
                    </p>
                </header>

                {/* Hero Image */}
                <div className="w-full aspect-video bg-gray-800 rounded-2xl mb-24 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        [Project Hero Image for {slug}]
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-gold-500 font-bold mb-2">Client</h3>
                            <p className="text-gray-300">Confidential / Tech Startup</p>
                        </div>
                        <div>
                            <h3 className="text-gold-500 font-bold mb-2">Services</h3>
                            <p className="text-gray-300">UI/UX Design<br />Frontend Development<br />Motion Design</p>
                        </div>
                        <div>
                            <h3 className="text-gold-500 font-bold mb-2">Timeline</h3>
                            <p className="text-gray-300">3 Months</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-12 text-gray-300 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">The Challenge</h2>
                            <p>
                                The client needed a scalable solution that could handle high traffic while maintaining a premium feel. The existing platform was outdated and suffered from performance issues.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">The Solution</h2>
                            <p>
                                We rebuilt the application from the ground up using Next.js and Tailwind CSS. We implemented a new design system with gold accents and dark mode to align with the brand's premium positioning.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif text-white mb-6">The Result</h2>
                            <p>
                                Post-launch, the client saw a 150% increase in user engagement and specific improvement in load times.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
}
