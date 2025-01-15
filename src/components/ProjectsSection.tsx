import { motion } from "framer-motion";
import { Github, Cloud, Shield, Target, ChartBar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      id: "enterprise-devops-platform",
      title: "Enterprise DevOps Platform",
      description: "Led the architecture and implementation of a comprehensive DevOps platform integrating Jenkins, Kubernetes, Terraform, and advanced monitoring solutions, serving 500+ developers.",
      icon: <Cloud className="w-6 h-6 text-accent" />,
      tags: ["Platform Engineering", "Leadership", "Integration"]
    },
    {
      id: "team-transformation",
      title: "DevOps Team Transformation",
      description: "Mentored and grew a team of 25 DevOps engineers, implementing structured training programs and career development paths while delivering critical infrastructure projects.",
      icon: <Users className="w-6 h-6 text-accent" />,
      tags: ["Leadership", "Mentoring", "Team Building"]
    },
    {
      id: "cloud-native-migration",
      title: "Cloud-Native Migration Strategy",
      description: "Architected and led the migration of legacy systems to cloud-native infrastructure using Kubernetes, Istio, and modern observability tools.",
      icon: <Cloud className="w-6 h-6 text-accent" />,
      tags: ["Architecture", "Cloud-Native", "Strategy"]
    },
    {
      id: "automation-framework",
      title: "Enterprise Automation Framework",
      description: "Designed and implemented a comprehensive automation framework using Terraform, Ansible, and custom tools, reducing deployment time by 70%.",
      icon: <Target className="w-6 h-6 text-accent" />,
      tags: ["Automation", "IaC", "DevOps"]
    },
    {
      id: "security-compliance",
      title: "Security & Compliance Framework",
      description: "Established security best practices and compliance frameworks for cloud-native infrastructure, ensuring regulatory compliance while maintaining agility.",
      icon: <Shield className="w-6 h-6 text-accent" />,
      tags: ["Security", "Compliance", "Best Practices"]
    },
    {
      id: "observability-platform",
      title: "Enterprise Observability Platform",
      description: "Led the implementation of a comprehensive observability platform using Splunk, Grafana, and custom dashboards, improving incident response time by 60%.",
      icon: <ChartBar className="w-6 h-6 text-accent" />,
      tags: ["Monitoring", "Observability", "Platform"]
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
              <Link to={`/project/${project.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow bg-glass group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {project.icon}
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-gray-300">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
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
    </section>
  );
};