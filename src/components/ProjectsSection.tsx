
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
        <section id="projects" className="py-24 bg-gradient-to-b from-background to-accent/5 dark:from-background dark:to-accent/10 relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
            
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
                            Portfolio Showcase
                        </span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <Link to={`/project/${project.id}`}>
                                    <Card className="h-full glass-light group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                            />
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                {Icon && (
                                                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                                                        <Icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                )}
                                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base mb-4 line-clamp-3">
                                                {project.description}
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                                Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="glass hover:bg-primary/10 hover:border-primary/50 group"
                        >
                            View All Projects
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
