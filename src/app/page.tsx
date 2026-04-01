"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, MapPin, Play } from "lucide-react";
import Navbar from "@/app/components/layout/navbar";

export default function Home() {
  const categories = [
    {
      title: "Medical Boats",
      desc: "Bringing world-class healthcare to the water.",
      img: "/media/pharmacy-lw.png",
      href: "/products/medical",
    },
    {
      title: "Business & Commerce",
      desc: "Premium floating storefronts and offices.",
      img: "/media/Foxtail Upper Deck.png",
      href: "/products/business",
    },
    {
      title: "Studio & HQ",
      desc: "Creative spaces for visionaries and creators.",
      img: "/media/Creator-studio.png",
      href: "/products/studio-hq",
    },
    {
      title: "Hotel & Retreats",
      desc: "Luxury waterfront accommodations.",
      img: "/media/newvion_clean_1.png",
      href: "/products/hotel",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-background text-text selection:bg-gold/30 selection:text-gold overflow-hidden">
        
        {/* CINEMATIC HERO */}
        <section className="w-full h-[100svh] relative flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <iframe
              src="https://player.vimeo.com/video/1177737915?background=1&autoplay=1&loop=1&byline=0&title=0"
              className="absolute inset-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay; fullscreen"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20 z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10" />
          </motion.div>

          <div className="relative z-20 text-center text-ivory px-4 mt-20 max-w-6xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-display leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
                Creating the <br />
                <span className="text-gradient-gold italic pr-4">Vision</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-stone mb-12"
            >
              Designing Boats Connecting Rural Communities
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm overflow-hidden rounded-full transition-all hover:scale-105 duration-500"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative flex items-center gap-2">
                  View The Boats <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-5 text-ivory hover:text-gold transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
              >
                <div className="w-10 h-10 rounded-full border border-ivory/30 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Play className="w-3 h-3 ml-0.5" />
                </div>
                Our Story
              </Link>
            </motion.div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="w-full py-32 px-6 lg:px-12 bg-background relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                The Rural <br/><span className="text-gold italic">Waterfront</span> Reimagined
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-8 max-w-xl">
                Newvion Boat Company pioneers a revolutionary approach to modular boat architecture. By deploying ultra-luxury, commercial-grade floating infrastructure, we unlock entirely new paradigms for healthcare, business, and residential life on the water.
              </p>
              <Link href="/investment/rural-oz-boat-fund-qof-qozb" className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all border-b border-gold/30 pb-1 hover:border-gold">
                Investment Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-video rounded-2xl overflow-hidden group shadow-2xl shadow-gold/10 border border-white/10"
            >
              <iframe 
                src="https://player.vimeo.com/video/1177737915?title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
              {/* Optional overlay gradient to tie it into the dark theme, but let the user click controls */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID: THE BOATS */}
        <section className="w-full py-32 px-4 md:px-8 bg-[#050e20]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Portfolio</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold">The Boats</h2>
              </div>
              <p className="text-stone max-w-md text-lg">Designed to Create Community and Healthcare on the Water</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
              {categories.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black block ${
                    i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-stone text-lg max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}