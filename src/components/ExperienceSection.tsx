import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Principal Cloud Architect",
    company: "Persistent Systems",
    period: "2021 - Present",
    description: "Leading cloud architecture and DevOps transformation initiatives for enterprise clients. Specializing in Kubernetes, GitOps, and cloud-native solutions.",
    highlights: [
      "Architected and implemented cloud-native solutions for Fortune 500 clients",
      "Led FedRAMP authorization initiatives for government cloud services",
      "Established DevSecOps practices and security frameworks"
    ]
  },
  {
    title: "Lead DevOps Architect",
    company: "Atos Syntel",
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
            <p className="text-gray-400">
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
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
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