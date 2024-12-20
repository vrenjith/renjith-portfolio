import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = {
    "gitops-delivery": {
      title: "GitOps Based Delivery",
      description: `Implemented enterprise-scale GitOps delivery pipeline using ArgoCD and Flux, achieving 99.9% deployment reliability and 70% faster recovery times.

Key Achievements:
• Designed and implemented a GitOps-based continuous delivery pipeline that handles over 1000 deployments per month
• Integrated ArgoCD and Flux for automated synchronization between Git repositories and Kubernetes clusters
• Implemented drift detection and automatic reconciliation mechanisms
• Created custom controllers for handling complex deployment scenarios
• Established monitoring and alerting for the GitOps pipeline using Prometheus and Grafana
• Developed custom dashboards for visualizing deployment status and history
• Implemented automated rollback mechanisms for failed deployments
• Created documentation and conducted training sessions for development teams

Technologies Used:
• ArgoCD and Flux for GitOps implementation
• Kubernetes for container orchestration
• Helm for package management
• Prometheus and Grafana for monitoring
• Git for version control
• Jenkins for CI pipeline
• Custom operators built using the Operator SDK`,
      tags: ["GitOps", "ArgoCD", "Kubernetes"]
    },
    "infrastructure-as-data": {
      title: "Infrastructure-as-Data using CrossPlane",
      description: `Pioneered Infrastructure-as-Data approach using CrossPlane, enabling self-service infrastructure provisioning across multiple cloud providers.

Key Achievements:
• Designed and implemented a CrossPlane-based infrastructure provisioning system
• Created custom resource definitions (CRDs) for various infrastructure components
• Implemented multi-cloud resource provisioning capabilities
• Developed self-service portal for infrastructure requests
• Established governance and compliance checks
• Implemented cost optimization strategies
• Created automated testing framework for infrastructure components

Technologies Used:
• CrossPlane for infrastructure orchestration
• Kubernetes for container management
• Multiple cloud providers (AWS, GCP, Azure)
• Terraform for additional IaC needs
• Custom controllers for specific use cases
• Monitoring and logging solutions`,
      tags: ["CrossPlane", "Multi-Cloud", "IaC"]
    },
    "kubernetes-security": {
      title: "Securing Kubernetes - Separation of Concerns",
      description: `Designed and implemented comprehensive Kubernetes security architecture focusing on workload isolation and least privilege access.

Key Achievements:
• Implemented network policies for workload isolation
• Set up RBAC with fine-grained access control
• Integrated with external identity providers
• Implemented pod security policies
• Set up secure secrets management
• Established container image scanning pipeline
• Created security monitoring and alerting system

Technologies Used:
• Kubernetes security primitives
• Network policies
• OPA Gatekeeper
• Vault for secrets management
• Container scanning tools
• Security monitoring solutions`,
      tags: ["Security", "Kubernetes", "Zero-Trust"]
    },
    "multi-target-delivery": {
      title: "Multi Target Delivery Model",
      description: `Developed a sophisticated multi-target delivery framework supporting simultaneous deployments across various environments and cloud providers.

Key Achievements:
• Created a unified deployment pipeline for multiple targets
• Implemented environment-specific configurations
• Developed rollback mechanisms
• Created deployment strategies for different scenarios
• Implemented canary deployments
• Set up monitoring and alerting
• Created automated testing framework

Technologies Used:
• Custom deployment framework
• Multiple CI/CD tools
• Configuration management
• Monitoring and logging
• Testing frameworks`,
      tags: ["CI/CD", "Multi-Cloud", "Automation"]
    },
    "fedramp-security": {
      title: "Securing for FedRAMP (US Gov)",
      description: `Led FedRAMP authorization initiative, implementing security controls and compliance measures for government cloud services.

Key Achievements:
• Implemented FedRAMP security controls
• Created compliance documentation
• Set up continuous monitoring
• Implemented audit logging
• Created security incident response plan
• Established vulnerability management program
• Conducted security training

Technologies Used:
• FedRAMP compliance tools
• Security monitoring solutions
• Audit logging systems
• Vulnerability scanners
• Documentation tools`,
      tags: ["FedRAMP", "Compliance", "Security"]
    },
    "roi-cloud-agnostic": {
      title: "RoI, Cloud Agnostism and Time-to-market",
      description: `Optimized cloud infrastructure costs while maintaining platform agnosticism, resulting in 40% cost reduction and improved time-to-market.

Key Achievements:
• Implemented cost optimization strategies
• Created cloud-agnostic architecture
• Improved deployment efficiency
• Reduced infrastructure costs
• Improved scalability
• Enhanced monitoring and reporting
• Created cost allocation framework

Technologies Used:
• Multi-cloud management tools
• Cost optimization solutions
• Monitoring and reporting tools
• Cloud-native technologies
• Infrastructure automation`,
      tags: ["ROI", "Cloud-Native", "Optimization"]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
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
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          {project.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;