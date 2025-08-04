import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BloggerService, BlogPost } from "@/services/bloggerService";

const AllBlogs = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const posts = await BloggerService.fetchBlogPosts();
            setBlogPosts(posts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

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
                <h1 className="text-4xl font-bold mb-4">Random Revelations</h1>
                <p className="text-lg text-muted-foreground">
                    All posts from my technical blog - thoughts, insights, and discoveries from my journey in software development
                </p>
            </motion.div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
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
                            animate={{ opacity: 1, y: 0 }}
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
                                        Read Full Post <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}

            {!loading && blogPosts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No blog posts found at the moment.</p>
                    <a
                        href="https://random-revelations.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Visit Blog Directly</Button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default AllBlogs;