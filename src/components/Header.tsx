import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquareCode, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  onOpenChat: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ onOpenChat, isDark, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Why Scalyze?", href: "#why-scalyze" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faqs" },
  ];

  // Framer Motion staggered variants for mobile nav drawer links
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 260, damping: 25 } 
    },
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center group focus:outline-none">
              <Logo className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-amber-400 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <Sun className="w-4.5 h-4.5 text-amber-500 animate-[spin_40s_linear_infinite]" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-indigo-600" />
                )}
              </button>

              {/* CTA Button */}
              <motion.button
                id="btn-chat-now"
                onClick={onOpenChat}
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)",
                    "0 0 12px 3px rgba(99, 102, 241, 0.25)",
                    "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)"
                  ]
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-slate-950 dark:bg-slate-100 dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white rounded-full transition-all duration-300 shadow-md shadow-slate-950/10 active:scale-95 cursor-pointer"
              >
                Chat Now
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-amber-400 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <Sun className="w-4.5 h-4.5 text-amber-500" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-indigo-600" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 focus:outline-none cursor-pointer"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-over Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Drawer sliding in gracefully from the right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white dark:bg-slate-950 border-l border-slate-100 dark:border-slate-900 shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-900">
                <div className="flex items-center">
                  <Logo className="h-6 w-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-full text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-amber-400 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-indigo-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-indigo-400 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 focus:outline-none cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col justify-between">
                {/* Navigation Links with Staggered Entrance Animations */}
                <motion.nav 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-6"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-indigo-600 dark:text-indigo-400" />
                      </a>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Bottom CTA Panel */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="pt-6 border-t border-slate-100 dark:border-slate-900 space-y-4"
                >
                  <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3.5 font-sans leading-relaxed">
                      Need immediate assistance? Connect with our growth team directly on WhatsApp.
                    </p>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onOpenChat();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white dark:text-slate-950 bg-slate-950 dark:bg-white hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white rounded-full transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                    >
                      <MessageSquareCode className="w-4.5 h-4.5" />
                      Chat on WhatsApp
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
