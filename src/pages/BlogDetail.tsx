
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BloggerService, BlogPost } from "@/services/bloggerService";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const posts = await BloggerService.fetchBlogPosts();
      const foundBlog = posts.find(post => post.id === id);
      setBlog(foundBlog || null);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
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
      >
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-700 mb-6">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </span>
          <span>{blog.publishedDate}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <div className="mt-8 pt-6 border-t">
          <Button asChild>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              Read on Blog
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
