import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Building, Calendar, MapPin } from "lucide-react";
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
                        <div className="w-16 h-16 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                            <img
                                src={experience.companyLogo}
                                alt={`${experience.company} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
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
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {experience.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">About {experience.company}</h2>
                        <p className="text-gray-700">{experience.about}</p>
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
                        <h2 className="text-xl font-semibold mb-4">Positions & Achievements</h2>
                        <div className="space-y-6">
                            {experience.positions.map((position, index) => (
                                <div key={index} className="glass p-6 rounded-lg">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-accent">{position.title}</h3>
                                        <span className="text-gray-600">{position.period}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {position.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start">
                                                <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-accent flex-shrink-0" />
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceDetail;