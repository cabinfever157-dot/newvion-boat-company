import React from 'react';

export const Logo = ({ className = "h-8" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon */}
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-gold"
            >
                <path
                    d="M16 2L2 9L16 16L30 9L16 2Z"
                    fill="currentColor"
                    fillOpacity="0.8"
                />
                <path
                    d="M2 23L16 30L30 23V9L16 16L2 9V23Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 30V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Text */}
            <span className="font-playfair font-bold text-2xl tracking-tighter text-navy dark:text-cream">
                Newvion
            </span>
        </div>
    );
};
