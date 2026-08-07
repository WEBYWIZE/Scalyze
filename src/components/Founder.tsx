import { motion } from "motion/react";
import { Sparkles, MessageSquareCode, TrendingUp, ShieldCheck, Mail, MapPin, Zap, Target, Award, ArrowUpRight } from "lucide-react";
import founderPhoto from "../assets/images/regenerated_image_1783151928014.png";
import coFounderPhoto from "../assets/images/regenerated_image_1786079862140.jpg";

interface FounderProps {
  onOpenChat: () => void;
}

export default function Founder({ onOpenChat }: FounderProps) {
  return (
    <section id="founder" className="py-24 bg-slate-50/60 dark:bg-slate-950/40 relative overflow-hidden border-t border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            Leadership & Strategy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Meet Our Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
          >
            The growth architects steering scientific media buying, revenue engineering, and enterprise brand scaling.
          </motion.p>
        </div>

        {/* Co-Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* Card 1: Mr. Ritesh Kumar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group flex flex-col"
          >
            <div className="relative bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-7 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl dark:hover:border-indigo-500/30 transition-all duration-300 flex flex-col flex-1 overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600" />

              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 p-1 ring-1 ring-slate-200 dark:ring-slate-700/80 shadow-md">
                    <img 
                      src={founderPhoto} 
                      alt="Mr. Ritesh Kumar" 
                      className="w-full h-full object-cover object-[25%_20%] rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full ring-2 ring-white dark:ring-slate-900 shadow-xs" title="Founder Active">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-indigo-100/80 dark:border-indigo-900/50">
                    Founder & Head of Growth
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Mr. Ritesh Kumar
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans mt-1">
                    Performance Marketing Specialist & Growth Architect
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
                Engineered Scalyze to bring scientific media buying, high-cadence creative testing, and server-side tracking telemetry to modern DTC and enterprise brands.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-sans block">Ad Spend Managed</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 block">$3M+</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-sans block">Average Scale</span>
                  <span className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5 block">4.8x ROAS</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <button
                  onClick={onOpenChat}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/10 active:scale-[0.98] cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Connect with Mr. Ritesh</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mr. Krishna Bhadauriya */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative group flex flex-col"
          >
            <div className="relative bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-7 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl dark:hover:border-violet-500/30 transition-all duration-300 flex flex-col flex-1 overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500" />

              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 p-1 ring-1 ring-slate-200 dark:ring-slate-700/80 shadow-md">
                    <img 
                      src={coFounderPhoto} 
                      alt="Mr. Krishna Bhadauriya" 
                      className="w-full h-full object-cover object-[75%_20%] rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-violet-500 text-white p-1 rounded-full ring-2 ring-white dark:ring-slate-900 shadow-xs" title="Co-Founder Active">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-violet-100/80 dark:border-violet-900/50">
                    Co-Founder & Growth Director
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Mr. Krishna Bhadauriya
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans mt-1">
                    Performance & Business Scaling Director
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
                Spearheads market penetration, client retention architecture, and high-impact revenue partnerships for multi-million dollar brand expansion trajectories.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-sans block">Brands Scaled</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 block">100+</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-sans block">Funnel Growth</span>
                  <span className="text-lg font-extrabold text-violet-600 dark:text-violet-400 mt-0.5 block">3.5x Avg</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <button
                  onClick={onOpenChat}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 dark:bg-violet-600 dark:hover:bg-violet-500 rounded-xl transition-all shadow-md shadow-violet-600/10 active:scale-[0.98] cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Connect with Mr. Krishna</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Corporate Headquarters & Mission Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-7 sm:p-10 shadow-lg relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Mission Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-md border border-indigo-100 dark:border-indigo-900/50">
                <Target className="w-3.5 h-3.5" /> Founders' Core Directive
              </div>

              <blockquote className="text-base sm:text-lg font-display font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-2 border-indigo-500 pl-4">
                “At Scalyze, we reject vanity metrics like impressions or clicks. We focus strictly on contribution margins, acquisition profitability, and enterprise ROI.”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Led by <strong className="text-slate-900 dark:text-white">Mr. Ritesh Kumar</strong> and <strong className="text-slate-900 dark:text-white">Mr. Krishna Bhadauriya</strong>, Scalyze combines server-side conversion telemetry, Meta agency infrastructure, and automated retention loops to generate predictable, compounding enterprise revenue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <div className="p-1 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span>Scientific Media Buying</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <div className="p-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <MessageSquareCode className="w-3.5 h-3.5" />
                  </div>
                  <span>Automated Retention Loops</span>
                </div>
              </div>
            </div>

            {/* Corporate Desk Info */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/80 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" /> Corporate Headquarters
              </h4>
              
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 min-w-16">Address:</span>
                  <span className="leading-snug">thakur baba temple gadiya gaon Prem Nagar Thana Nagra Jhansi 284003, UP, India</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 min-w-16">Email:</span>
                  <a href="mailto:hello@scalyze.in" className="text-indigo-600 dark:text-indigo-400 hover:underline">hello@scalyze.in</a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 min-w-16">Hotline:</span>
                  <a href="https://wa.me/919795770763" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-slate-900 dark:text-white hover:text-indigo-500">
                    +91 97957 70763
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenChat}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Book Strategic Growth Consultation</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}


