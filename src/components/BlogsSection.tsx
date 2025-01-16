import { motion } from "framer-motion";
import { Book, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const BlogsSection = () => {
  const blogs = [
    {
      id: "building-devops-teams",
      title: "Building and Scaling High-Performance DevOps Teams",
      description: "Strategies for mentoring, growing, and leading successful DevOps teams through transformation and cultural change.",
      date: "March 20, 2024",
      readTime: "10 min read",
      tags: ["Leadership", "Team Building", "DevOps Culture"]
    },
    {
      id: "integrated-devops-platform",
      title: "Architecting an Enterprise DevOps Platform",
      description: "Comprehensive guide to building an integrated DevOps platform with Kubernetes, Terraform, Jenkins, and monitoring solutions.",
      date: "March 15, 2024",
      readTime: "15 min read",
      tags: ["Platform Engineering", "Architecture", "Integration"]
    },
    {
      id: "container-orchestration",
      title: "Container Orchestration: From Docker to Kubernetes",
      description: "Evolution from basic containerization to advanced orchestration with Kubernetes, Helm, and service mesh with Istio.",
      date: "March 10, 2024",
      readTime: "12 min read",
      tags: ["Kubernetes", "Docker", "Istio"]
    },
    {
      id: "infrastructure-automation",
      title: "Infrastructure Automation at Scale",
      description: "Implementing infrastructure as code using Terraform, Packer, and Consul for multi-cloud environments.",
      date: "March 5, 2024",
      readTime: "8 min read",
      tags: ["IaC", "Terraform", "Multi-Cloud"]
    },
    {
      id: "observability-monitoring",
      title: "Advanced Observability in Cloud-Native Systems",
      description: "Implementing comprehensive monitoring using Splunk, Grafana, InfluxDB, and cloud-native logging solutions.",
      date: "February 28, 2024",
      readTime: "10 min read",
      tags: ["Monitoring", "Observability", "DevOps"]
    },
    {
      id: "devops-mentorship",
      title: "DevOps Mentorship: Growing the Next Generation",
      description: "Effective strategies for mentoring junior DevOps engineers and building strong, collaborative teams.",
      date: "February 20, 2024",
      readTime: "8 min read",
      tags: ["Mentorship", "Leadership", "Team Growth"]
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
