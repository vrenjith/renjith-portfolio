import { motion } from "framer-motion";
import { Briefcase, Building, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences, profileData } from "@/data/experiences";
import { Button } from "@/components/ui/button";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10 relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
            
            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto">
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
                                <Briefcase className="w-4 h-4 mr-2 inline" />
                                Professional Journey
                            </span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Experience</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            {profileData.summary}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 mb-12">
                        {experiences.slice(0, 3).map((exp, index) => (
                            <Link key={index} to={`/experience/${exp.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="glass rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all border border-border/50 hover:border-primary/50 group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            {exp.companyLogo && (
                                                <div className="w-12 h-12 mr-4 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={exp.companyLogo}
                                                        alt={`${exp.company} logo`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center text-accent">
                                                        <Building className="w-4 h-4 mr-2" />
                                                        <p>{exp.company}</p>
                                                    </span>
                                                    <span className="flex items-center text-muted-foreground">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        <p>{exp.location}</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-muted-foreground mt-2 sm:mt-0">{exp.period}</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {exp.technologies.length > 5 && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground">
                                                +{exp.technologies.length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Link to="/experiences">
                            <Button variant="outline" size="lg" className="glass hover:bg-primary/10 hover:border-primary/50 group">
                                View All Experience
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};