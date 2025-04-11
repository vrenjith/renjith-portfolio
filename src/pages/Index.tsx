
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { GoToTopButton } from "@/components/GoToTopButton";
import { LinkedinLinkSection } from "@/components/LinkedinLinkSection";

const Index = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <LinkedinLinkSection />
            <ContactSection />
            <GoToTopButton />
        </motion.div>
    );
};

export default Index;
