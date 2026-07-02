import { useState } from "react";
import { ArrowUpRight, TrendingUp, X, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES_DATA } from "../data";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  // Expanded content for case studies to display when a user clicks on a card
  const caseStudyDetails: Record<string, {
    before: string;
    after: string;
    strategy: string[];
    outcomes: string[];
  }> = {
    "case-1": {
      before: "1.2x average ROAS with inconsistent ad fatigue",
      after: "3.2x ROAS maintained over a continuous 6-month scale",
      strategy: [
        "Re-structured ad account using a consolidated, simplified CBO architecture.",
        "Launched high-volume UGC (user-generated content) video creative testing pipeline.",
        "Engineered premium custom landing pages optimized specifically for mobile checkouts.",
      ],
      outcomes: [
        "320% consistent increase in Return on Ad Spend (ROAS).",
        "Decreased average Customer Acquisition Cost (CAC) by 34%.",
        "Scaled monthly recurring e-commerce revenue by 4.5x.",
      ]
    },
    "case-2": {
      before: "High cost-per-lead (CPL) and low quality digital inquiries",
      after: "2.5x total qualified lead volume at a 40% lower Cost Per Lead",
      strategy: [
        "Implemented targeted local Search and Performance Max campaigns on Google Ads.",
        "Built hyper-targeted lookalike audiences on Meta targeting active fitness searchers.",
        "Designed an automated lead-nurturing SMS and email sequence to boost appointment rates.",
      ],
      outcomes: [
        "250% total net increase in qualified lead volume.",
        "42% decrease in cost-per-acquisition (CPL).",
        "Increased booked gym consultation conversion rates by 18%.",
      ]
    },
    "case-3": {
      before: "High trial signup dropoff and poor self-serve conversion ratios",
      after: "1.8x growth in self-serve trial signups with positive activation lift",
      strategy: [
        "Deployed multi-step landing page funnel clarifying SaaS product value in 5 seconds.",
        "Targeted warm decision-makers on LinkedIn and Meta with video product walk-throughs.",
        "Re-designed CTA flow and added prominent real-world testimonial social proof.",
      ],
      outcomes: [
        "180% growth in trial signups within 90 days.",
        "22% lift in user-activation rates during first 7 days.",
        "Reduced customer churn rate during onboarding by 15%.",
      ]
    },
  };

  const activeCaseDetail = selectedCase ? CASE_STUDIES_DATA.find(c => c.id === selectedCase) : null;
  const activeExtra = selectedCase ? caseStudyDetails[selectedCase] : null;

  return (
    <section id="clients" className="py-24 bg-slate-50/30 dark:bg-slate-950/20 border-b border-slate-100 dark:border-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest block mb-3">
            Case Studies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Real Results. Real Impact.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
            Here's how we've helped brands grow with performance marketing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCase(cs.id)}
              className="bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-100/80 dark:border-slate-800/60 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col h-full cursor-pointer group"
            >
              {/* Image Frame with hover Zoom */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={cs.image}
                  alt={cs.tag}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 inline-flex items-center text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/80">
                  {cs.tag}
                </span>

                {/* Micro CTA arrow */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Text Context */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Performance Result Metric */}
                  <div className="flex items-baseline gap-1.5 text-violet-600 dark:text-violet-400 mb-3">
                    <span className="font-display text-4xl font-extrabold tracking-tight">
                      {cs.result}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 mb-2">
                    {cs.title}
                  </h3>

                  {/* Subtitle Channels */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {cs.subtitle}
                  </p>
                </div>

                {/* Click-to-open indicator */}
                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/50 flex items-center gap-1 text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  <span>Explore Strategy</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Case Studies Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => alert("More beautiful Case Studies are being populated. Click on any card above to explore our exact full-funnel scaling strategy!")}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-805 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
          >
            View More Case Studies
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal Overlay */}
      <AnimatePresence>
        {selectedCase && activeCaseDetail && activeExtra && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-slate-950 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 dark:border-slate-800 flex flex-col max-h-[85vh]"
            >
              {/* Image banner inside Modal */}
              <div className="relative h-48 sm:h-56 bg-slate-100 dark:bg-slate-950 flex-shrink-0">
                <img
                  src={activeCaseDetail.image}
                  alt={activeCaseDetail.tag}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Tag & Title in banner */}
                <div className="absolute bottom-5 left-6 text-white pr-12">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-violet-600/90 text-white px-2.5 py-1 rounded-md mb-2">
                    {activeCaseDetail.tag}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                    {activeCaseDetail.result} {activeCaseDetail.title}
                  </h4>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Before & After comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-900/30">
                    <span className="text-[10px] font-black text-rose-500 dark:text-rose-400 uppercase tracking-wider block mb-1">Challenge / Before</span>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">{activeExtra.before}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/30">
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">Impact / After</span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{activeExtra.after}</p>
                  </div>
                </div>

                {/* Applied Strategy list */}
                <div>
                  <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-3 uppercase tracking-wider">The Scaling Strategy</h5>
                  <ul className="space-y-3">
                    {activeExtra.strategy.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        <span className="text-indigo-600 dark:text-indigo-400 font-extrabold select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics and Outcomes */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60">
                  <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-3 uppercase tracking-wider">Measurable Outcomes</h5>
                  <div className="space-y-2">
                    {activeExtra.outcomes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Action footer */}
              <div className="p-5 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-end flex-shrink-0">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
