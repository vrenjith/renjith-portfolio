
import { motion } from "framer-motion";
import { Github, Cloud, Shield, Target, ChartBar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const iconMap = {
    Cloud: Cloud,
    Shield: Shield,
    Target: Target,
    ChartBar: ChartBar,
    Users: Users,
};

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-accent/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Showcasing my expertise in DevOps architecture through real-world implementations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.slice(0, 6).map((project, index) => {
                        const Icon = iconMap[project.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link to={`/project/${project.id}`}>
                                    <Card className="h-full hover:shadow-lg transition-shadow glass-light group cursor-pointer overflow-hidden">
                                        <div className="h-48 overflow-hidden">
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                                            />
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-center gap-4">
                                                {Icon && <Icon className="w-6 h-6 text-accent" />}
                                                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                                                    {project.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base mb-4 text-gray-700">
                                                {project.description}
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Link to="/projects">
                        <Button variant="outline" size="lg" className="bg-accent/10 hover:bg-accent/20 group">
                            View All Projects
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
