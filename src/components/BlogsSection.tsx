import { motion } from "framer-motion";
import { Book, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const BlogsSection = () => {
  const blogs = [
    {
      title: "Implementing GitOps with ArgoCD",
      description: "A comprehensive guide to implementing GitOps practices using ArgoCD for Kubernetes deployments.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["GitOps", "Kubernetes", "ArgoCD"]
    },
    {
      title: "Zero-Downtime Database Migrations",
      description: "Best practices and strategies for performing database migrations without service interruption.",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["Database", "DevOps", "Migrations"]
    },
    {
      title: "Terraform Best Practices",
      description: "Essential best practices for managing infrastructure as code with Terraform in production environments.",
      date: "March 5, 2024",
      readTime: "10 min read",
      tags: ["Terraform", "IaC", "AWS"]
    }
  ];

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
          <h2 className="text-4xl font-bold mb-4">Technical Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing insights and experiences from the world of DevOps and cloud architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {blog.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};