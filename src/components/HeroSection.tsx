import { motion } from "framer-motion";
import { Terminal, Server, Cloud } from "lucide-react";

export const HeroSection = () => {
  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('blogs');
    blogsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center stagger-delay">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
          >
            <Terminal className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">DevOps Architect</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Transforming Infrastructure Into Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 mb-8"
          >
            Specializing in cloud architecture, automation, and scalable infrastructure solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Get in touch
            </a>
            <button
              onClick={scrollToBlogs}
              className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors"
            >
              View Blogs
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};