"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/navbar";
import { ArrowRight, Check } from "lucide-react";

export default function BusinessProducts() {
  const models = [
    {
      name: "Culinary Studio",
      desc: "A floating gastronomic experience. Perfect for chef demonstrations, cooking classes, and private waterfront dining.",
      img: "/media/Culinary Studios.png",
      gallery: [
        "/media/Chef-class-with-camers.png",
        "/media/Chef-giving-class.png",
        "/media/Rooftop-cooking.png",
        "/media/Culinary-studio-roof.png",
        "/media/Chef-class-with-people.png",
        "/media/Class-participation.png",
        "/media/Culinary_class_taking_place_i.png"
      ],
    },
    {
      name: "Coffee & Cafe",
      desc: "Turnkey waterfront cafe concepts featuring premium espresso bars and rooftop seating.",
      img: "/media/Fox tail image.png",
      gallery: [
        "/media/Foxtail Rear.png",
        "/media/Foxtail Side.png",
        "/media/Foxtail Upper Deck.png",
      ],
    },
    {
      name: "Art Studio",
      desc: "Immersive creative spaces designed for workshops, galleries, and private artist retreats.",
      img: "/media/Art Studio.png",
      gallery: [
        "/media/Art Rooftop 1.png",
        "/media/Art studio side.png",
        "/media/Interior art class.png",
        "/media/art shots.png",
        "/media/Art studio entrance.png",
        "/media/Art Stufio 3d.png"
      ],
    },
    {
      name: "Pilates & Wellness",
      desc: "Serene, light-filled floating studios dedicated to yoga, pilates, and holistic health.",
      img: "/media/Pilates-aerial-view.png",
      gallery: [
        "/media/Pilates-2-one-floor.png",
        "/media/Pilates-entrance.png",
        "/media/Newvion-pilates-1.jpg"
      ],
    },
    {
      name: "Personal Training",
      desc: "Private floating gyms equipped for elite one-on-one coaching.",
      img: "/media/Live Work Personal Training .png",
      gallery: [
        "/media/Personal Training.png",
        "/media/Training studio.png",
        "/media/Wellness Personal Training Studio.png"
      ],
    },
    {
      name: "Music Studio",
      desc: "Acoustically treated floating recording and rehearsal spaces.",
      img: "/media/Music Studio.png",
      gallery: ["/media/Music.png"],
    },
     {
       name: "Office Space",
       desc: "Multi-story premium floating co-working and private executive suites.",
       img: "/media/Office-3-story.png",
       gallery: [],
     },
     {
       name: "Spa & Recovery",
       desc: "A floating wellness retreat offering massage, IV therapy, and rooftop sauna/cold plunge experiences.",
       img: "/media/spa-recovery.png",
       gallery: [],
     },
     {
       name: "Yoga & Mobility",
       desc: "A serene floating studio dedicated to yoga, mobility training, and holistic wellness.",
       img: "/media/yoga-mobility.png",
       gallery: [],
     },
     {
       name: "Wine & Tasting",
       desc: "A premium floating venue for wine, bourbon, and craft beverage tasting experiences.",
       img: "/media/wine-tasting.png",
       gallery: [],
     },
     {
       name: "Chef's Table",
       desc: "An exclusive floating dining experience with private chef services.",
       img: "/media/chefs-table.png",
       gallery: [],
     },
     {
       name: "Beauty Studio",
       desc: "A floating beauty salon offering nails, skincare, and hair services.",
       img: "/media/beauty-studio.png",
       gallery: [],
     },
     {
       name: "Boutique",
       desc: "A stylish floating retail space for women's fashion and accessories.",
       img: "/media/boutique.png",
       gallery: [],
     },
     {
       name: "Social Club",
       desc: "A members-only floating lounge for social events and networking.",
       img: "/media/social-club.png",
       gallery: [],
     },
  ];

  const features = [
    "Fully branded and equipped commercial interiors",
    "Concept-specific specialized equipment (e.g., espresso machines, reformers)",
    "Comprehensive operational playbooks and staff training",
    "Turnkey marketing and branding material kits",
    "Integration into the Newvion national booking network",
    "Ongoing operational support and compliance updates",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020C1B] text-[#F8F5F2] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-hidden">
        
        {/* HERO */}
        <section className="relative w-full pt-48 pb-32 px-6 lg:px-12 flex items-center min-h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/media/Culinary Studios.png" 
              alt="Business Boat Background" 
              className="w-full h-full object-cover opacity-20"
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
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Commercial Boats</span>
              <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 tracking-tight leading-[1.1]">
                Waterfront <br/><span className="text-gradient-gold italic">Commerce</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C4C0B6] font-light leading-relaxed mb-12">
                A diverse portfolio of turnkey floating business concepts designed for visionary entrepreneurs.
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
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">The New <span className="text-[#D4AF37] italic">Storefront</span></h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
                The floating business market offers unique opportunities to capitalize on the growing demand for experiential waterfront retail and services. Our turnkey concepts provide a low-risk, high-reward pathway to business ownership, sidestepping traditional real estate constraints while delivering a premium aesthetic.
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
                   <span className="text-3xl font-display text-white">$350,000 - $550,000</span>
                 </div>
                 <div className="border-b border-white/10 pb-6">
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">Estimated Monthly Revenue</span>
                   <span className="text-3xl font-display text-white">$6,000 - $18,000</span>
                 </div>
                 <div className="border-b border-white/10 pb-6">
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">ROI Timeline</span>
                   <span className="text-3xl font-display text-white">12 - 24 Months</span>
                 </div>
                 <div>
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">License Fee</span>
                   <span className="text-3xl font-display text-white">$20,000 - $25,000</span>
                   <p className="text-xs text-[#94A3B8] mt-2 italic">Varies by concept. Includes complete operational and marketing package.</p>
                 </div>
                 <div className="border-b border-white/10 pb-6">
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">Boat Lease</span>
                   <span className="text-3xl font-display text-white">$60,000 - $90,000 annually</span>
                 </div>
                 <div className="border-b border-white/10 pb-6">
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">License/Royalty</span>
                   <span className="text-3xl font-display text-white">5% - 8% of gross revenue</span>
                 </div>
                 <div>
                   <span className="text-[#94A3B8] text-sm uppercase tracking-wider block mb-2">Setup Fee</span>
                   <span className="text-3xl font-display text-white">$10,000 - $25,000</span>
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
                       <p className="text-[#94A3B8] text-xl leading-relaxed mb-8">{model.desc}</p>
                       {model.name === "Pilates & Wellness" && (
                         <div className="mt-4 text-[#C4C0B6] mb-4">
                           <p><strong>Pilates Proforma:</strong> $110,000 Startup Capital Required (Includes $20k Technogym Kinesis Wall, $18k for 4 Reformers, $20k Apartment Furnishings). Conservative Monthly Revenue: $14,800/month.</p>
                         </div>
                       )}
                        
                       {/* Optional Spec/Download Button per model */}
                       {model.name === "Art Studio" && (
                         <a href="/docs/Art_LiveWork_3D_Cutaway.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F8F5F2] font-medium tracking-widest uppercase text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors rounded-full">
                           View 3D Cutaway PDF
                         </a>
                       )}
                       {model.name === "Pilates & Wellness" && (
                         <a href="/docs/Pilates_LiveWork_3D_Cutaway.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F8F5F2] font-medium tracking-widest uppercase text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors rounded-full">
                           View 3D Cutaway PDF
                         </a>
                       )}
                       {model.name === "Office Space" && (
                         <a href="/docs/Office Boat.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F8F5F2] font-medium tracking-widest uppercase text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors rounded-full">
                           View Office Spec PDF
                         </a>
                       )}
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
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {model.gallery.map((img, j) => (
                        <div key={j} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/5">
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