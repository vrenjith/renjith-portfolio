
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BloggerService, BlogPost } from "@/services/bloggerService";

export const BlogsSection = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const posts = await BloggerService.fetchBlogPosts();
            setBlogPosts(posts.slice(0, 3)); // Show only first 3 posts
            setLoading(false);
        };

        fetchPosts();
    }, []);

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
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Blog Posts</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Random Revelations</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Thoughts, insights, and technical discoveries from my journey in software development
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="h-full bg-glass">
                                    <CardHeader>
                                        <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                                        <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-muted rounded animate-pulse" />
                                            <div className="h-4 bg-muted rounded animate-pulse" />
                                            <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer bg-glass">
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                            <span>{post.publishedDate}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base mb-4 line-clamp-3">
                                            {post.description}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.categories.slice(0, 3).map((category, catIndex) => (
                                                <span
                                                    key={catIndex}
                                                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-accent font-medium group-hover:gap-2 transition-all"
                                        >
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-4">
                        Want to read more of my technical articles?
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link to="/blogs">
                            <Button variant="outline" size="lg" className="group">
                                View All Blog Posts
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a
                            href="https://random-revelations.blogspot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="group">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Visit Blog
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
