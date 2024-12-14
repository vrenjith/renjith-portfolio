import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior DevOps Architect",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led cloud infrastructure transformation and implemented CI/CD pipelines",
  },
  {
    title: "Cloud Infrastructure Engineer",
    company: "Digital Innovations Co.",
    period: "2018 - 2020",
    description: "Managed multi-cloud environments and automated deployment processes",
  },
  {
    title: "Systems Engineer",
    company: "Global Systems Ltd.",
    period: "2016 - 2018",
    description: "Developed and maintained infrastructure automation solutions",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
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
            <p className="text-gray-600">
              A track record of successful infrastructure transformations and DevOps implementations
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
                  <span className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};