"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export const MouseGradient = ({
    className,
    containerClassName,
}: {
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-0 z-[0] transition-opacity duration-300",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className={cn(
                    "absolute inset-0 z-[-1] opacity-50",
                    className
                )}
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            ),
             radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(10, 25, 47, 0.10),
              transparent 80%
            )
          `,
                }}
            />
            <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-background via-cream to-background opacity-90" />
        </div>
    );
};
