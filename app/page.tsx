import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Process />
            <ContactCTA />
        </>
    );
}
