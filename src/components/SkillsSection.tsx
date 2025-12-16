import { motion } from "framer-motion";
import { Code, Cloud, Database, Cpu, Terminal, Wrench } from "lucide-react";
import { skills } from "@/data/skills";

const skillCategories = [
    { 
        title: "Cloud Platforms", 
        icon: Cloud, 
        skills: skills.cloud,
        color: "from-blue-500 to-cyan-500"
    },
    { 
        title: "DevOps Tools", 
        icon: Wrench, 
        skills: skills.technologyStack.slice(0, 8),
        color: "from-purple-500 to-pink-500"
    },
    { 
        title: "Languages", 
        icon: Code, 
        skills: skills.languages.map(l => l.split(' (')[0]),
        color: "from-green-500 to-emerald-500"
    },
    { 
        title: "Databases", 
        icon: Database, 
        skills: skills.databases.map(d => d.split(' (')[0]),
        color: "from-orange-500 to-red-500"
    },
];

export const SkillsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-accent/5 to-background dark:from-accent/10 dark:to-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
            
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                            Tech Arsenal
                        </span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive tech stack powering modern DevOps solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow group"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional skills cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 glass rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Core Competencies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.concepts.map((concept, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                                className="px-6 py-3 rounded-full text-base font-medium bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 cursor-default"
                            >
                                {concept}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
