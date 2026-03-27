"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { AuroraBackground } from "./aurora-background";
import Image from "next/image";

interface IntroSequenceProps {
  text: string;
  videoId: string;
  onComplete: () => void;
}

export function IntroSequence({ text, videoId, onComplete }: IntroSequenceProps) {
  // We use simple booleans tuned to exact milliseconds for absolute stability
  const [showAurora, setShowAurora] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 2. Video crossfades with Aurora (2s)
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
      setShowAurora(false);
    }, 2000);

    // 3. Logo fades in before the final 3 words are finished (3.5s)
    const logoTimer = setTimeout(() => setShowLogo(true), 3500);

    // 4. Everything begins 3-second fade to black (5.5s)
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 5500);

    // 5. Container unmounts perfectly at 8.5s (before 9s YouTube stutter)
    const completeTimer = setTimeout(() => onComplete(), 8500);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="intro-container"
          className="fixed inset-0 z-[100] bg-navy flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
        >
          {/* Aurora Background */}
          <motion.div
            animate={{ opacity: showAurora ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <AuroraBackground />
          </motion.div>

          {/* Video Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showVideo ? 0.75 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10 pointer-events-none bg-navy/20"
          >
            <div className="absolute top-0 left-0 w-full h-full" style={{ transform: 'scale(1.1)' }}>
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: '177.77vh', height: '100vh', minWidth: '100vw', minHeight: '56.25vw' }}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Content Layer (Text and Logo) */}
          <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl px-8 w-full h-full">
            
            {/* Mission Text */}
            <motion.div
               animate={{ y: showLogo ? -80 : 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="flex justify-center"
            >
              {/* Opacity wrapper for the text */}
              <motion.div
                 animate={{ opacity: showText ? 1 : 0 }}
                 transition={{ duration: 0.5 }}
              >
                  {/* We always render the text component so its internal IntersectionObserver and staggered animations don't get interrupted by parent unmounts */}
                  <TextReveal
                    text={text}
                    className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-cream leading-[1.4] drop-shadow-[0_4px_12px_rgba(10,25,47,0.8)]"
                    startReveal={showText} 
                  />
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={
                showLogo 
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 50, filter: "blur(8px)" }
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute mt-48" 
            >
              <Image 
                src="/images/newvion-logo.png" 
                alt="Newvion" 
                width={440} 
                height={180} 
                className="object-contain"
                priority
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
