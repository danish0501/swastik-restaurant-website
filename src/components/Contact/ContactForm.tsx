import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Sparkles, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";


const contactSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters").max(100),
    email: z.string().trim().max(255).optional().or(z.literal("")).refine(val => !val || z.string().email().safeParse(val).success, "Please enter a valid email address"),
    phone: z.string().trim().min(10, "Enter a valid 10-digit phone number").max(15),
    message: z.string().trim().max(1000).optional(),
});

const ContactForm = () => {
    
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Revert back to form after 5 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setForm({ name: "", email: "", phone: "", message: "" });
        }, 5000);
    };

    const inputClasses = (fieldName: string) => `
        w-full pl-12 pr-4 py-4 bg-secondary/30 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground/60 
        transition-all duration-300 focus:outline-none focus:ring-0
        ${errors[fieldName]
            ? "border-destructive/40 focus:border-destructive bg-destructive/5"
            : "border-transparent focus:border-primary/50 hover:bg-secondary/50"}
    `;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
        >
            <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 relative overflow-hidden min-h-[600px] flex flex-col mt-32">
                {/* Premium Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold shadow-sm" />

                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="form-view"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Header Section */}
                            <div className="mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">Inquiry Form</span>
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-foreground mb-3 leading-tight">
                                    Send Us A <span className="text-gradient-gold">Message</span>
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name *</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className={inputClasses("name")}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-[11px] text-destructive font-bold mt-1 ml-4"
                                            >
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Mobile Number *</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="Your phone number"
                                            className={inputClasses("phone")}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.phone && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-[11px] text-destructive font-bold mt-1 ml-4"
                                            >
                                                {errors.phone}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email ID</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="your@email.com"
                                            className={inputClasses("email")}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-[11px] text-destructive font-bold mt-1 ml-4"
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <textarea
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="How can we help you today?"
                                            rows={4}
                                            className={`${inputClasses("message")} !py-5 resize-none`}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="group relative w-full bg-charcoal text-white px-8 py-5 rounded-[1.5rem] font-bold tracking-[0.2em] uppercase overflow-hidden shadow-2xl transition-all duration-300 disabled:opacity-70"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                            </>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-view"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
                        >
                            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center mb-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                >
                                    <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                                </motion.div>
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-foreground">Message Sent!</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto">
                                Thank you for reaching out. Our team has received your message and will respond within 24 hours.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer Info */}
                <div className="mt-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        Response time: &lt; 24 Hours
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-primary font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Online Now
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;
