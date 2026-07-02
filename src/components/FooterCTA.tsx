import { MessageSquare, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface FooterCTAProps {
  onOpenChat: () => void;
}

export default function FooterCTA({ onOpenChat }: FooterCTAProps) {
  return (
    <section className="py-12 bg-white dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core CTA Box with rich background gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-r from-violet-100 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/10 border border-violet-100/50 dark:border-slate-800/50 p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Background overlay circles for depth */}
          <div className="absolute top-1/2 -left-16 w-72 h-72 bg-white/55 dark:bg-slate-900/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/3 -right-24 w-80 h-80 bg-violet-200/40 dark:bg-indigo-950/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left copy column */}
          <div className="md:col-span-8 relative z-10 space-y-5">
            {/* Tiny accent badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Scale Up
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Ready to Scale Your Business?
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-sans">
              Let's build performance marketing strategies that drive real growth. Get in touch with our experts to schedule your free performance audit today.
            </p>

            {/* CTA Action button */}
            <div className="pt-4">
              <motion.button
                id="btn-chat-experts"
                onClick={onOpenChat}
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 10px 15px -3px rgba(99, 102, 241, 0.1), 0 4px 6px -2px rgba(99, 102, 241, 0.05)",
                    "0 0 16px 4px rgba(99, 102, 241, 0.25)",
                    "0 10px 15px -3px rgba(99, 102, 241, 0.1), 0 4px 6px -2px rgba(99, 102, 241, 0.05)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center gap-3.5 px-8 py-4 text-base font-bold text-white bg-slate-950 dark:bg-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded-full transition-all duration-300 shadow-xl border border-transparent dark:border-slate-800/60 active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Chat with Our Experts
              </motion.button>
            </div>
          </div>

          {/* Right rocket illustration column */}
          <div className="md:col-span-4 flex items-center justify-center relative">
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 select-none group"
            >
              {/* Animated 3D-styled Rocket SVG with vector exhaust clouds */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-indigo-600 transition-transform duration-500 group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Exhaust clouds background */}
                <ellipse cx="100" cy="155" rx="55" ry="22" fill="#C7D2FE" opacity="0.65" />
                <circle cx="65" cy="148" r="22" fill="#E0E7FF" opacity="0.85" />
                <circle cx="135" cy="148" r="22" fill="#E0E7FF" opacity="0.85" />
                <circle cx="100" cy="138" r="30" fill="#EEF2FF" />

                {/* Propulsion Fire and sparks */}
                <path d="M90 120 L100 160 L110 120 Z" fill="#F59E0B" />
                <path d="M95 120 L100 145 L105 120 Z" fill="#EF4444" />

                {/* Rocket Body */}
                <path
                  d="M100 30 C125 50 125 105 120 120 L80 120 C75 105 75 50 100 30 Z"
                  fill="url(#rocketBodyGrad)"
                />
                
                {/* Nose Cone */}
                <path
                  d="M100 30 C114 41 118 60 118 70 L82 70 C82 60 86 41 100 30 Z"
                  fill="#7C3AED"
                />

                {/* Wings (Fins) */}
                <path d="M80 95 L62 120 L80 120 Z" fill="#6366F1" />
                <path d="M120 95 L138 120 L120 120 Z" fill="#6366F1" />
                <path d="M100 100 L93 120 L107 120 Z" fill="#4F46E5" />

                {/* Porthole Window */}
                <circle cx="100" cy="85" r="12" fill="#E0F2FE" stroke="#4F46E5" strokeWidth="3" />
                <circle cx="104" cy="81" r="4" fill="white" opacity="0.8" />

                {/* Tiny glowing elements */}
                <circle cx="100" cy="45" r="2" fill="white" />
                <circle cx="100" cy="110" r="2.5" fill="#10B981" />

                <defs>
                  <linearGradient id="rocketBodyGrad" x1="80" y1="30" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EEF2FF" />
                    <stop offset="1" stopColor="#C7D2FE" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Ping notification near rocket */}
              <span className="absolute top-8 right-8 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-600"></span>
              </span>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
