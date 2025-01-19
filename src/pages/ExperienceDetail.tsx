import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experiences";

const ExperienceDetail = () => {
    const { id } = useParams();
    const experience = experiences.find(exp => exp.id === id);

    if (!experience) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
                    <Link to="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/">
                <Button variant="ghost" className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="glass rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={experience.companyLogo}
                            alt={`${experience.company} logo`}
                            className="w-16 h-16 rounded-full object-contain"
                        />
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
                            <div className="flex items-center gap-4 text-gray-600">
                                <span className="flex items-center gap-2">
                                    <Building className="w-4 h-4" />
                                    {experience.company}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {experience.period}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">{experience.description}</p>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Key Achievements</h2>
                        <ul className="space-y-3">
                            {experience.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-accent flex-shrink-0" />
                                    <span className="text-gray-700">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceDetail;