// src/app/components/layout/footer.tsx
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between py-8 px-6 border-t border-muted/50 bg-background dark:border-white/20">
      <p className="text-sm text-muted/60">
        © {new Date().getFullYear()} Newvion Boat Company. All rights reserved.
      </p>
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-sm font-medium hover:text-primary/70 dark:hover:text-primary/80">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary/70 dark:hover:text-primary/80">
          About
        </Link>
        <Link href="/products" className="text-sm font-medium hover:text-primary/70 dark:hover:text-primary/80">
          Products
        </Link>
        <Link href="/investment/rural-oz-boat-fund-qof-qozb" className="text-sm font-medium hover:text-primary/70 dark:hover:text-primary/80">
          Investment
        </Link>
      </div>
    </footer>
  );
}