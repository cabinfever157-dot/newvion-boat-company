"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-1.5 ${className}`}>
            <img 
              src="/media/logo.png" 
              alt="Newvion Logo" 
              className="h-12 w-auto object-contain transition-all duration-500 drop-shadow-[0_0_22px_rgba(255,255,255,0.75)] group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,1)]"
            />
            <span className="text-[0.55rem] uppercase tracking-[0.4em] text-[#F8F5F2] group-hover:text-[#D4AF37] transition-colors duration-500 font-medium text-center pl-1">
              Boat Company
            </span>
        </div>
    );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Boats", href: "/products" },
    { name: "Investment", href: "/investment/rural-oz-boat-fund-qof-qozb" },
    { name: "Licensing", href: "/licensing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled ? "bg-[#F8F5F2]/10 backdrop-blur-2xl border-b border-white/20 shadow-sm py-4" : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center relative z-50">
            <Logo />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#F8F5F2] hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#D4AF37] text-[#0F172A] text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors duration-300"
            >
              Inquire
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F5F2]/20 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 px-6 border-b border-white/20"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display text-white hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}