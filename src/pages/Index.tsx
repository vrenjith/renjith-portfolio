import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { GoToTopButton } from "@/components/GoToTopButton";

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
            <BlogsSection />
            <ContactSection />
            <GoToTopButton />
        </motion.div>
    );
};

export default Index;