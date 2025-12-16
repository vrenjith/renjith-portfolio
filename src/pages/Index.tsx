
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { GoToTopButton } from "@/components/GoToTopButton";
import { LinkedinLinkSection } from "@/components/LinkedinLinkSection";

const Index = () => {
    return (
        <>
            <Navigation />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <HeroSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <BlogsSection />
                {/* <LinkedinLinkSection /> */}
                <ContactSection />
                <GoToTopButton />
            </motion.div>
        </>
    );
};

export default Index;
