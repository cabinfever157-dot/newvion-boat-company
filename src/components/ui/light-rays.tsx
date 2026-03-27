"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LightRaysProps {
    className?: string;
    intensity?: number;
}

export const LightRays = ({ className, intensity = 1 }: LightRaysProps) => {
    return (
        <div className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, rotate: 12 }}
                animate={{ opacity: [0.4 * intensity, 0.8 * intensity, 0.4 * intensity], rotate: [12, 14, 12] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[50%] left-[50%] h-[200%] w-[100%] origin-top -translate-x-1/2 bg-gradient-to-b from-gold/60 via-gold/10 to-transparent blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, rotate: -12 }}
                animate={{ opacity: [0.3 * intensity, 0.6 * intensity, 0.3 * intensity], rotate: [-12, -10, -12] }}
                transition={{ duration: 10, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[50%] left-[40%] h-[200%] w-[80%] origin-top -translate-x-1/2 bg-gradient-to-b from-gold/50 via-gold/10 to-transparent blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, rotate: 25 }}
                animate={{ opacity: [0.2 * intensity, 0.4 * intensity, 0.2 * intensity], rotate: [25, 27, 25] }}
                transition={{ duration: 12, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[50%] right-[30%] h-[200%] w-[60%] origin-top -translate-x-1/2 bg-gradient-to-b from-gold/40 via-gold/5 to-transparent blur-3xl"
            />
        </div>
    );
};
