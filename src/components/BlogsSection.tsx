
import { motion } from "framer-motion";
import { Briefcase, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BlogsSection = () => {
    return (
        <section id="blogs" className="py-20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                        <Linkedin className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">LinkedIn Posts</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">My LinkedIn Feed</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay connected with my latest professional updates and insights
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-3xl mx-auto bg-glass rounded-lg p-6 shadow-lg"
                >
                    <div className="linkedin-embed-container" style={{ minHeight: "600px" }}>
                        {/* LinkedIn Embed */}
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7316300868432142336?collapsed=1"
                            height="570"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen=""
                            title="Embedded LinkedIn Post"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                    
                    <div className="text-center mt-8">
                        <a 
                            href="https://www.linkedin.com/in/renjithv/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="inline-flex items-center group">
                                <Linkedin className="w-5 h-5 mr-2" />
                                Connect with me on LinkedIn
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        Want to see more of my professional activity?
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/renjithv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button variant="outline" size="lg" className="group">
                            Visit My LinkedIn Profile
                            <Linkedin className="w-4 h-4 ml-2 group-hover:text-accent transition-colors" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
