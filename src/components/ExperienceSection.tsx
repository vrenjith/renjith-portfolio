import { motion } from "framer-motion";
import { Briefcase, Building } from "lucide-react";

const experiences = [
    {
        title: "DevOps Platform Development and Architecture",
        company: "SAP Ariba",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/7/70/SAP_Ariba_logo.png",
        period: "2013 - Present",
        description: "Led the design and development of a next-generation DevOps platform at SAP Ariba, focusing on containerization, automation, and cloud-agnostic solutions. Specializing in HashiCorp products, Kubernetes, GitOps, and cloud-native solutions.",
        highlights: [
            "Institutional in envisioning, architecting, and implementing cloud-native DevOps solutions for microservices",
            "Cloud agnostic architecture design and implementation for multi-cloud environments",
            "Led FedRAMP authorization initiatives for government cloud services",
            "Established DevSecOps practices and security frameworks",
            "Defined and established enterprise-grade deployment standards for the microservices landscape within SAP Ariba",
            "Designed and developed a continuous delivery pipeline utilizing industry-standard technologies and solutions",
            "Ensured rapid and agile software delivery while addressing all enterprise requirements and compliance checks",
            "Built a scalable and production-ready platform that seamlessly operates across private, public, and hybrid cloud environments (AWS, GCP, and internal cloud)",
            "Defined and implemented DevOps best practices across the entire spectrum, including development environments, microservices architecture, IaaS/PaaS usage, automated tooling, continuous deployment pipelines, and team training",
            "Fostered collaboration and knowledge sharing across cross-functional teams while maintaining DevOps ownership",
            "Partnered with other companies to co-design and develop solutions that benefit both parties in the DevOps space"

        ]
    },
    {
        title: "Lead DevOps Architect",
        company: "Atos Syntel",
        companyLogo: "https://example.com/atos-logo.png", // Replace with actual logo URL
        period: "2018 - 2021",
        description: "Spearheaded DevOps transformation and cloud migration projects for major financial institutions.",
        highlights: [
            "Designed and implemented CI/CD pipelines for complex enterprise applications",
            "Led cloud migration strategies and implementation",
            "Established DevOps best practices and governance frameworks"
        ]
    },
    {
        title: "Senior Solutions Architect",
        company: "Tech Mahindra",
        companyLogo: "https://example.com/techmahindra-logo.png", // Replace with actual logo URL
        period: "2015 - 2018",
        description: "Architected and delivered cloud solutions for telecom and enterprise clients.",
        highlights: [
            "Developed cloud-native architectures for large-scale applications",
            "Implemented infrastructure automation and configuration management",
            "Led technical teams in delivering complex cloud solutions"
        ]
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 bg-background/50">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Experience</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
                        <p className="text-gray-700">
                            Over 15 years of experience in cloud architecture and DevOps transformation
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass rounded-xl p-6"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        {exp.companyLogo && (
                                            <img
                                                src={exp.companyLogo}
                                                alt={`${exp.company} logo`}
                                                className="w-12 h-12 mr-4 rounded-full object-cover"
                                            />
                                        )}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                            <div className="flex items-center text-accent">
                                                <Building className="w-4 h-4 mr-2" />
                                                <p>{exp.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-gray-700 mt-2 sm:mt-0">{exp.period}</span>
                                </div>
                                <p className="text-gray-800 mb-4">{exp.description}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};