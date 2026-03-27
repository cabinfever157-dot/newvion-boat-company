"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/ui/text-reveal";
import Image from "next/image";

import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface HeroProps {
    basePath?: string;
}

export function Hero({ basePath = "" }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-ivory/75 backdrop-blur-[2px]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="mb-6">
                            <TextReveal
                                text="Newvion brings people together through"
                                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] text-left justify-start"
                            />
                            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gold italic leading-[1.1] py-4 px-2">
                                place-based experiences.
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-slate mb-8 leading-relaxed max-w-lg">
                            Live and on-demand classes, gatherings, and programs—hosted by Newvion and trusted creators—rooted in community and coastal Florida energy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link href={`${basePath}/join`}>
                                <InteractiveHoverButton text="Join the community" className="w-72" />
                            </Link>
                            <Link href={`${basePath}/experiences`}>
                                <InteractiveHoverButton text="Explore experiences" className="w-72 border-primary/20 hover:border-primary" />
                            </Link>
                        </div>

                        {/* Trust Strip */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-navy/10">
                            {["Curated Wellness", "Trusted Hosts", "Community First"].map((item) => (
                                <div key={item} className="flex items-center text-sm font-medium text-navy/80">
                                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative mt-8 lg:-mt-16 lg:ml-8 z-20"
                    >
                        <BlurFade delay={0.4} inView className="relative aspect-video w-full max-w-xl mx-auto lg:max-w-none rounded-[32px] overflow-hidden shadow-2xl transform-gpu ring-1 ring-white/10">
                            <iframe
                                src="https://player.vimeo.com/video/1174564693?badge=0&autopause=0&player_id=0&app_id=58479&background=0"
                                className="absolute inset-0 w-full h-full rounded-[32px] bg-black"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="NEWVION_GladesCountyVisionPlan"
                            />
                        </BlurFade>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
