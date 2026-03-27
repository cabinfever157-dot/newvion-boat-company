"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ScrollSpyNavProps {
  items: {
    id: string;
    label: string;
  }[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function ScrollSpyNav({ items, activeSection, onSectionChange }: ScrollSpyNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "sticky top-24 z-10 transition-all duration-300",
        isScrolled ? "top-20" : "top-24"
      )}
    >
      <div className="bg-ivory rounded-2xl p-4 depth-1">
        <h3 className="font-medium text-charcoal mb-3">Hub Sections</h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-cream"
                    : "text-charcoal hover:bg-stone/20"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}