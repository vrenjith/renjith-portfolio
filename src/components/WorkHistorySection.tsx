import { motion } from "framer-motion";
import { History, Code, Terminal } from "lucide-react";

const workHistory = [
    {
        period: "1997-2003",
        role: "Software Engineer",
        company: "Various Organizations",
        description: "Started journey as a C/C++ developer on Linux and Windows platforms, focusing on system programming and kernel development.",
        highlights: [
            "Developed device drivers and kernel modules for Linux",
            "Created Windows system services and COM components",
            "Implemented real-time data processing systems",
            "Worked on embedded systems programming"
        ],
        tech: ["C", "C++", "Linux Kernel", "Windows SDK", "COM"]
    },
    {
        period: "2003-2010",
        role: "Technical Lead / Architect",
        company: "Product Companies",
        description: "Evolved from core development to architecture, beginning to explore deployment and operations.",
        highlights: [
            "Led development teams in creating enterprise software",
            "Designed scalable system architectures",
            "Started exploring automated build and deployment systems",
            "Introduced continuous integration practices"
        ],
        tech: ["C++", "Java", "Build Systems", "CI/CD", "Enterprise Architecture"]
    },
    {
        period: "2010-2015",
        role: "Solutions Architect",
        company: "Tech Mahindra",
        description: "Transition period where development expertise met operations, marking the beginning of DevOps journey.",
        highlights: [
            "Bridged development and operations teams",
            "Implemented first containerization solutions",
            "Established automated deployment pipelines",
            "Introduced infrastructure as code concepts"
        ],
        tech: ["Docker", "Jenkins", "Ansible", "Cloud Platforms"]
    },
    {
        period: "2015-2021",
        role: "DevOps Architect",
        company: "Various Organizations",
        description: "Full transformation into DevOps architecture, focusing on cloud-native solutions and automation.",
        highlights: [
            "Architected cloud-native applications",
            "Implemented GitOps workflows",
            "Established DevSecOps practices",
            "Led cloud transformation initiatives"
        ],
        tech: ["Kubernetes", "GitOps", "Cloud-Native", "DevSecOps"]
    },
    {
        period: "2021-Present",
        role: "Principal Cloud Architect",
        company: "Persistent Systems",
        description: "Leading enterprise-scale cloud and DevOps transformations, focusing on modern architectural patterns.",
        highlights: [
            "Leading FedRAMP authorization initiatives",
            "Architecting multi-cloud solutions",
            "Implementing zero-trust security frameworks",
            "Establishing enterprise DevOps practices"
        ],
        tech: ["Multi-Cloud", "FedRAMP", "Zero-Trust", "Enterprise Architecture"]
    }
];

export const WorkHistorySection = () => {
    return (
        <section id="work-history" className="py-24 bg-background/50">
            <div className="section-container">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                            <History className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Career Evolution</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">From Code to Cloud</h2>
                        <p className="text-gray-700">
                            A journey from system programming to cloud architecture, spanning over two decades
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {workHistory.map((work, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass rounded-xl p-8"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            {index <= 1 ? (
                                                <Code className="w-5 h-5 text-accent" />
                                            ) : (
                                                <Terminal className="w-5 h-5 text-accent" />
                                            )}
                                            <h3 className="text-2xl font-semibold">{work.role}</h3>
                                        </div>
                                        <p className="text-accent">{work.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-700 mt-2 lg:mt-0">{work.period}</span>
                                </div>
                                <p className="text-gray-700 mb-6">{work.description}</p>
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Key Achievements:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {work.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {work.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};