import { motion } from "framer-motion";
import { Briefcase, Building, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { Button } from "@/components/ui/button";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 bg-background/50">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Experience</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
                        <p className="text-gray-700 mb-8">
                            Over 24 years of experience in application development, cloud architecture and DevOps transformation
                        </p>
                        <Link to="/experiences">
                            <Button variant="outline" className="group">
                                View All Experience
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {experiences.slice(0, 3).map((exp, index) => (
                            <Link key={index} to={`/experience/${exp.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass rounded-xl p-6 hover:shadow-lg transition-all"
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
                                                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center text-accent">
                                                        <Building className="w-4 h-4 mr-2" />
                                                        <p>{exp.company}</p>
                                                    </span>
                                                    <span className="flex items-center text-gray-600">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        <p>{exp.location}</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 mt-2 sm:mt-0">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-800 mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {exp.technologies.length > 5 && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent">
                                                +{exp.technologies.length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};