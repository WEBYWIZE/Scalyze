import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Facebook, Instagram, Linkedin, MessageSquare, Mail, Phone, MapPin, Sparkles, X, Shield, FileText, RefreshCw, Info, PhoneCall } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "refund" | "about" | "contact" | null>(null);
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Why Scalyze?", href: "#why-scalyze" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faqs" },
  ];

  const servicesLinks = [
    { name: "Paid Ads Management", href: "#services" },
    { name: "WhatsApp Automation & API", href: "#services" },
    { name: "Meta Verified Agency Account", href: "#services" },
    { name: "Landing Page Optimization", href: "#services" },
    { name: "E-commerce Management", href: "#services" },
    { name: "Creative Strategy", href: "#services" },
  ];

  const socialHandles = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-50 hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-50 hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-indigo-50 hover:text-indigo-600" },
    { icon: MessageSquare, href: "#", color: "hover:bg-violet-50 hover:text-violet-600", label: "Discord" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-900/60 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer directory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Presentation (Col Span: 5) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center group">
              <Logo className="h-6 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>

            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed max-w-sm">
              Scalyze is a performance marketing agency focused on driving measurable growth for brands through data, creativity, and AI-powered strategies.
            </p>

            {/* Social profiles circles */}
            <div className="flex items-center gap-3">
              {socialHandles.map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 flex items-center justify-center transition-all duration-200 shadow-xs ${social.color}`}
                    aria-label={social.label || "Social Link"}
                  >
                    <IconComp className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column (Col Span: 3) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-5">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links Column (Col Span: 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom footer bar with legal credentials */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium font-sans text-center sm:text-left">
            © 2026 Scalyze. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 dark:text-slate-500">
            <button 
              onClick={() => setActiveModal("about")} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans cursor-pointer focus:outline-none"
            >
              About Us
            </button>
            <button 
              onClick={() => setActiveModal("contact")} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans cursor-pointer focus:outline-none"
            >
              Contact Us
            </button>
            <button 
              onClick={() => setActiveModal("privacy")} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal("terms")} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveModal("refund")} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans cursor-pointer focus:outline-none"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>

      {/* Elegant Policy & Terms Modal Overlay */}
      <AnimatePresence>
        {activeModal && (() => {
          const getModalHeader = () => {
            switch (activeModal) {
              case "privacy":
                return {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Privacy Policy",
                  style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                };
              case "terms":
                return {
                  icon: <FileText className="w-5 h-5" />,
                  title: "Terms of Service",
                  style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                };
              case "refund":
                return {
                  icon: <RefreshCw className="w-5 h-5" />,
                  title: "Refund Policy",
                  style: "bg-rose-500/10 text-rose-400 border-rose-500/20",
                };
              case "about":
                return {
                  icon: <Info className="w-5 h-5" />,
                  title: "About Us",
                  style: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                };
              case "contact":
                return {
                  icon: <PhoneCall className="w-5 h-5" />,
                  title: "Contact Us",
                  style: "bg-sky-500/10 text-sky-400 border-sky-500/20",
                };
            }
          };

          const headerData = getModalHeader();

          return (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col z-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-2xl border ${headerData?.style}`}>
                      {headerData?.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {headerData?.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Last updated: July 1, 2026
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm text-slate-300 font-sans leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
                  {activeModal === "privacy" && (
                    <>
                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">1. Information We Collect</h4>
                        <p>
                          At Scalyze, we value your privacy. We collect personal information you voluntarily provide to us when you fill out contact forms, initiate WhatsApp chats, or communicate with us. This information may include your name, email address, phone number, and business details.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">2. How We Use Your Information</h4>
                        <p>
                          The data collected is strictly utilized to:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-slate-400">
                          <li>Respond to your growth inquiries and plan marketing strategies.</li>
                          <li>Deliver customized media buying and CRO consultations.</li>
                          <li>Optimize campaign performance analytics and tracking.</li>
                          <li>Contact you directly with project updates, recommendations, and newsletters.</li>
                        </ul>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">3. Cookies & Tracking Technologies</h4>
                        <p>
                          We employ standard cookies and web analytics (such as Google Analytics) to assess website traffic, study visitor behavior patterns, and refine our user experience. You can manage cookies directly via your browser preferences.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">4. Data Security</h4>
                        <p>
                          We enforce strict technical and organizational safeguards to ensure your personal data remains confidential. We do not sell, distribute, or lease your private information to third parties unless required by law.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">5. Contacting Us</h4>
                        <p>
                          For any concerns regarding this privacy policy or to request data deletion, please contact our support desk directly via WhatsApp at <span className="text-white font-medium font-mono">+91 89572 10472</span>.
                        </p>
                      </section>
                    </>
                  )}

                  {activeModal === "terms" && (
                    <>
                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">1. Agreement to Terms</h4>
                        <p>
                          By accessing our website and engaging with our services, you agree to be bound by these Terms of Service. If you do not agree, you are prohibited from utilizing any of Scalyze's digital resources or performance marketing services.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">2. Services Scope</h4>
                        <p>
                          Scalyze offers digital consulting, performance marketing, paid advertisements management, Conversion Rate Optimization (CRO), and landing page developments. Exact project timelines, budgets, and deliverables will be formally established on a per-contract basis.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">3. Client Responsibilities</h4>
                        <p>
                          Clients must provide accurate, complete, and timely business access (ad accounts, creative assets, tracking pixels) necessary for us to discharge our media-buying and consulting duties successfully.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">4. Limitation of Liability</h4>
                        <p>
                          In no event shall Scalyze or its associates be liable for any indirect, incidental, or consequential financial losses (including reduced ROI, ad account suspensions, or platform bugs) arising from digital advertising operations on external platforms.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">5. Termination & Queries</h4>
                        <p>
                          Both parties retain the right to terminate active consulting agreements subject to standard notice periods specified in separate service contracts. For any clarifications, write to us or message our desk at <span className="text-white font-medium font-mono">+91 89572 10472</span>.
                        </p>
                      </section>
                    </>
                  )}

                  {activeModal === "refund" && (
                    <>
                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">1. Consulting & Setup Fees</h4>
                        <p>
                          Our initial strategic consultations, audits, and account onboarding setups involve significant manual labor and strategic expertise. These services require immediate resource commitment and are strictly non-refundable once initiated.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">2. Management Retainers</h4>
                        <p>
                          Monthly media buying and CRO management retainers can be cancelled with a 15-day notice before the next monthly billing cycle. No partial or full refunds are granted for active billing cycles already under progress.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">3. Ad Spend Payments</h4>
                        <p>
                          All advertisement budgets are paid directly by the client to the advertising platforms (e.g., Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads). Scalyze does not hold, manage, or process ad spend, and these funds are strictly subject to each respective advertising network's billing terms.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">4. Performance Disputes</h4>
                        <p>
                          While we execute campaigns using industry-best conversion optimization practices, digital marketing results fluctuate based on market dynamics. If you are dissatisfied with our campaign strategies, please reach out to our desk via WhatsApp so we can adjust strategies immediately.
                        </p>
                      </section>
                    </>
                  )}

                  {activeModal === "about" && (
                    <>
                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">Our Vision</h4>
                        <p>
                          Scalyze is a high-performance growth partner engineered for digital-first companies. We don't sell marketing packages; we design custom growth systems that scale client acquisition, drive down CPA, and maximize customer lifetime value.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">Scientific Growth Marketing</h4>
                        <p>
                          We view marketing as a science, not a gamble. By combining systematic Conversion Rate Optimization (CRO), highly persuasive landing page designs, precision media buying, and server-side conversion tracking telemetry, we ensure every marketing dollar translates to actual profit.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">Why Leaders Partner With Us</h4>
                        <p>
                          We focus exclusively on the metrics that impact your bank account — revenue, margin, and contribution ROI. Our agile growth team handles all aspects of creative iteration, audience mapping, and continuous A/B testing, freeing you up to focus on product and operations.
                        </p>
                      </section>

                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">Our Founder</h4>
                        <p>
                          Scalyze was founded by <strong>Mr. Ritesh Kumar</strong>, a performance marketing expert and growth strategist who believes in absolute performance transparency and scientific marketing scaling.
                        </p>
                      </section>
                    </>
                  )}

                  {activeModal === "contact" && (
                    <>
                      <section className="space-y-2">
                        <h4 className="font-bold text-white text-base">Get in Touch Directly</h4>
                        <p>
                          Have a query, need assistance, or want to explore tailored growth plans? Connect with our team across our verified support and strategic sales channels.
                        </p>
                      </section>

                      <section className="space-y-4 pt-2">
                        <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-slate-800 rounded-2xl">
                          <PhoneCall className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-slate-400 font-sans">Official WhatsApp & Phone</p>
                            <a 
                              href="https://wa.me/918957210472?text=Hi%20Scalyze,%20I'm%20interested%20in%20your%20performance%20marketing%20services!" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-sm font-bold text-white hover:text-indigo-400 transition-colors font-mono"
                            >
                              +91 89572 10472
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-slate-800 rounded-2xl">
                          <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-slate-400 font-sans">Official Email Support</p>
                            <a 
                              href="mailto:hello@scalyze.in" 
                              className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                            >
                              hello@scalyze.in
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-slate-800 rounded-2xl">
                          <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-slate-400 font-sans">Corporate Location</p>
                            <p className="text-sm font-bold text-white">
                              thakur baba temple gadiya gaon Prem Nagar Thana Nagra Jhansi 284003, India
                            </p>
                          </div>
                        </div>
                      </section>

                      <section className="space-y-2 pt-2">
                        <p className="text-xs text-slate-400 italic">
                          Our support desk generally replies within 1 hour during standard operational business hours (10 AM to 7 PM IST).
                        </p>
                      </section>
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex justify-end">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-full transition-all cursor-pointer"
                  >
                    I Understand
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </footer>
  );
}
