"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BlurFade } from "@/components/ui/blur-fade";

interface Experience {
    id: string;
    title: string;
    type: string;
    price: string;
    description: string;
    duration: string;
    rating: number;
    image?: string;
    videoId?: string;
}

interface ExperienceVideoCardProps {
    experience: Experience;
    index: number;
}

export function ExperienceVideoCard({
    experience,
    index,
}: ExperienceVideoCardProps) {
    const [playing, setPlaying] = useState(false);

    return (
        <ScrollReveal key={experience.id} delay={index * 0.1} className="h-full">
            <MagicCard
                className="bg-background/50 backdrop-blur-sm border-white/20"
                gradientColor="#E5C568"
            >
                <div className="h-full flex flex-col">
                    {/* Media area */}
                    <div className="h-64 relative overflow-hidden rounded-t-[inherit] group">
                        {experience.videoId ? (
                            playing ? (
                                /* ── Active embed ── */
                                <iframe
                                    src={`https://www.youtube.com/embed/${experience.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                    title={experience.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full border-0"
                                />
                            ) : (
                                /* ── Local high-res fallback image + play overlay ── */
                                <button
                                    onClick={() => setPlaying(true)}
                                    className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
                                    aria-label={`Play ${experience.title}`}
                                >
                                    <BlurFade delay={0.2} inView className="h-full w-full bg-stone">
                                        <img
                                            src={`https://img.youtube.com/vi/${experience.videoId}/hqdefault.jpg`}
                                            alt={experience.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </BlurFade>

                                    {/* Gradient scrim */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 shadow-lg">
                                            <Play className="w-6 h-6 text-white fill-white ml-0.5 drop-shadow" />
                                        </div>
                                    </div>
                                </button>
                            )
                        ) : (
                            /* ── Static image fallback ── */
                            <BlurFade delay={0.2} inView className="h-full w-full">
                                {experience.image ? (
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-navy-light/10 to-gold/10" />
                                )}
                            </BlurFade>
                        )}

                        {/* Type badge */}
                        <div className="absolute top-4 right-4 bg-navy text-cream text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md bg-opacity-90 z-10 pointer-events-none">
                            {experience.type}
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="heading-sm group-hover:text-gold transition-colors">
                                {experience.title}
                            </h3>
                            <span className="text-sm font-medium text-gold">
                                {experience.price}
                            </span>
                        </div>
                        <p className="body-sm text-slate mb-4 flex-1">
                            {experience.description}
                        </p>
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                            <span className="text-sm text-muted">{experience.duration}</span>
                            <span className="text-sm text-muted flex items-center gap-1">
                                <span className="text-gold">★</span> {experience.rating}
                            </span>
                        </div>
                    </div>
                </div>
            </MagicCard>
        </ScrollReveal>
    );
}
