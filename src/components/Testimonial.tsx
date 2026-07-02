import { useState, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  niche: string;
}

const INDIAN_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Their WhatsApp Automation and Meta Ads strategy turned our boutique tea brand into a household name. Scaled to over 15,000 monthly orders with absolute mathematical precision.",
    author: "Rohan Mehta",
    role: "Founder",
    company: "The Chai Collective",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    niche: "Beverages & D2C",
  },
  {
    id: "t2",
    quote: "Finding an agency that treats your budget like their own is extremely rare. Working directly with Scalyze's core team helped us achieve an exceptional 4.2x ROAS in just 60 days!",
    author: "Priya Nair",
    role: "Co-Founder",
    company: "Bespoke Blooms",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    niche: "Lifestyle & Retail",
  },
  {
    id: "t3",
    quote: "Our customer acquisition cost (CAC) dropped by a massive 38% after implementing Scalyze's custom landing page optimization and premium Meta agency accounts.",
    author: "Amit Patel",
    role: "CEO",
    company: "Fintech Edge India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    niche: "Fintech & SaaS",
  },
  {
    id: "t4",
    quote: "The end-to-end Shopify management and conversion optimization transformed our storefront. Our active site conversion rate increased from 1.2% to a steady 3.4% in weeks.",
    author: "Anjali Rao",
    role: "Creative Director",
    company: "Vanya Handcrafts",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    niche: "E-commerce & Art",
  },
  {
    id: "t5",
    quote: "Their Meta Verified Agency Account setup saved our campaigns during peak festive season. No spending caps, zero downtime, and instant professional support.",
    author: "Kabir Singh",
    role: "Growth Lead",
    company: "Drip Apparel",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    niche: "Fashion & Apparel",
  },
  {
    id: "t6",
    quote: "Transparent, founder-led, and incredibly responsive. They implemented strategy changes within hours and delivered a 45% increase in verified patient bookings.",
    author: "Dr. Sunita Sharma",
    role: "Founder",
    company: "AyuCare Wellness",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    niche: "Healthcare & Wellness",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % INDIAN_TESTIMONIALS.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + INDIAN_TESTIMONIALS.length) % INDIAN_TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        slideNext();
      }, 5000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeIndex]);

  const active = INDIAN_TESTIMONIALS[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Delicate background grids & glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Client Success
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
            Loved by Fast-Growing Indian Brands
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            See how small and medium businesses scale profitably with our direct, founder-led growth systems.
          </p>
        </div>

        {/* Carousel Block */}
        <div 
          className="relative rounded-3xl bg-slate-900/40 border border-slate-900 p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden min-h-[380px] sm:min-h-[320px] flex flex-col justify-between"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Subtle animated pattern inside slide card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-indigo-500/[0.02] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/[0.01] blur-3xl" />

          {/* Slide Content using AnimatePresence */}
          <div className="relative flex-grow flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center w-full"
              >
                {/* Left Text Block */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Quote className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/5 px-2 py-0.5 rounded-md border border-indigo-500/10">
                      {active.niche}
                    </span>
                  </div>

                  <blockquote className="text-sm sm:text-base md:text-lg font-medium text-slate-200 leading-relaxed font-sans italic">
                    "{active.quote}"
                  </blockquote>

                  <div className="pt-2">
                    <h4 className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                      {active.author}
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-normal text-emerald-400 tracking-wide uppercase">Verified Partner</span>
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {active.role}, <span className="text-indigo-300 font-semibold">{active.company}</span>
                    </p>
                  </div>
                </div>

                {/* Right Image Block */}
                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950">
                    <img
                      src={active.avatar}
                      alt={active.author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter saturate-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interaction & Control Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-900 z-20">
            {/* Pagination dots & micro-indicators */}
            <div className="flex items-center gap-2">
              {INDIAN_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="group relative py-2 px-1 focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-indigo-500" : "w-1.5 bg-slate-800 group-hover:bg-slate-700"}`} />
                </button>
              ))}
            </div>

            {/* Directional Arrows & Play State Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              
              <div className="h-4 w-px bg-slate-800" />

              <button
                onClick={slidePrev}
                className="w-7 h-7 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={slideNext}
                className="w-7 h-7 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
