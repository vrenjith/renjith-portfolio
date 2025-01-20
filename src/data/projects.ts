export const projects = {
    "enterprise-devops-platform": {
        id: "enterprise-devops-platform",
        title: "Enterprise DevOps Platform",
        description: "Led the architecture and implementation of a comprehensive DevOps platform integrating Jenkins, Kubernetes, Terraform, and advanced monitoring solutions, serving 500+ developers.",
        icon: "Cloud",
        tags: ["Platform Engineering", "Leadership", "Integration"],
        content: `Implemented enterprise-scale GitOps delivery pipeline using ArgoCD and Flux, achieving 99.9% deployment reliability and 70% faster recovery times.

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
• Custom operators built using the Operator SDK`
    },
    "team-transformation": {
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
    "cloud-native-migration": {
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
    "automation-framework": {
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
    "security-compliance": {
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
    "observability-platform": {
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
};