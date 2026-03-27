"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight, Check } from "lucide-react";

export default function HotelProducts() {
  const models = [
    {
      name: "The AB&B Boutique",
      desc: "Turnkey luxury floating suites designed specifically for short-term premium rentals.",
      img: "/media/newvion_clean_3.png",
      gallery: [
        "/media/newvion_clean_4.png",
        "/media/newvion_clean_5.png",
      ],
    },
    {
      name: "The Floating Resort",
      desc: "Multi-unit hospitality infrastructure capable of scaling into a complete waterfront resort.",
      img: "/media/newvion_clean_1.png",
      gallery: [],
    },
  ];

  const features = [
    "Five-star premium interior finishes and custom furnishings",
    "Smart-home automation (climate, lighting, entertainment)",
    "Spa-grade bathrooms with premium fixtures",
    "Expansive outdoor teak decks and lounge areas",
    "Integrated autonomous utility management systems",
    "Automated guest check-in/out infrastructure",
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
              className="absolute inset-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
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
              className="max-w-3xl"
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Hospitality Boats</span>
              <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 tracking-tight leading-[1.1]">
                Hotel & <br/><span className="text-gradient-gold italic">AB&B</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C4C0B6] font-light leading-relaxed mb-12">
                Luxury floating accommodations designed to create unparalleled boutique hospitality experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/licensing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-[#0F172A] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-white transition-colors duration-300"
                >
                  Get Licensing Info
                </Link>
                <Link
                  href="/investment/rural-oz-boat-fund-qof-qozb"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  Investment Options
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
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">The New Standard in <span className="text-[#D4AF37] italic">Hospitality</span></h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
                The experiential travel market is shifting towards hyper-unique, immersive stays. Our turnkey floating AB&B boats provide investors and hoteliers with a high-yield asset that circumvents traditional coastal real estate costs while commanding premium nightly rates.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, i) => (
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
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-8 block">Proforma Data</span>
              
              <div className="space-y-8 relative z-10">
                <div className="border-b border-white/10 pb-6">
                  <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">Investment Range</span>
                  <span className="text-3xl font-display text-white">$500,000 - $750,000</span>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">Estimated Monthly Revenue</span>
                  <span className="text-3xl font-display text-white">$8,000 - $15,000</span>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">ROI Timeline</span>
                  <span className="text-3xl font-display text-white">18 - 24 Months</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">License Fee</span>
                  <span className="text-3xl font-display text-white">$25,000</span>
                  <p className="text-xs text-[#94A3B8] mt-2 italic">Includes brand package, hospitality operations playbook & staff training.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE BOATS GALLERY */}
        <section className="w-full py-32 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20">
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Available Concepts</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold">The Boats</h2>
            </div>

            <div className="space-y-32">
              {models.map((model, i) => (
                <div key={i} className="flex flex-col gap-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                      initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={`order-2 ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                      <h3 className="text-4xl font-display font-bold text-white mb-6">{model.name}</h3>
                      <p className="text-[#94A3B8] text-xl leading-relaxed">{model.desc}</p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className={`order-1 ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} aspect-[4/3] rounded-2xl overflow-hidden border border-white/5`}
                    >
                      <img src={model.img} alt={model.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    </motion.div>
                  </div>

                  {model.gallery.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {model.gallery.map((img, j) => (
                        <div key={j} className="aspect-[21/9] rounded-xl overflow-hidden border border-white/5">
                          <img src={img} alt={`${model.name} Gallery ${j}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}