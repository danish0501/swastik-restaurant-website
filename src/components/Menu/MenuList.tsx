import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "./MenuData";

const MenuList = () => {
    const tabs = useMemo(() => Object.keys(menuData), []);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Our Exquisite <span className="text-primary italic">Menu</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"
                    />

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 py-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden ${activeTab === tab
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary shadow-lg shadow-primary/30"
                                        style={{ borderRadius: 12 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 max-w-6xl mx-auto"
                    >
                        {menuData[activeTab].map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="group cursor-default"
                            >
                                <div className="flex items-baseline gap-4 py-2 relative overflow-hidden">
                                    <div className="flex-1 relative">
                                        <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        {/* Underline effect on hover */}
                                        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary/20 group-hover:w-full transition-all duration-700" />
                                    </div>

                                    {/* Dotted Connector */}
                                    <div className="hidden md:block flex-1 border-b-2 border-dotted border-muted-foreground/20 mb-2 group-hover:border-primary/30 transition-colors duration-300" />

                                    <div className="shrink-0">
                                        <span className="font-heading font-bold text-xl md:text-2xl text-primary drop-shadow-sm">
                                            {typeof item.price === "number" ? `₹${item.price}` : item.price}
                                            {item.price === "APS" && (
                                                <span className="text-[10px] text-muted-foreground uppercase ml-1 align-middle">As Per Size</span>
                                            )}
                                        </span>
                                    </div>

                                    {/* Background glow on hover */}
                                    <div className="absolute inset-0 -mx-4 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-10 rounded-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MenuList;
