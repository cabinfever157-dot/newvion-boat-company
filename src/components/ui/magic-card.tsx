"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export interface MagicCardProps {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string;
}

export function MagicCard({
    children,
    className,
    gradientColor = "#D4AF37",
}: MagicCardProps) {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={onMouseMove}
            className={cn(
                "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
                className
            )}
        >
            {/* Hover Gradient Border */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Inner Content Background */}
            <div className="relative flex h-full flex-col bg-card rounded-[inherit] z-10">
                {children}
            </div>
        </div>
    );
}
