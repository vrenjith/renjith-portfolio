
import { useState } from "react";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const mailtoLink = `mailto:v.renjith@gmail.com?subject=Contact from ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
            window.location.href = mailtoLink;
            reset();
            toast.success("Email client opened! Please send the email to complete.");
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
            
            <div className="section-container relative z-10">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            className="inline-block mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                                <Mail className="w-4 h-4 mr-2 inline" />
                                Let's Connect
                            </span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or want to discuss DevOps strategies? Let's talk!
                        </p>
                    </motion.div>
                    
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-6 glass rounded-2xl p-8" 
                        data-netlify="true"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                className="w-full p-3 rounded-lg glass-light border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                type="email"
                                className="w-full p-3 rounded-lg glass-light border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={5}
                                className="w-full p-3 rounded-lg glass-light border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                placeholder="Your message"
                            />
                            {errors.message && (
                                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            size="lg"
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/25 group"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.form>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex justify-center gap-4"
                    >
                        <a
                            href="https://www.linkedin.com/in/renjithvpillai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all border border-border/50 group"
                        >
                            <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="https://github.com/vrenjith"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all border border-border/50 group"
                        >
                            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
