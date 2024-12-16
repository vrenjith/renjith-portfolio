import { motion } from "framer-motion";
import { Github, Globe, Server, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Implemented infrastructure as code using Terraform and AWS CloudFormation, resulting in 60% faster deployment times.",
      icon: <Cloud className="w-6 h-6 text-accent" />,
      tags: ["AWS", "Terraform", "CloudFormation"]
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Designed and implemented automated CI/CD pipelines using Jenkins and GitLab CI, reducing deployment errors by 80%.",
      icon: <Github className="w-6 h-6 text-accent" />,
      tags: ["Jenkins", "GitLab CI", "Docker"]
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Set up and managed production Kubernetes clusters, implementing auto-scaling and monitoring solutions.",
      icon: <Server className="w-6 h-6 text-accent" />,
      tags: ["Kubernetes", "Prometheus", "Grafana"]
    },
    {
      title: "Database Migration Automation",
      description: "Automated database migration processes, ensuring zero-downtime deployments for critical applications.",
      icon: <Database className="w-6 h-6 text-accent" />,
      tags: ["PostgreSQL", "MongoDB", "Python"]
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
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