import { SectionHeading } from "@/components/SectionHeading";
import { Projects } from "@/components/home/Projects";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata = {
    title: "Work | Shoaib Opu",
    description: "A showcase of premium digital products and experiences.",
};

export default function WorkPage() {
    return (
        <div className="pt-32">
            <div className="container mx-auto px-6 mb-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-6">
                    Selected <span className="text-gold-500">Work</span>
                </h1>
                <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
                    A collection of projects where design meets performance. exploring the intersection of aesthetics and functionality.
                </p>
            </div>

            {/* Reuse Projects Grid but maybe cleaner or expanded */}
            <div className="-mt-32"> {/* Pull up to overlap if needed, but here just reusing component */}
                <Projects />
            </div>

            <ContactCTA />
        </div>
    );
}
