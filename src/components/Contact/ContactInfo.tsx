import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    MessageCircle,
    Navigation,
    ExternalLink
} from "lucide-react";

const ContactInfo = () => {
    const infoItems = [
        {
            icon: MapPin,
            title: "Our Location",
            content: "Shop No. 5, Sector 5, Kalamboli, Navi Mumbai, Maharashtra – 410218",
            action: "Get Directions",
            link: "https://maps.google.com/?q=Swastik+Family+Restaurant+Kalamboli",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: "+91 98765 43210",
            action: "Call Now",
            link: "tel:+919876543210",
            color: "bg-green-500/10 text-green-500"
        },
        {
            icon: Mail,
            title: "Email Address",
            content: "info@swastikrestaurant.com",
            action: "Send Email",
            link: "mailto:info@swastikrestaurant.com",
            color: "bg-amber-500/10 text-amber-500"
        },
        {
            icon: Clock,
            title: "Working Hours",
            content: "Mon - Sun: 11:00 AM - 11:00 PM",
            action: "Book a Table",
            link: "/contact",
            color: "bg-purple-500/10 text-purple-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
        >
            <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                    Visit <span className="text-gradient-gold">Swastik</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg">
                    We're here to provide you with the best dining experience.
                    Reach out to us through any of these channels.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-muted-heading text-sm mb-4 leading-relaxed line-clamp-2">
                            {item.content}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform duration-300">
                            <span>{item.action}</span>
                            <ExternalLink className="w-3 h-3" />
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* WhatsApp Connect */}
            <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl bg-charcoal text-white relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageCircle className="w-32 h-32 rotate-12" />
                </div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-4">Direct WhatsApp Support</h3>
                    <p className="text-warm-white-dim mb-6 max-w-sm">
                        Have a quick question or want to place a fast order? Chat with our team directly on WhatsApp for instant assistance.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            className="flex items-center gap-3 px-8 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase">Chat on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactInfo;
