import { motion } from "framer-motion";
import { Send, BookOpen, LayoutGrid, User, Linkedin } from "lucide-react";
import { PDFGenerator } from "./PDFGenerator";

export const HeroSection = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToBlogs = () => {
        const blogsSection = document.getElementById('blogs');
        blogsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToExperience = () => {
        const experienceSection = document.getElementById('experience');
        experienceSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToLinkedin = () => {
        const linkedinSection = document.getElementById('linkedin');
        linkedinSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            </div>

            {/* Background Name */}
            <div className="fixed -left-32 top-1/2 -translate-y-1/2 -rotate-90 text-[12vh] font-bold text-black/10 whitespace-nowrap pointer-events-none select-none z-0">
                Renjith Pillai
            </div>

            {/* Profile Image */}
            <div className="absolute top-8 left-8 z-10">
                <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczPVTbtDzvmUpqhcZz-jSFpgxdiAUOTfoGUdZXHRt5Xuz06jO4Uo-89Z3vmY1n_sF_mqi5e5D9M1Z5aO5rGQ3oJEUGX6hHJ8s2alyVjLsKVhCsrJ3ckpHGQleAM_ZopsGle8HJni1n9jTYYIDu4CapnN2g=w2070-h1552-s-no-gm"
                    alt="Renjith Pillai"
                    className="w-24 h-24 rounded-full border-2 border-accent/20 object-cover"
                />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto text-center stagger-delay">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
                    >
                        <User className="w-4 h-4 mr-2 text-gray-700" />
                        <span className="text-sm font-medium text-gray-700">DevOps Leadership & Platform Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Building High-Performance DevOps Teams & Platforms
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-gray-600 mb-8"
                    >
                        Transforming organizations through DevOps excellence, mentoring teams, and architecting
                        comprehensive platforms that integrate modern cloud-native technologies while leveraging Gen AI in the day-to-day operations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center text-gray-700"
                        >
                            <LayoutGrid className="w-4 h-4 mr-2" />
                            View Projects
                        </button>
                        <button
                            onClick={scrollToBlogs}
                            className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center text-gray-700"
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Blogs
                        </button>
                        <button
                            onClick={scrollToLinkedin}
                            className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center text-gray-700"
                        >
                            <Linkedin className="w-4 h-4 mr-2" />
                            View LinkedIn
                        </button>
                        <button
                            onClick={scrollToExperience}
                            className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center text-gray-700"
                        >
                            <User className="w-4 h-4 mr-2" />
                            View Experience
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Get in touch
                        </button>
                        <PDFGenerator />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};