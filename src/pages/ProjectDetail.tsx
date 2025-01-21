import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
    const { id } = useParams();

    // Find the project by id
    const project = Object.values(projects).find(project => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

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
            >
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="prose prose-invert max-w-none">
                    {project.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
                        </p>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;