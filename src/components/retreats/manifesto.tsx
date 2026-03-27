
"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function Manifesto() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-20%" });

    const lines = [
        "It is not a vacation.",
        "It is not a break.",
        "It is a ",
        "Return to Self.",
    ];

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-ivory py-40">
            <div ref={ref} className="container mx-auto px-6">
                {lines.map((line, i) => (
                    <div key={i} className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: "0%" } : { y: "100%" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.33, 1, 0.68, 1], // Custom easing
                                delay: i * 0.1
                            }}
                            className={`font-display text-[6vw] md:text-[5vw] leading-[1.1] tracking-tighter ${i === 3 ? "text-gold italic" : "text-navy"
                                }`}
                        >
                            {line}
                        </motion.h2>
                    </div>
                ))}
            </div>
        </section>
    );
}
