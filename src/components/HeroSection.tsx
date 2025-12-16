import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Send, BookOpen, LayoutGrid, User, Linkedin, Sparkles } from "lucide-react";
import { PDFGenerator } from "./PDFGenerator";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const stats = [
    { value: 25, label: "Years Experience", suffix: "+" },
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 20, label: "Tech Stack", suffix: "+" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2 });
        const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [value]);

    return (
        <span className="font-bold text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {displayValue}{suffix}
        </span>
    );
}

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
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/10" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-primary/5 dark:via-accent/10 dark:to-primary/10"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Background Name */}
            <div className="fixed -left-32 top-1/2 -translate-y-1/2 -rotate-90 text-[12vh] font-bold text-foreground/5 dark:text-foreground/10 whitespace-nowrap pointer-events-none select-none z-0">
                Renjith Pillai
            </div>

            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Profile Image with glow effect */}
            <motion.div 
                className="absolute top-24 left-8 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="relative"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50" />
                    <img
                        src="/images/profile/renjith-pillai.jpg"
                        alt="Renjith Pillai"
                        className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-xl object-cover"
                    />
                </motion.div>
            </motion.div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            DevOps Leadership & Platform Engineering
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="text-foreground">
                            Building High-Performance
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            DevOps Teams & Platforms
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Transforming organizations through DevOps excellence, mentoring teams, and architecting
                        comprehensive platforms that integrate modern cloud-native technologies while leveraging Gen AI in day-to-day operations.
                    </motion.p>

                    {/* Stats Counter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="glass rounded-xl p-6"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            onClick={scrollToContact}
                            size="lg"
                            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/25 group"
                        >
                            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            Get in Touch
                        </Button>
                        <Button
                            onClick={scrollToProjects}
                            size="lg"
                            variant="outline"
                            className="glass hover:bg-accent/10 group"
                        >
                            <LayoutGrid className="w-4 h-4 mr-2" />
                            View Projects
                        </Button>
                        <PDFGenerator />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};