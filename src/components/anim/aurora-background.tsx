import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Wave 1 - Navy */}
      <motion.div
        className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2"
        style={{
          background: "radial-gradient(circle, rgba(10, 25, 47, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "15%", "0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Wave 2 - Gold */}
      <motion.div
        className="absolute w-[180%] h-[180%] -right-1/2 -bottom-1/2"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "-10%", "0%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Wave 3 - Navy Light */}
      <motion.div
        className="absolute w-[190%] h-[190%] left-1/4 top-1/4"
        style={{
          background: "radial-gradient(circle, rgba(23, 42, 69, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "12%", "0%"],
          y: ["0%", "-12%", "0%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Wave 4 - Gold Dark */}
      <motion.div
        className="absolute w-[170%] h-[170%] right-1/4 bottom-1/4"
        style={{
          background: "radial-gradient(circle, rgba(170, 140, 44, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "-8%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
