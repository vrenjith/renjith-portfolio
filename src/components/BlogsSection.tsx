import { motion } from "framer-motion";
import { Book, Clock, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs } from "@/data/blogs";

export const BlogsSection = () => {
    return (
        <section id="blogs" className="py-20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Blogs</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Technical Blog</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sharing insights and experiences from the world of DevOps and cloud architecture
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.slice(0, 6).map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${blog.id}`}>
                                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer bg-glass">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-accent transition-colors">
                                            {blog.title}
                                        </CardTitle>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {blog.readTime}
                                            </span>
                                            <span>{blog.date}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base mb-4 text-gray-700">
                                            {blog.description}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {blog.tags.map((tag, tagIndex) => (
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
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link to="/blogs">
                        <Button variant="outline" size="lg" className="group">
                            View All Blog Posts
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
