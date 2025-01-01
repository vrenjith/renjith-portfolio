import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllProjects = () => {
  const projects = [
    {
      id: "gitops-delivery",
      title: "GitOps Based Delivery",
      description: "Implemented enterprise-scale GitOps delivery pipeline using ArgoCD and Flux.",
      tags: ["GitOps", "ArgoCD", "Kubernetes"]
    },
    {
      id: "infrastructure-as-data",
      title: "Infrastructure-as-Data using CrossPlane",
      description: "Pioneered Infrastructure-as-Data approach using CrossPlane, enabling self-service infrastructure provisioning across multiple cloud providers.",
      tags: ["CrossPlane", "Multi-Cloud", "IaC"]
    },
    {
      id: "kubernetes-security",
      title: "Securing Kubernetes - Separation of Concerns",
      description: "Designed and implemented comprehensive Kubernetes security architecture focusing on workload isolation and least privilege access.",
      tags: ["Security", "Kubernetes", "Zero-Trust"]
    },
    {
      id: "multi-target-delivery",
      title: "Multi Target Delivery Model",
      description: "Developed a sophisticated multi-target delivery framework supporting simultaneous deployments across various environments and cloud providers.",
      tags: ["CI/CD", "Multi-Cloud", "Automation"]
    },
    {
      id: "fedramp-security",
      title: "Securing for FedRAMP (US Gov)",
      description: "Led FedRAMP authorization initiative, implementing security controls and compliance measures for government cloud services.",
      tags: ["FedRAMP", "Compliance", "Security"]
    },
    {
      id: "roi-cloud-agnostic",
      title: "RoI, Cloud Agnostism and Time-to-market",
      description: "Optimized cloud infrastructure costs while maintaining platform agnosticism, resulting in 40% cost reduction and improved time-to-market.",
      tags: ["ROI", "Cloud-Native", "Optimization"]
    }
  ];

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
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">All Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 h-full hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjects;
