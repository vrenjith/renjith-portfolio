
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const LinkedinLinkSection = () => {
    return (
        <section id="linkedin" className="py-20">
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
                        <span className="text-sm font-medium">LinkedIn Updates</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">My Professional Journey</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Check out my latest professional updates and insights on LinkedIn
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Link to="/linkedin" className="inline-block">
                        <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                            View My LinkedIn Posts
                            <Linkedin className="w-4 h-4 ml-2 group-hover:text-primary-foreground transition-colors" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
