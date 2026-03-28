"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const boats = [
    {
      title: "Medical Boats",
      desc: "Floating healthcare solutions including dental, dermatology, pharmacy, and wellness clinics.",
      href: "/products/medical",
      img: "/media/Dermatology-boat.png"
    },
    {
      title: "Business & Commerce",
      desc: "Turnkey floating storefronts: Art studios, Coffee, Culinary schools, and Pilates centers.",
      href: "/products/business",
      img: "/media/Art Studio.png"
    },
    {
      title: "Studio & HQ",
      desc: "Creative hubs for media, content creation, and corporate headquarters on the water.",
      href: "/products/studio-hq",
      img: "/media/Creator-studio.png"
    },
    {
      title: "Hotel & Retreats",
      desc: "Luxury floating accommodations and premium boutique hotel experiences.",
      href: "/products/hotel",
      img: "/media/newvion_clean_3.png"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-text overflow-hidden selection:bg-gold/30 selection:text-gold pt-32">
        <section className="w-full px-6 lg:px-12 mb-20">
          <div className="max-w-[1400px] mx-auto text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Collection</span>
              <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 tracking-tight text-[#F8F5F2]">
                The <span className="text-gradient-gold italic pr-4">Boats</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C4C0B6] max-w-3xl mx-auto font-light">
                Uncompromising luxury engineered for ultimate utility. Explore our specialized boats.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full px-6 lg:px-12 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boats.map((item, i) => (
                <Link key={i} href={item.href} className="group block">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-[#020C1B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-4xl font-display font-bold text-[#F8F5F2] mb-4 group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#C4C0B6] text-lg mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {item.desc}
                        </p>
                        <span className="inline-flex items-center gap-2 text-[#D4AF37] font-medium uppercase tracking-widest text-xs">
                          Explore Category <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}