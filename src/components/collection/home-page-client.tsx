"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IntroSequence } from "@/components/anim/intro-sequence";
import { CollectionHomePage } from "@/components/collection/collection-home-page";

interface HomePageClientProps {
  initialHasSeenIntro?: boolean;
}

export function HomePageClient({ initialHasSeenIntro = false }: HomePageClientProps) {
  const [introComplete, setIntroComplete] = useState(initialHasSeenIntro);
  const [showContent, setShowContent] = useState(initialHasSeenIntro);

  useEffect(() => {
    if (introComplete && !initialHasSeenIntro) {
      // Small delay to ensure the intro fade-out finishes smoothly before rendering content
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [introComplete, initialHasSeenIntro]);

  const handleIntroComplete = () => {
    // Set cookie to last for 1 day
    document.cookie = "newvion_intro_seen=true; max-age=86400; path=/";
    setIntroComplete(true);
  };

  return (
    <div className="relative min-h-screen bg-navy text-foreground">
      {/* Intro Sequence Overlay */}
      {!introComplete && (
        <IntroSequence
          text="Empowering rural communities and building connections across boundaries."
          videoId="q2uPQl9Izq4"
          onComplete={handleIntroComplete}
        />
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: initialHasSeenIntro ? 1 : 0 }}
        animate={{ opacity: introComplete && showContent ? 1 : initialHasSeenIntro ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative z-10"
      >
        <CollectionHomePage />
      </motion.div>
    </div>
  );
}
