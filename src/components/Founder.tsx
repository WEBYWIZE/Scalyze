import { motion } from "motion/react";
import { Sparkles, MessageSquareCode, TrendingUp, ShieldCheck, Mail, MapPin } from "lucide-react";
import founderPhoto from "../assets/images/regenerated_image_1783151928014.png";

interface FounderProps {
  onOpenChat: () => void;
}

export default function Founder({ onOpenChat }: FounderProps) {
  return (
    <section id="founder" className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative overflow-hidden border-t border-b border-slate-100 dark:border-slate-900/60">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-1/2 -left-36 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Leadership & Vision
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Meet Our Founder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed"
          >
            The driving force behind our data-first growth strategies and systematic brand scaling structures.
          </motion.p>
        </div>

        {/* Founder Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized interactive avatar card (Col span: 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Holographic style background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 rounded-[32px] opacity-25 dark:opacity-40 blur-lg group-hover:opacity-40 dark:group-hover:opacity-60 transition duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-white dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800/80 p-8 rounded-[28px] shadow-2xl flex flex-col items-center text-center overflow-hidden">
                {/* Upper banner highlight */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 to-violet-600" />

                {/* Founder Image Frame */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-lg flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={founderPhoto} 
                    alt="Mr. Ritesh Kumar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Stylized overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent z-10" />

                  {/* Absolute Badge for Status */}
                  <div className="absolute bottom-3 right-3 bg-emerald-500 text-white p-1 rounded-full shadow-md z-20" title="Founder Active">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Founder Info */}
                <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Mr. Ritesh Kumar
                </h3>
                <p className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400 mt-1 uppercase tracking-wider">
                  Founder & Head of Growth
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium font-sans mt-1">
                  Performance Marketing Specialist
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-center p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-100/50 dark:border-slate-800/50">
                    <p className="text-xs text-slate-400 font-sans">Strategic Spend</p>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">$3M+</p>
                  </div>
                  <div className="text-center p-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-100/50 dark:border-slate-800/50">
                    <p className="text-xs text-slate-400 font-sans">ROI Scale</p>
                    <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">4.8x Avg</p>
                  </div>
                </div>

                {/* Direct Connect Action */}
                <button
                  onClick={onOpenChat}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-indigo-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-indigo-600 dark:hover:text-white rounded-full transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  Direct Connect with Ritesh
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder's Story & Mission (Col span: 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Big quote statement */}
            <div className="relative pl-6 border-l-4 border-indigo-500/80 dark:border-indigo-500/60">
              <span className="absolute -top-6 -left-3 text-7xl font-serif text-indigo-200/30 dark:text-indigo-500/10 pointer-events-none select-none">
                “
              </span>
              <p className="text-lg sm:text-xl font-display font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic relative z-10">
                At Scalyze, we don't buy into vanity metrics like impressions or clicks. We only look at what actually impacts your bottom line: margins, conversions, and contribution ROI.
              </p>
            </div>

            {/* Explanatory Bio paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              <p>
                As a performance marketing growth architect, <span className="font-semibold text-slate-900 dark:text-white">Mr. Ritesh Kumar</span> engineered Scalyze with a clear purpose: to bring scientific precision and absolute accountability to brand acquisition. 
              </p>
              <p>
                Ritesh leads our team of performance media buyers, automation engineers, and optimization specialists to create self-sustaining growth systems. By utilizing state-of-the-art server-side conversion tracking, advanced Meta partner accounts, and custom WhatsApp automation loops, we ensure that every single advertising rupee or dollar spent generates measurable enterprise value.
              </p>
            </div>

            {/* Bullet Highlights representing strategic focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Scientific Media Buying</h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mt-0.5">High-cadence creative testing and granular cohort mapping.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <MessageSquareCode className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp & API Automation</h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mt-0.5">Automating client retention and recovery to spike repeat buyers.</p>
                </div>
              </div>
            </div>

            {/* Address & Corporate details inline */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-sans">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>
                  <strong>Location:</strong> thakur baba temple gadiya gaon Prem Nagar Thana Nagra Jhansi 284003
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-sans">
                <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>
                  <strong>Email:</strong> hello@scalyze.in
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
