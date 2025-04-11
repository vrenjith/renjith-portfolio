
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linkedinPosts } from "@/data/linkedinPosts";

const AllLinkedinPosts = () => {
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
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">My LinkedIn Activity</h1>
        <p className="text-lg text-gray-700">
          Stay connected with my latest professional updates and insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {linkedinPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-3xl mx-auto bg-glass rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div className="linkedin-embed-container" style={{ minHeight: "570px" }}>
              <iframe
                src={`${post.embedUrl}?collapsed=1`}
                height="570"
                width="100%"
                frameBorder={0}
                allowFullScreen={true}
                title={`LinkedIn Post - ${post.title}`}
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <a 
          href="https://www.linkedin.com/in/renjithv/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button size="lg" className="group">
            Connect with me on LinkedIn
            <Linkedin className="w-4 h-4 ml-2 group-hover:text-accent transition-colors" />
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default AllLinkedinPosts;
