import { Target, ShoppingCart, Zap, Layout, BarChart3, Lightbulb, MessageSquare, ShieldCheck, LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";

// Helper to map icon names to Lucide Icon components
const getIcon = (name: string): LucideIcon => {
  switch (name) {
    case "Target":
      return Target;
    case "ShoppingCart":
      return ShoppingCart;
    case "Zap":
      return Zap;
    case "Layout":
      return Layout;
    case "BarChart3":
      return BarChart3;
    case "Lightbulb":
      return Lightbulb;
    case "MessageSquare":
      return MessageSquare;
    case "ShieldCheck":
      return ShieldCheck;
    default:
      return SparklesIcon;
  }
};

const SparklesIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-y border-slate-100 dark:border-slate-900/40">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest block mb-3">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5 leading-tight">
            Performance Marketing <br className="hidden sm:block" /> Solutions That Deliver
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
            From strategy to execution, we help brands scale with performance-driven marketing.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-100/60 dark:hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background active color accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r`} style={{
                  backgroundImage: `linear-gradient(to right, ${service.color}, #a78bfa)`
                }} />

                <div>
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.bgColor} dark:bg-slate-800/40 border ${service.borderColor} dark:border-slate-800/50`} style={{ color: service.color }}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle indicator arrow */}
                <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  <span>Learn more</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
