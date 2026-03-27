
"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface WatermarkProps {
    text: string;
    className?: string;
    depth?: number; // How fast it moves parallax
}

export function Watermark({ text, className, depth = 100 }: WatermarkProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, depth]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.08, 0.02]);

    return (
        <div
            ref={ref}
            className={cn(
                "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0",
                className
            )}
        >
            <motion.h2
                style={{ y, opacity }}
                className="font-display text-[20vw] leading-none text-navy whitespace-nowrap select-none mix-blend-multiply"
            >
                {text}
            </motion.h2>
        </div>
    );
}
