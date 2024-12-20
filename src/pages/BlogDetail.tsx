import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();
  
  const blogs = {
    "gitops-argocd": {
      title: "Implementing GitOps with ArgoCD",
      date: "March 15, 2024",
      readTime: "8 min read",
      content: `GitOps with ArgoCD has become the de facto standard for Kubernetes deployments. In this comprehensive guide, we'll explore how to implement GitOps practices effectively using ArgoCD.

The Journey from Traditional Deployments:
As a developer who started with C++ and C in both Linux and Windows environments, I've seen the evolution of deployment practices. The transition from manual deployments to automated pipelines has been remarkable, and GitOps represents the next step in this evolution.

Key Implementation Steps:
• Setting up ArgoCD in your cluster
• Configuring Git repositories as the source of truth
• Implementing deployment strategies
• Handling secrets and configurations
• Monitoring and maintaining the GitOps pipeline

Best Practices and Lessons Learned:
Through implementing GitOps in various enterprise environments, I've learned valuable lessons about maintaining consistency, handling drift, and ensuring security. This article shares these insights and provides practical guidance for teams adopting GitOps.`,
      tags: ["GitOps", "Kubernetes", "ArgoCD"]
    },
    "zero-trust-kubernetes": {
      title: "Zero-Trust Security in Kubernetes",
      date: "March 10, 2024",
      readTime: "10 min read",
      content: `Implementing a zero-trust security model in Kubernetes environments is crucial for modern cloud-native applications. This article explores how to achieve this using service mesh and policy enforcement.

From Development to Security:
My background in C++ development taught me the importance of security at the code level. However, in the cloud-native world, security extends far beyond the application code. This article bridges the gap between development and operational security.

Implementation Guide:
• Understanding zero-trust principles
• Setting up service mesh
• Implementing network policies
• Managing secrets securely
• Monitoring and auditing

Real-world Examples:
Drawing from my experience in securing large-scale Kubernetes deployments, I'll share practical examples and common pitfalls to avoid.`,
      tags: ["Security", "Kubernetes", "Service Mesh"]
    },
    "cloud-native-patterns": {
      title: "Cloud-Native Architecture Patterns",
      date: "March 5, 2024",
      readTime: "12 min read",
      content: `Essential patterns for building resilient and scalable cloud-native applications are crucial for modern software architecture. This comprehensive guide explores key patterns and their practical implementations.

Understanding Cloud-Native:
Cloud-native architecture represents a fundamental shift in how we design and deploy applications. This article explores the core principles and patterns that make applications truly cloud-native.

Key Patterns:
• Microservices architecture
• Event-driven design
• Circuit breakers and fallbacks
• Service discovery
• Distributed tracing

Implementation Strategies:
Based on real-world experience implementing these patterns at scale, we'll explore practical approaches and lessons learned.`,
      tags: ["Cloud-Native", "Architecture", "Patterns"]
    },
    "infrastructure-as-code": {
      title: "Infrastructure as Code Best Practices",
      date: "February 28, 2024",
      readTime: "9 min read",
      content: `Best practices for managing infrastructure as code using modern tools and techniques are essential for maintaining scalable and reliable systems.

Evolution of Infrastructure:
From manual provisioning to infrastructure as code, we've seen a dramatic shift in how we manage infrastructure. This article explores the best practices that have emerged from years of experience.

Key Practices:
• Version control for infrastructure
• Testing strategies
• Module organization
• State management
• Security considerations

Real-world Implementation:
Drawing from experience implementing IaC in various organizations, we'll explore practical examples and common challenges.`,
      tags: ["IaC", "DevOps", "Terraform"]
    },
    "kubernetes-security-hardening": {
      title: "Kubernetes Security Hardening",
      date: "February 20, 2024",
      readTime: "11 min read",
      content: `Advanced techniques for hardening Kubernetes clusters in production environments are crucial for maintaining secure deployments.

Security Foundation:
Understanding the security principles of Kubernetes is essential for implementing effective hardening measures. This article provides a comprehensive guide to securing your clusters.

Key Areas:
• API server security
• Node hardening
• Network policies
• Pod security
• Audit logging

Implementation Guide:
Based on experience securing production Kubernetes clusters, we'll explore practical hardening techniques and best practices.`,
      tags: ["Security", "Kubernetes", "DevSecOps"]
    },
    "multi-cloud-strategy": {
      title: "Multi-Cloud Strategy Implementation",
      date: "February 15, 2024",
      readTime: "10 min read",
      content: `Strategies and patterns for implementing effective multi-cloud architectures are becoming increasingly important in modern infrastructure design.

Multi-Cloud Journey:
Understanding the challenges and benefits of multi-cloud deployments is crucial for successful implementation. This article shares insights from real-world experience.

Key Considerations:
• Cloud provider selection
• Service abstraction
• Cost optimization
• Security standardization
• Operational consistency

Implementation Approach:
Drawing from experience implementing multi-cloud strategies, we'll explore practical approaches and lessons learned.`,
      tags: ["Multi-Cloud", "Architecture", "Strategy"]
    }
  };

  const blog = blogs[id as keyof typeof blogs];

  if (!blog) {
    return <div>Blog post not found</div>;
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
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </span>
          <span>{blog.date}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;