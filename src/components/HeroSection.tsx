import { motion } from "framer-motion";
import { Send, BookOpen, LayoutGrid, User } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('blogs');
    blogsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      </div>
      
      {/* Background Name */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[20vh] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
        Renjith Pillai
      </div>

      {/* Profile Image */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/placeholder.svg" 
          alt="Renjith Pillai" 
          className="w-24 h-24 rounded-full border-2 border-accent/20"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center stagger-delay">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
          >
            <User className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">From System Programming to DevOps Architect</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Bridging Development and Operations
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 mb-8"
          >
            Two decades of evolution: From system programming to cloud-native architecture,
            specializing in DevOps transformation and enterprise cloud solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Get in touch
            </button>
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center"
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              View Projects
            </button>
            <button
              onClick={scrollToBlogs}
              className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View Blogs
            </button>
            <button
              onClick={scrollToExperience}
              className="px-6 py-3 rounded-lg glass hover:bg-glass/40 transition-colors flex items-center"
            >
              <User className="w-4 h-4 mr-2" />
              View Experience
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};