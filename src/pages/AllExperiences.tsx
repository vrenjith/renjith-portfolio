import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building } from "lucide-react";
import { experiences } from "@/data/experiences";

const AllExperiences = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A comprehensive overview of my professional journey in cloud architecture and DevOps
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                {experiences.map((exp, index) => (
                    <Link key={index} to={`/experience/${exp.id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-xl p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                <div className="flex items-center">
                                    {exp.companyLogo && (
                                        <img
                                            src={exp.companyLogo}
                                            alt={`${exp.company} logo`}
                                            className="w-12 h-12 mr-4 rounded-full object-cover bg-white p-1"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                        <div className="flex items-center text-accent">
                                            <Building className="w-4 h-4 mr-2" />
                                            <p>{exp.company}</p>
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
    );
};

export default AllExperiences;