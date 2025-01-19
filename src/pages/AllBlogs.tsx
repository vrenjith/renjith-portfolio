import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs } from "@/data/blogs";

const AllBlogs = () => {
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
                className="mb-12"
            >
                <h1 className="text-4xl font-bold mb-4">All Blog Posts</h1>
                <p className="text-lg text-gray-700">
                    Explore my journey from development to DevOps architecture through detailed technical articles
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link to={`/blog/${blog.id}`}>
                            <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer bg-glass">
                                <CardHeader>
                                    <CardTitle className="group-hover:text-accent transition-colors">
                                        {blog.title}
                                    </CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-gray-700">
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
        </div>
    );
};

export default AllBlogs;