import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyScalyze from "./components/WhyScalyze";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testimonial";
import FAQs from "./components/FAQs";
import FooterCTA from "./components/FooterCTA";
import Footer from "./components/Footer";
import ChatModal from "./components/ChatModal";
import BackToTop from "./components/BackToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
import LiveBackground from "./components/LiveBackground";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Read theme from localStorage or system preference, defaulting to dark
    const savedTheme = localStorage.getItem("scalyze-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === null) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("scalyze-theme", theme);
  }, [theme]);

  const handleOpenChat = () => {
    window.open("https://wa.me/918957210472?text=Hi%20Scalyze,%20I'm%20interested%20in%20your%20performance%20marketing%20services!", "_blank");
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
      
      {/* Dynamic Live Background constellation connection web */}
      <LiveBackground isDark={isDark} />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Header (Navbar) with Chat and Theme hooks */}
      <Header onOpenChat={handleOpenChat} isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Sections with Elegant Entry Transitions */}
      <main className="flex-1 overflow-x-hidden">
        {/* 2. Hero Section - Fades in immediately on mount */}
        <motion.div
          id="hero-section-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero onOpenChat={handleOpenChat} />
        </motion.div>

        {/* 3. Services Grid showcasing strategic growth solutions */}
        <motion.div
          id="services-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <Services />
        </motion.div>

        {/* 4. "Data. Strategy. Results." Checklists & Metrics section */}
        <motion.div
          id="why-scalyze-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <WhyScalyze />
        </motion.div>

        {/* 5. Real Results Case Studies with interactive modal overlays */}
        <motion.div
          id="case-studies-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <CaseStudies />
        </motion.div>

        {/* 6. Testimonial featuring Rohit Sharma, Founder of FitLife India */}
        <motion.div
          id="testimonial-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <Testimonial />
        </motion.div>

        {/* 7. Frequently Asked Questions interactive Accordion section */}
        <motion.div
          id="faqs-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <FAQs />
        </motion.div>

        {/* 8. Call To Action panel with launch rocket illustration */}
        <motion.div
          id="footer-cta-section-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <FooterCTA onOpenChat={handleOpenChat} />
        </motion.div>
      </main>

      {/* 9. Site directory map and legal footer */}
      <Footer />

      {/* 10. Intelligent interactive ROI Forecaster and Consultant Chat widget */}
      <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />

      {/* Floating back-to-top navigator button */}
      <BackToTop />

    </div>
  );
}
