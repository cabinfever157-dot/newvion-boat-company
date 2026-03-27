
"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring, useVelocity } from "framer-motion";
import Image from "next/image";

const destinations = [
    { id: 1, name: "Lake Okeechobee", img: "/images/retreats/lake.jpg" },
    { id: 2, name: "Caloosahatchee", img: "/images/retreats/river.png" },
    { id: 3, name: "The Ranch", img: "/images/retreats/ranch.png" },
    { id: 4, name: "Marina Point", img: "/images/retreats/marina.png" },
];

export function AtlasScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll to horizontal scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-navy">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* The Horizontal Track */}
                <motion.div style={{ x }} className="flex gap-20 pl-20">

                    {/* Intro Text Card */}
                    <div className="min-w-[40vw] flex flex-col justify-center">
                        <h2 className="font-display text-8xl text-cream mb-8">The<br />Atlas</h2>
                        <p className="font-body text-cream/60 max-w-sm text-xl border-l border-gold/30 pl-6">
                            We do not list properties. <br />
                            We curate <span className="text-gold italic">sanctuaries</span>.
                        </p>
                    </div>

                    {/* Destination Cards */}
                    {destinations.map((dest) => (
                        <div key={dest.id} className="group relative h-[70vh] w-[50vw] overflow-hidden bg-navy-light shrink-0 border border-white/5">
                            <Image
                                src={dest.img}
                                alt={dest.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                            <div className="absolute bottom-10 left-10">
                                <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">0{dest.id}</span>
                                <h3 className="text-cream font-display text-6xl">{dest.name}</h3>
                            </div>
                        </div>
                    ))}

                    {/* Outro Text Card */}
                    <div className="min-w-[40vw] flex flex-col justify-center pr-20">
                        <h2 className="font-display text-6xl text-cream/20">End of<br />Atlas</h2>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
