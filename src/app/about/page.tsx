"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight } from "lucide-react";

export default function About() {
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
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Our Story</span>
              <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 tracking-tight leading-[1.1]">
                Creating The Vision <br/><span className="text-gradient-gold italic">Connecting Communities</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C4C0B6] font-light leading-relaxed mb-12">
                We are a concept and brand development company pioneering the future of commercial boat architecture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="w-full py-32 px-6 lg:px-12 bg-[#0A192F] relative border-y border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -left-8 -top-8 text-8xl text-white/5 font-display font-bold">01</div>
                <h2 className="text-4xl font-display font-bold mb-8 text-[#D4AF37] relative z-10">Our Mission</h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                  At Newvion Boat Co., our mission is to develop branded live-work and recreational boat concepts for the national and international marina market. We operate as a concept and brand development company—designing the experience, building the brand, and deploying a technology-driven marketing platform.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  Rather than acting as a traditional boat manufacturer or marina operator, we connect turnkey floating business concepts with marina operators, waterfront cities, Opportunity Zone investors, E-2 treaty investors, corporate sponsors, and individual owners across America.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-8 -top-8 text-8xl text-white/5 font-display font-bold">02</div>
                <h2 className="text-4xl font-display font-bold mb-8 text-[#D4AF37] relative z-10">Our Vision</h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                  Our vision is to become America's leading branded live-work boat concept company. We are dedicated to putting the freedom of waterfront entrepreneurship within reach of the next generation of business owners, career reinventors, international investors, and lifestyle entrepreneurs.
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  By providing a proven concept with built-in brand credibility and national market visibility, we empower individuals who want to build a sustainable and innovative business of their own on the water.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* KEY PLATFORM FEATURES */}
        <section className="w-full py-32 px-6 lg:px-12 relative overflow-hidden bg-[#020C1B]">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/media/Office-3-story.png')] bg-cover bg-center opacity-10 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B] via-[#020C1B]/90 to-transparent z-0" />
          
          <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Ecosystem</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white">A Complete <br/><span className="text-gradient-gold italic">Platform</span></h2>
              
              <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
                <p>
                  Our platform includes a diverse portfolio of turnkey floating businesses, ranging from $350,000 to $750,000. Each concept is licensed with a complete package that includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    <span>The branded boat infrastructure</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    <span>Exact equipment and outfitting specifications</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    <span>A comprehensive operational playbook</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    <span>Direct access to the Newvion national network</span>
                  </li>
                </ul>
                <p className="pt-6">
                  Supported by a strategic manufacturing partnership with East Coast Houseboats LLC and a highly targeted digital marketing platform, we provide a seamless, capital-efficient pathway to waterfront business ownership.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0F172A] font-bold tracking-widest uppercase text-xs rounded-full hover:bg-white transition-colors duration-300"
                >
                  Explore Our Concepts <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </>
  );
}