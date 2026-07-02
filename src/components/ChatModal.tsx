import React, { useState, useRef, useEffect, FormEvent } from "react";
import { X, Send, Calculator, MessageSquare, Sparkles, CheckCircle2, TrendingUp, AlertCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [activeTab, setActiveTab] = useState<"calculator" | "consultant">("calculator");
  
  // ROI Calculator States
  const [adSpend, setAdSpend] = useState<number>(100000); // 1 Lakh INR default
  const [industry, setIndustry] = useState<"d2c" | "fitness" | "saas">("d2c");
  const [currentRoas, setCurrentRoas] = useState<number>(1.5);
  const [isCalculated, setIsCalculated] = useState(true);

  // Consultant Chat States
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi there! I'm Scalyzer, your AI Performance Marketing Consultant. Ready to take your brand's scaling to the next level? Ask me any questions about Meta Ads, Google campaigns, CRO, or scheduling a free marketing audit!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Calculate projected growth outcomes
  const calculateOutcomes = () => {
    let multiplier = 2.2; // default lift multiplier
    let projectedRoas = 3.2;

    if (industry === "d2c") {
      multiplier = 2.8;
      projectedRoas = 3.5;
    } else if (industry === "fitness") {
      multiplier = 2.5;
      projectedRoas = 3.0;
    } else if (industry === "saas") {
      multiplier = 2.1;
      projectedRoas = 2.8;
    }

    const currentRevenue = adSpend * currentRoas;
    const projectedRevenue = adSpend * projectedRoas;
    const revenueGrowth = projectedRevenue - currentRevenue;
    const expectedCacReduction = "25% - 40%";

    return {
      projectedRoas,
      projectedRevenue: projectedRevenue.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      revenueGrowth: revenueGrowth.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      expectedCacReduction,
      multiplier,
    };
  };

  const outcomes = calculateOutcomes();

  // Smart responsive AI Consultant triggers
  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = {
      sender: "user",
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    const query = userInput.toLowerCase();
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "That's a great question! For detailed audits, we usually look closely at your creative click-through rates (CTR) and pixel tracking setups. Would you like to schedule a quick 15-minute audit call with our growth directors?";

      if (query.includes("meta") || query.includes("facebook") || query.includes("instagram")) {
        responseText = "Meta ads scale incredibly well when combined with a simplified Broad targeting campaign and dynamic product video creatives. At Scalyze, we restructure accounts around consolidated CBO structures to prevent audience overlap. Let's review your Meta account!";
      } else if (query.includes("google") || query.includes("search") || query.includes("pmax")) {
        responseText = "For Google Ads, we focus on high-intent search keywords coupled with precise Performance Max asset groups. We also optimize negative keywords aggressively to cut down wasteful ad spend. Would you like us to look at your Google Ads structure?";
      } else if (query.includes("cro") || query.includes("landing") || query.includes("conversion")) {
        responseText = "A great ad campaign is only as good as the landing page it drives traffic to. We specialize in designing custom, high-speed, mobile-first conversion funnels that boost average order value (AOV) by up to 35%.";
      } else if (query.includes("pricing") || query.includes("cost") || query.includes("charge")) {
        responseText = "We structure our retainer fees around your specific growth milestones rather than flat expensive overheads. This ensures we are fully aligned with your profitability. Let's schedule a free 15-min call to configure a proposal for your brand!";
      } else if (query.includes("audit") || query.includes("book") || query.includes("call") || query.includes("schedule")) {
        responseText = "Awesome! You can submit your audit request directly. Just let me know your name and contact details, and we will get you scheduled!";
      }

      setMessages(prev => [...prev, {
        sender: "bot",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsBooked(true);
      setMessages(prev => [...prev, {
        sender: "bot",
        text: `Thank you, ${bookingName}! 🎉 I have successfully scheduled your Free Performance Marketing Audit. One of our Senior Growth Strategists will review your domain and email you at ${bookingEmail} within 4 hours to align on our calendar. We are excited to scale your brand!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          
          {/* Dark Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950 backdrop-blur-xs"
          />

          {/* Chat Drawer Side Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg h-full bg-white dark:bg-slate-950 shadow-2xl z-10 flex flex-col border-l border-slate-100 dark:border-slate-850"
          >
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-450">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Scalyze Growth Center</h3>
                  <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    AI Consultant Active
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs (Calculator vs AI Consultant) */}
            <div className="grid grid-cols-2 border-b border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-950">
              <button
                onClick={() => setActiveTab("calculator")}
                className={`py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "calculator"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                <Calculator className="w-4 h-4" />
                ROI Forecaster
              </button>
              <button
                onClick={() => setActiveTab("consultant")}
                className={`py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "consultant"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                AI Consultant
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 dark:bg-slate-950/40">
              
              {/* Tab 1: ROI Forecaster */}
              {activeTab === "calculator" && (
                <div className="space-y-6">
                  
                  {/* Explanatory Note */}
                  <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed font-sans">
                    <strong>Predictive Scaling Engine:</strong> Specify your current monthly marketing figures below to forecast your optimized revenue potential when partnering with Scalyze's full-funnel media models.
                  </div>

                  {/* Input parameters */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-850/60 shadow-xs space-y-5">
                    
                    {/* Industry Selector */}
                    <div>
                      <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">Business Sector</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["d2c", "fitness", "saas"] as const).map((ind) => (
                          <button
                            key={ind}
                            onClick={() => setIndustry(ind)}
                            className={`py-2 px-3 text-xs font-semibold rounded-xl border capitalize transition-all ${
                              industry === ind
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                                : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                            }`}
                          >
                            {ind === "d2c" ? "D2C Brands" : ind === "fitness" ? "Fitness" : "B2B SaaS"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Monthly Ad Spend Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Monthly Ad Budget</label>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          {adSpend.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="25000"
                        max="1000000"
                        step="25000"
                        value={adSpend}
                        onChange={(e) => setAdSpend(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                      />
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 dark:text-slate-500 pt-1">
                        <span>₹25K</span>
                        <span>₹5L</span>
                        <span>₹10L+</span>
                      </div>
                    </div>

                    {/* Current ROAS Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Current ROAS (Return on Ad Spend)</label>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{currentRoas}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="3.0"
                        step="0.1"
                        value={currentRoas}
                        onChange={(e) => setCurrentRoas(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                      />
                      <div className="flex justify-between text-[10px] font-semibold text-slate-400 dark:text-slate-500 pt-1">
                        <span>0.5x</span>
                        <span>1.5x (Avg)</span>
                        <span>3.0x</span>
                      </div>
                    </div>

                  </div>

                  {/* Calculated Outcomes Panels */}
                  {isCalculated && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="font-display font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">Projected Growth Metrics</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* ROAS Projection */}
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-850/60 shadow-xs">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Projected ROAS</span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-2xl font-black text-slate-900 dark:text-white">{outcomes.projectedRoas}x</span>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/40 px-1 rounded">+{Math.round((outcomes.projectedRoas - currentRoas) * 100)}% Lift</span>
                          </div>
                        </div>

                        {/* CAC Reduction */}
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-850/60 shadow-xs">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">CAC reduction</span>
                          <span className="text-2xl font-black text-slate-900 dark:text-white">{outcomes.expectedCacReduction}</span>
                        </div>
                      </div>

                      {/* Total Monthly Revenue Potential */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 dark:from-indigo-950 to-slate-950 text-white shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl" />
                        <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Forecasted Monthly Revenue</span>
                        <h3 className="text-3xl font-black tracking-tight mb-2">{outcomes.projectedRevenue}</h3>
                        <p className="text-xs text-indigo-200/80 font-sans leading-relaxed">
                          That represents an estimated net increase of <strong>{outcomes.revenueGrowth}</strong> in monthly revenue purely through conversion funnel and audience optimization.
                        </p>
                      </div>

                      {/* Quick CTA to claim report */}
                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setActiveTab("consultant");
                            setMessages(prev => [...prev, {
                              sender: "user",
                              text: `I just used the ROI Calculator for ${industry === "d2c" ? "D2C" : industry === "fitness" ? "Fitness" : "SaaS"} with budget of ${adSpend}. I want to unlock this growth roadmap!`,
                              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            }, {
                              sender: "bot",
                              text: `Excellent choice! To unlock this customized ${outcomes.projectedRoas}x ROAS growth blueprint, let's secure your scheduling spot. Please fill in your name and email on the audit schedule form below!`,
                              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            }]);
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/10 active:scale-98"
                        >
                          Unlock This Growth Roadmap
                          <TrendingUp className="w-4 h-4" />
                        </button>
                      </div>

                    </motion.div>
                  )}

                </div>
              )}

              {/* Tab 2: AI Consultant Chatbot */}
              {activeTab === "consultant" && (
                <div className="flex flex-col h-[52vh] justify-between">
                  {/* WhatsApp Quick Link banner */}
                  <div className="mb-3 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <p className="font-sans text-emerald-800 dark:text-emerald-300 font-medium">
                        Prefer direct team contact?
                      </p>
                    </div>
                    <button
                      onClick={() => window.open("https://wa.me/918957210472?text=Hi%20Scalyze,%20I'm%20interested%20in%20your%20performance%20marketing%20services!", "_blank")}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-xs text-[10px] uppercase tracking-wider cursor-pointer flex items-center gap-1"
                    >
                      WhatsApp Us
                    </button>
                  </div>

                  {/* Messages Stream */}
                  <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.sender === "user"
                              ? "bg-indigo-600 text-white font-sans rounded-tr-none"
                              : "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850/80 text-slate-800 dark:text-slate-200 font-sans rounded-tl-none shadow-xs"
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-1 px-1">{msg.time}</span>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex flex-col items-start">
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850/80 rounded-2xl rounded-tl-none px-4 py-3 shadow-xs">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Booking form shown at bottom if booking is requested */}
                  {!isBooked && (
                    <form onSubmit={handleBookingSubmit} className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100/50 dark:border-slate-850/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>Instant 15-Min Performance Audit</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-200"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-200"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-slate-950 dark:bg-indigo-600 dark:hover:bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-all cursor-pointer"
                      >
                        Request Free Audit
                      </button>
                    </form>
                  )}

                  {/* Standard Text input form if not booked */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask me about Meta Ads, CBO, auditing..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1 px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-100 font-sans"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/10 transition-colors cursor-pointer"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom Footer Details inside drawer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-center flex-shrink-0">
              <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 font-sans">
                By interacting, you agree to scale with high-impact data solutions.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
