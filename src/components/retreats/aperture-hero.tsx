
"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ApertureHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // 1. The Mask Expand: Starts at 20% size, expands to 300% (covering screen)
    const maskSize = useTransform(scrollYProgress, [0, 0.4], ["20%", "300%"]);

    // 2. The Text Scale: "SANCTUARY" scales up and fades out as you enter the portal
    const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 2.5]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

    // 3. The Video Parallax: Moves slightly slower than scroll for depth
    const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="h-[200vh] relative z-10 bg-ivory">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* The Typography Layer */}
                <motion.div
                    style={{ scale: textScale, opacity: textOpacity }}
                    className="absolute z-20 pointer-events-none mix-blend-difference text-ivory text-center"
                >
                    <h1 className="font-display text-[12vw] leading-none tracking-tighter">
                        SANCTUARY
                    </h1>
                    <p className="font-body tracking-[0.5em] text-sm uppercase mt-4">
                        The Atlas of Newvion
                    </p>
                </motion.div>

                {/* The Mask Layer (Clip Path via simple Border Radius trick or SVG) 
            We'll use a centered motion div that expands to reveal the video behind it. 
            Actually, let's reverse it: The VIDEO is inside the mask.
        */}
                <motion.div
                    style={{
                        width: maskSize,
                        height: maskSize,
                        borderRadius: "50%"
                    }}
                    className="z-10 bg-black overflow-hidden relative flex items-center justify-center aspect-square"
                >
                    <motion.div
                        style={{ y: videoY }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                            poster="/images/hero-home.jpg"
                        >
                            <source src="/videos/hero-retreat.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>

                {/* The Scroll Hint */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-12 z-30 animate-pulse text-navy text-[10px] uppercase tracking-widest"
                >
                    Enter the Portal
                </motion.div>

            </div>
        </div>
    );
}
