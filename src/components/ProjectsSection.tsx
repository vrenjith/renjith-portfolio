import { motion } from "framer-motion";
import { Github, Globe, Server, Database, Cloud, Shield, Target, ChartBar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "GitOps Based Delivery",
      description: "Implemented enterprise-scale GitOps delivery pipeline using ArgoCD and Flux, achieving 99.9% deployment reliability and 70% faster recovery times.",
      icon: <Github className="w-6 h-6 text-accent" />,
      tags: ["GitOps", "ArgoCD", "Kubernetes"]
    },
    {
      title: "Infrastructure-as-Data using CrossPlane",
      description: "Pioneered Infrastructure-as-Data approach using CrossPlane, enabling self-service infrastructure provisioning across multiple cloud providers.",
      icon: <Cloud className="w-6 h-6 text-accent" />,
      tags: ["CrossPlane", "Multi-Cloud", "IaC"]
    },
    {
      title: "Securing Kubernetes - Separation of Concerns",
      description: "Designed and implemented comprehensive Kubernetes security architecture focusing on workload isolation and least privilege access.",
      icon: <Shield className="w-6 h-6 text-accent" />,
      tags: ["Security", "Kubernetes", "Zero-Trust"]
    },
    {
      title: "Multi Target Delivery Model",
      description: "Developed a sophisticated multi-target delivery framework supporting simultaneous deployments across various environments and cloud providers.",
      icon: <Target className="w-6 h-6 text-accent" />,
      tags: ["CI/CD", "Multi-Cloud", "Automation"]
    },
    {
      title: "Securing for FedRAMP (US Gov)",
      description: "Led FedRAMP authorization initiative, implementing security controls and compliance measures for government cloud services.",
      icon: <Shield className="w-6 h-6 text-accent" />,
      tags: ["FedRAMP", "Compliance", "Security"]
    },
    {
      title: "RoI, Cloud Agnostism and Time-to-market",
      description: "Optimized cloud infrastructure costs while maintaining platform agnosticism, resulting in 40% cost reduction and improved time-to-market.",
      icon: <ChartBar className="w-6 h-6 text-accent" />,
      tags: ["ROI", "Cloud-Native", "Optimization"]
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
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in DevOps architecture through real-world implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-glass">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 text-gray-300">
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