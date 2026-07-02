import { useState, useEffect, useRef } from "react";
import { CheckCircle2, UserCheck, Heart, Zap, Sparkles, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";

interface AnimatedCountProps {
  target: number;
  suffix?: string;
}

function AnimatedCount({ target, suffix = "" }: AnimatedCountProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalDuration = 1000; // duration of animation in ms
    const steps = 30; // number of increments
    const incrementTime = totalDuration / steps;
    const stepValue = end / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(stepValue * currentStep));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-2xl font-black text-white tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function WhyScalyze() {
  const checklist = [
    {
      title: "Founder-Led Collaboration",
      desc: "Work directly with core growth experts, not junior account managers.",
    },
    {
      title: "No Long-Term Lock-ins",
      desc: "Flexible month-to-month arrangements built purely on trust.",
    },
  ];

  const boutiqueMetrics = [
    {
      id: "m1",
      target: 100,
      suffix: "%",
      label: "Founder Focus",
      desc: "Direct WhatsApp & Slack support",
      icon: UserCheck,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
    {
      id: "m2",
      target: 40,
      suffix: "%+",
      label: "Revenue Lift",
      desc: "For local & D2C brands",
      icon: TrendingUp,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      id: "m3",
      target: 94,
      suffix: "%",
      label: "Client Retention",
      desc: "Long-term relationships",
      icon: Heart,
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    },
    {
      id: "m4",
      target: 24,
      suffix: "-Hr",
      label: "Rapid Execution",
      desc: "Instant strategy adjustments",
      icon: Zap,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
  ];

  return (
    <section id="why-scalyze" className="py-14 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(99,102,241,0.04),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(16,185,129,0.03),transparent_40%)] pointer-events-none" />
      
      {/* Delicate horizontal separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-900" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct and Compact Messaging */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-2.5"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/15 text-[10px] font-bold text-indigo-300 uppercase tracking-wider w-fit">
                <Sparkles className="w-3 h-3" />
                Boutique Approach
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Direct Growth.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                  Zero Bureaucracy.
                </span>
              </h2>
              
              <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
                No bloated teams or agency fluff. We partner directly with small & medium businesses to drive transparent, high-converting results.
              </p>
            </motion.div>

            {/* Structured Compact Checklist */}
            <div className="space-y-3 pt-1">
              {checklist.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/20 border border-slate-900 hover:border-slate-800/60 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek Boutique Metrics (Ultra-Clean Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3.5">
              {boutiqueMetrics.map((metric, index) => {
                const IconComp = metric.icon;
                
                return (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="relative p-4 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center ${metric.color}`}>
                        <IconComp className="w-3 h-3" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                        {metric.label}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-baseline gap-1.5">
                        <AnimatedCount target={metric.target} suffix={metric.suffix} />
                      </div>
                      <p className="text-[10px] text-slate-400 leading-normal font-sans">
                        {metric.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
