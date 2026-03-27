
"use client";

export function NoiseOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]">
            <div
                className="absolute inset-0 h-full w-full bg-repeat"
                style={{
                    backgroundImage: "url('/images/noise.png')",
                    backgroundSize: "100px 100px",
                }}
            />
            {/* Fallback CSS generation if image missing, or we can use a data URL for grain */}
            <style jsx global>{`
        .noise-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: 50;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
            <div className="noise-bg mix-blend-overlay"></div>
        </div>
    );
}
