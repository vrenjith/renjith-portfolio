
import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
        <section id="contact" className="py-20 bg-background">
            <div className="section-container">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-6" 
                        data-netlify="true"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                className="w-full p-3 rounded-lg glass-light border border-border"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
                                className="w-full p-3 rounded-lg glass-light border border-border"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={5}
                                className="w-full p-3 rounded-lg glass-light border border-border"
                                placeholder="Your message"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
