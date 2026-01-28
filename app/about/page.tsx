import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
    title: "About | Shoaib Opu",
    description: "Learn more about Shoaib Opu, a Product Designer & Developer.",
};

export default function AboutPage() {
    return (
        <div className="pt-32">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <SectionHeading align="left" subtitle="About Me" title="The Person Behind the Pixels" />
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm Shoaib Opu, a multidisciplinary designer and developer with a passion for creating immersive digital experiences.
                            </p>
                            <p>
                                With over 5 years of experience in the industry, I've had the privilege of working with startups and established brands to bring their visions to life. My approach combines aesthetic precision with technical robustness.
                            </p>
                            <p>
                                When I'm not coding or designing, you can find me exploring new technologies or capturing moments through photography.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[600px] bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            [Shoaib Opu Portrait / Lifestyle Shot]
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <SectionHeading subtitle="Expertise" title="My Toolkit" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Node.js", "Framer Motion", "UI Design"].map(skill => (
                            <div key={skill} className="p-6 bg-white/5 rounded-xl border border-white/5 text-center text-gray-300 font-medium hover:border-gold-500/50 hover:text-gold-500 transition-colors">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ContactCTA />
        </div>
    );
}
