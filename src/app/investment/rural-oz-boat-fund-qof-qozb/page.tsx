"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight, Check } from "lucide-react";

export default function RuralOzBoatFund() {
  const benefits = [
    "Tax deferral on eligible capital gains",
    "Potential permanent tax reduction on original invested gains",
    "Tax-free appreciation on OZ investments held for 10+ years",
    "Direct support for waterfront economic development",
    "Diversified exposure to a portfolio of scalable floating business concepts",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020C1B] text-[#F8F5F2] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-hidden">
        
        {/* HERO */}
        <section className="relative w-full pt-48 pb-32 px-6 lg:px-12 flex items-center min-h-[70vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
             <iframe
              src="https://player.vimeo.com/video/1177737915?background=1&autoplay=1&loop=1&byline=0&title=0"
              className="absolute inset-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
              allow="autoplay; fullscreen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-[#020C1B]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Investment Opportunity</span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display mb-8 tracking-tight leading-[1]">
                Rural OZ <br/><span className="text-gradient-gold italic">Boat Fund</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C4C0B6] font-light leading-relaxed mb-12">
                A Qualified Opportunity Fund engineered for Qualified Opportunity Zone Businesses (QOZB).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/docs/__Newvion_RHTP_Florida_v6.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-[#0F172A] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-white transition-colors duration-300"
                >
                  View Investment Prospectus (PDF)
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  View The Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="w-full py-32 px-6 lg:px-12 bg-[#0A192F] relative border-y border-white/5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">Strategic <span className="text-[#D4AF37] italic">Capital</span></h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
                The Rural OZ Boat Fund is a bespoke Qualified Opportunity Fund designed exclusively to invest in Qualified Opportunity Zone Businesses (QOZB) focused on waterfront development and maritime entrepreneurship. This fund unlocks highly sought-after tax-advantaged investment opportunities by deploying commercial-grade floating infrastructure into designated Opportunity Zones across the United States.
              </p>
              
              <div className="space-y-4">
                {benefits.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#E5E0D8]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-[#020C1B] rounded-3xl p-10 md:p-14 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full" />
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-8 block">Fund Thesis</span>
              
              <div className="space-y-8 relative z-10">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-xl font-display text-white mb-4">Capital Efficiency</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">By avoiding traditional coastal real estate acquisition costs, the fund deploys capital directly into revenue-generating maritime assets.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-xl font-display text-white mb-4">Asset Mobility</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">Unlike land-bound real estate, our floating infrastructure can be strategically relocated based on seasonal demand or market shifts.</p>
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-display text-white mb-4">Economic Revitalization</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">We directly inject premium commercial operations into rural and underdeveloped waterfronts, satisfying the core intent of the Opportunity Zone program.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}