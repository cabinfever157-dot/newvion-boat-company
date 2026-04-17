"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight, Check } from "lucide-react";

export default function HotelProducts() {
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

        {/* THE BOATS */}
        <section className="w-full py-32 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 text-center">
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Boats</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold">Hotel & Wellness Retreats</h2>
              <p className="text-[#94A3B8] text-lg mt-4 max-w-2xl mx-auto">Luxury waterfront accommodations, spa treatments, and immersive wellness programming.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Hotel Boat",
                  desc: "Waterfront resort experience managed by Lum'ais. Spa, retreats, and corporate events.",
                  img: "/media/boutique_hotel_final.png",
                  tag: "Hospitality",
                  href: "/products/hotel",
                },
                {
                  name: "Spa Boat",
                  desc: "Luxury spa treatments on the water — massage, hydrotherapy, steam rooms, and relaxation lounges with waterfront views.",
                  img: "/media/spa_boat_interior.png",
                  tag: "Wellness",
                  href: "/products/hotel",
                },
                {
                  name: "Wellness Retreat Boat",
                  desc: "Immersive wellness programming — yoga, mindfulness, nutrition, and spa treatments on the water.",
                  img: "/media/Wellness_Retreat_Boat.png",
                  tag: "Wellness",
                  href: "/products/hotel",
                },
              ].map((boat, i) => (
                <motion.div
                  key={boat.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={boat.href} className="group block h-full">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black h-full transition-all duration-700 hover:border-[#D4AF37]/30 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={boat.img}
                          alt={boat.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/80 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D4AF37]/90 text-[#0F172A] backdrop-blur-sm">
                          {boat.tag}
                        </span>
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                            {boat.name}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-white/20 mt-1 transition-all duration-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-[#94A3B8] mt-3 text-sm leading-relaxed group-hover:text-[#C4C0B6] transition-colors">
                          {boat.desc}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/50 transition-all duration-700" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}