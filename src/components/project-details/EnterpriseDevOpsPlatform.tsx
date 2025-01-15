import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EnterpriseDevOpsPlatform = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-6">Enterprise DevOps Platform</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>
            A comprehensive DevOps platform integrating modern tools and practices to streamline development,
            deployment, and operations across the enterprise. This platform serves 500+ developers and handles
            thousands of deployments monthly.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          
          <h3 className="text-xl font-semibold mb-2">Infrastructure & Provisioning</h3>
          <ul>
            <li>Vagrant for local development environments</li>
            <li>Docker for containerization</li>
            <li>Packer for image building</li>
            <li>Terraform for infrastructure as code</li>
            <li>AWS & GCP for cloud infrastructure</li>
            <li>Bare-metal infrastructure for specific workloads</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">Service Discovery & Networking</h3>
          <ul>
            <li>Consul for service discovery and configuration</li>
            <li>Nomad for workload orchestration</li>
            <li>Nginx for load balancing and routing</li>
            <li>Flannel for container networking</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">Container Orchestration</h3>
          <ul>
            <li>Kubernetes for container orchestration</li>
            <li>Helm for package management</li>
            <li>Istio for service mesh capabilities</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">CI/CD Pipeline</h3>
          <ul>
            <li>GitHub for source control</li>
            <li>Jenkins for continuous integration</li>
            <li>Artifactory for artifact management</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">Monitoring & Observability</h3>
          <ul>
            <li>Splunk for log aggregation and analysis</li>
            <li>Google Cloud Logging for cloud-native logging</li>
            <li>InfluxDB for time-series metrics</li>
            <li>Grafana for metrics visualization</li>
            <li>Dynatrace for application performance monitoring</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Architecture Overview</h2>
          <p>
            The platform is built on a microservices architecture, leveraging Kubernetes for container orchestration
            and Istio for service mesh capabilities. Infrastructure is provisioned using Terraform across multiple
            cloud providers and bare-metal environments, with Consul providing service discovery and configuration
            management.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul>
            <li>Automated infrastructure provisioning across multiple cloud providers</li>
            <li>Containerized application deployment with Kubernetes</li>
            <li>Service mesh for enhanced security and observability</li>
            <li>Comprehensive monitoring and logging solution</li>
            <li>Automated CI/CD pipelines with Jenkins and GitHub</li>
            <li>Centralized artifact management with Artifactory</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <ul>
            <li>70% reduction in deployment time</li>
            <li>99.9% deployment success rate</li>
            <li>60% reduction in incident response time</li>
            <li>40% reduction in infrastructure costs</li>
            <li>Improved developer productivity and satisfaction</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EnterpriseDevOpsPlatform;