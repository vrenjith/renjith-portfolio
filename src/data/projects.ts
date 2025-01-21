export type Project = {
    id: string;
    title: string;
    description: string;
    icon: string;
    tags: string[];
    content: string;
};

export const projects: Project[] = [
    {
        id: "enterprise-devops-platform",
        title: "Enterprise DevOps Platform",
        description: "A comprehensive DevOps platform integrating modern tools and practices to streamline development, deployment, and operations across the enterprise. This platform serves 500+ developers and handles thousands of deployments monthly.",
        icon: "Cloud",
        tags: ["Platform Engineering", "Leadership", "Integration"],
        content: `<h2>Overview</h2>
A comprehensive DevOps platform integrating modern tools and practices to streamline development, deployment, and operations across the enterprise. This platform serves 500+ developers and handles thousands of deployments monthly.

<h2>Technology Stack</h2>
<h3>Infrastructure & Provisioning</h3>
<ul>
    <li>Vagrant for local development environments</li>
    <li>Docker for containerization</li>
    <li>Packer for image building</li>
    <li>Terraform for infrastructure as code</li>
    <li>AWS & GCP for cloud infrastructure</li>
    <li>Bare-metal infrastructure for specific workloads</li>
</ul>
<h3>Service Discovery & Networking</h3>
<ul>
    <li>Consul for service discovery and configuration</li>
    <li>Nomad for workload orchestration</li>
    <li>Nginx for load balancing and routing</li>
    <li>Flannel for container networking</li>
</ul>
<h3>Container Orchestration<h3>
<ul>
    <li>Kubernetes/Nomad for container orchestration</li>
    <li>Helm for package management</li>
    <li>Istio for service mesh capabilities</li>
</ul>
<h3>CI/CD Pipeline</h3>
<ul>
    <li>GitHub for source control</li>
    <li>Jenkins for continuous integration</li>
    <li>Artifactory for artifact management</li>
</ul>
<h3>Monitoring & Observability</h3>
<ul>
    <li>Splunk for log aggregation and analysis</li>
    <li>Google Cloud Logging for cloud-native logging</li>
    <li>InfluxDB for time-series metrics</li>
    <li>Grafana for metrics visualization</li>
    <li>Dynatrace for application performance monitoring</li>
</ul>

<h2>Architecture Overview</h2>
The platform is built on a microservices architecture, leveraging HashiCorp Nomad and Kubernetes for container orchestration and Istio/Consul for service mesh capabilities. Infrastructure is provisioned using Terraform across multiple cloud providers and internal-cloud environments, with Consul providing service discovery and configuration management.

<h2>Key Features</h2>
<ul>
    <li>Automated infrastructure provisioning across multiple cloud providers</li>
    <li>Containerized application deployment with Kubernetes</li>
    <li>Service mesh for enhanced security and observability</li>
    <li>Comprehensive monitoring and logging solution</li>
    <li>Automated CI/CD pipelines with Jenkins and GitHub</li>
    <li>Centralized artifact management with Artifactory</li>
</ul>

<h2>Results & Impact</h2>
<ul>
    <li>70% reduction in deployment time</li>
    <li>99.9% deployment success rate</li>
    <li>60% reduction in incident response time</li>
    <li>40% reduction in infrastructure costs</li>
    <li>Improved developer productivity and satisfaction</li>
</ul>
`
    },
    {
        id: "team-transformation",
        title: "DevOps Team Transformation",
        description: "Mentored and grew a team of 25 DevOps engineers, implementing structured training programs and career development paths while delivering critical infrastructure projects.",
        icon: "Users",
        tags: ["Leadership", "Mentoring", "Team Building"],
        content: `Led FedRAMP authorization initiative, implementing security controls and compliance measures for government cloud services.

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
• Documentation tools`
    },
    {
        id: "cloud-native-migration",
        title: "Cloud-Native Migration Strategy",
        description: "Architected and led the migration of legacy systems to cloud-native infrastructure using Kubernetes, Istio, and modern observability tools.",
        icon: "Cloud",
        tags: ["Architecture", "Cloud-Native", "Strategy"],
        content: `Optimized cloud infrastructure costs while maintaining platform agnosticism, resulting in 40% cost reduction and improved time-to-market.

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
• Infrastructure automation`
    },
    {
        id: "automation-framework",
        title: "Enterprise Automation Framework",
        description: "Designed and implemented a comprehensive automation framework using Terraform, Ansible, and custom tools, reducing deployment time by 70%.",
        icon: "Target",
        tags: ["Automation", "IaC", "DevOps"],
        content: `Pioneered Infrastructure-as-Data approach using CrossPlane, enabling self-service infrastructure provisioning across multiple cloud providers.

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
• Monitoring and logging solutions`
    },
    {
        id: "security-compliance",
        title: "Security & Compliance Framework",
        description: "Established security best practices and compliance frameworks for cloud-native infrastructure, ensuring regulatory compliance while maintaining agility.",
        icon: "Shield",
        tags: ["Security", "Compliance", "Best Practices"],
        content: `Designed and implemented comprehensive Kubernetes security architecture focusing on workload isolation and least privilege access.

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
• Security monitoring solutions`
    },
    {
        id: "observability-platform",
        title: "Enterprise Observability Platform",
        description: "Led the implementation of a comprehensive observability platform using Splunk, Grafana, and custom dashboards, improving incident response time by 60%.",
        icon: "ChartBar",
        tags: ["Monitoring", "Observability", "Platform"],
        content: `Developed a sophisticated multi-target delivery framework supporting simultaneous deployments across various environments and cloud providers.

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
• Testing frameworks`
    }
];