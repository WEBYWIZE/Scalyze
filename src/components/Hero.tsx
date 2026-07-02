import { ArrowUpRight, TrendingUp, Sparkles, Target, Zap } from "lucide-react";
import { motion } from "motion/react";
import heroVisual from "../assets/images/regenerated_image_1782931735328.avif";

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  // SVG replicas for high-credibility brand partners
  const brandLogos = [
    {
      name: "Meta Partner",
      svg: (
        <div className="flex items-center gap-2 group/meta">
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-slate-400 dark:text-slate-500 group-hover/meta:text-blue-500 fill-current transition-all duration-250" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4 7.23c-1.28 0-2.48.56-3.23 1.48-.75-.92-1.95-1.48-3.23-1.48-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7c1.28 0 2.48-.56 3.23-1.48.75.92 1.95 1.48 3.23 1.48 2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7zm-6.46 7.42c-1.5 0-2.72-1.22-2.72-2.72s1.22-2.72 2.72-2.72 2.72 1.22 2.72 2.72-1.22 2.72-2.72 2.72zm6.46 0c-1.5 0-2.72-1.22-2.72-2.72s1.22-2.72 2.72-2.72 2.72 1.22 2.72 2.72-1.22 2.72-2.72 2.72z" />
          </svg>
          <span className="font-display font-bold text-[11px] tracking-wide uppercase text-slate-400 dark:text-slate-500 group-hover/meta:text-slate-800 dark:group-hover/meta:text-white transition-colors duration-250">
            Meta Partner
          </span>
        </div>
      ),
    },
    {
      name: "Google Ads Partner",
      svg: (
        <div className="flex items-center gap-2 group/google">
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-250 group-hover/google:scale-105" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1 2L5.8 11.3l2.8 2.8 9.3-9.3z" fill="#4285F4" className="opacity-70 group-hover/google:opacity-100 transition-opacity" />
            <path d="M5.8 11.3L1 16.1l2.8 2.8 4.8-4.8z" fill="#F4B400" className="opacity-70 group-hover/google:opacity-100 transition-opacity" />
            <path d="M1 16.1L12.5 22l9.3-9.3-6.7-6.7z" fill="#0F9D58" className="opacity-70 group-hover/google:opacity-100 transition-opacity" />
          </svg>
          <span className="font-display font-bold text-[11px] tracking-wide uppercase text-slate-400 dark:text-slate-500 group-hover/google:text-slate-800 dark:group-hover/google:text-white transition-colors duration-250">
            Google Partner
          </span>
        </div>
      ),
    },
    {
      name: "Shopify Partner",
      svg: (
        <div className="flex items-center gap-2 group/shopify">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover/shopify:text-emerald-500 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round transition-all duration-250" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="font-display font-bold text-[11px] tracking-wide uppercase text-slate-400 dark:text-slate-500 group-hover/shopify:text-slate-800 dark:group-hover/shopify:text-white transition-colors duration-250">
            Shopify Partner
          </span>
        </div>
      ),
    },
    {
      name: "WhatsApp Business API",
      svg: (
        <div className="flex items-center gap-2 group/wa">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover/wa:text-green-500 fill-current transition-all duration-250" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 4.992L2 22l5.161-1.354a9.924 9.924 0 0 0 4.851 1.258h.004c5.504 0 9.986-4.482 9.986-9.988C22 6.482 17.518 2 12.012 2zm5.772 13.918c-.244.686-1.427 1.334-1.966 1.418-.49.076-1.127.14-3.29-.714-2.766-1.092-4.542-3.9-4.68-4.084-.138-.184-1.12-1.492-1.12-2.846 0-1.354.71-2.016.962-2.284.252-.268.55-.336.734-.336.184 0 .368.002.528.01.166.008.39-.062.61.472.228.552.78 1.902.848 2.04.068.138.114.3.022.484-.092.184-.138.3-.276.462-.138.162-.292.36-.416.484-.138.138-.282.288-.12.568.162.28.72 1.186 1.544 1.918.156.138.29.214.444.298.156.084.348.092.51-.084.184-.2.78-.908.99-1.22.21-.312.422-.26.712-.152.29.108 1.844.87 2.162 1.02.318.15.528.224.604.356.076.132.076.764-.168 1.45z" />
          </svg>
          <span className="font-display font-bold text-[11px] tracking-wide uppercase text-slate-400 dark:text-slate-500 group-hover/wa:text-slate-800 dark:group-hover/wa:text-white transition-colors duration-250">
            WhatsApp API
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-radial from-violet-50/30 dark:from-violet-950/15 via-transparent to-transparent">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 flex flex-col items-center lg:items-start"
            >
              {/* Dynamic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/80 dark:border-indigo-900/30 text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Performance Marketing Agency
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Scale{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Smarter.
                </span>{" "}
                <br />
                Grow{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                  Faster.
                </span>
              </h1>

              {/* Subtext Paragraph */}
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans mx-auto lg:mx-0">
                Scalyze is a performance marketing agency that drives measurable results with data, creativity, and AI-powered strategies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
                <motion.button
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
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-950 dark:bg-slate-100 dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white rounded-full transition-all duration-300 shadow-xl active:scale-98 cursor-pointer"
                >
                  Get Started
                </motion.button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 rounded-full transition-all duration-200 shadow-sm active:scale-98"
                >
                  Our Services
                </a>
              </div>

              {/* Trust Logos section */}
              <div className="pt-8 border-t border-slate-150/80 dark:border-slate-800/40 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2 shrink-0 justify-center sm:justify-start">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      Official Partner
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    {brandLogos.map((brand, idx) => (
                      <div
                        key={idx}
                        className="flex items-center h-8 px-3.5 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-sm dark:hover:bg-slate-900/90 transition-all duration-300"
                      >
                        {brand.svg}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual Illustration */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              {/* Complex Background circular layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-400/10 to-indigo-400/10 rounded-3xl -rotate-3 scale-105 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-400/5 to-purple-400/5 rounded-3xl rotate-2 pointer-events-none" />

              {/* Main robot/dashboard container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-100/80 dark:border-slate-800/80 p-4 group">
                <img
                  src={heroVisual}
                  alt="AI Smart Robot Mascot sitting at laptop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-[1.02] filter contrast-[1.02]"
                />

                {/* Floating Mesh/Glass overlay panels */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />

                {/* Left Floating Target Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-12 left-8 glass dark:bg-slate-900/85 dark:border-slate-800/70 rounded-2xl p-3 flex items-center gap-3 shadow-lg border border-white/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">AI Optimizer</p>
                    <p className="text-xs font-extrabold text-slate-800 dark:text-slate-100">Targeting On</p>
                  </div>
                </motion.div>

                {/* Bottom Right Floating ROI glassmorphic panel */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 right-8 glass dark:bg-slate-900/85 dark:border-slate-800/70 rounded-2xl p-5 shadow-xl border border-white/80 w-[170px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">ROI</span>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-1.5 py-0.5 rounded-full">
                      <ArrowUpRight className="w-3 h-3" />
                      Active
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">320%</span>
                  </div>

                  {/* SVG Animated Sparkline Trend Line */}
                  <div className="h-8 w-full mt-2">
                    <svg viewBox="0 0 100 30" className="w-full h-full text-emerald-500 overflow-visible" fill="none">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        d="M0,25 Q15,10 30,18 T60,5 T90,2 T100,5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,25 Q15,10 30,18 T60,5 T90,2 T100,5 L100,30 L0,30 Z"
                        fill="url(#sparklineGrad)"
                        opacity="0.15"
                      />
                      <defs>
                        <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#10B981" />
                          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
                
                {/* Micro floating particles */}
                <span className="absolute top-1/2 right-12 w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                <span className="absolute bottom-1/3 left-10 w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
