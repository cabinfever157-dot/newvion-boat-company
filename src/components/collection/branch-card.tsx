import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import type { CollectionCardItem } from "@/content/collection-map";

interface BranchCardProps extends CollectionCardItem {
  className?: string;
}

export function BranchCard({
  eyebrow,
  title,
  href,
  description,
  image,
  items,
  ctaLabel = "Explore",
  className,
}: BranchCardProps) {
  return (
    <MagicCard
      className={cn(
        "h-full rounded-[28px] border-gold/20 bg-ivory/80 backdrop-blur-md shadow-xl shadow-navy/10",
        className,
      )}
      gradientColor="#D4AF37"
    >
      <Link href={href} className="group flex h-full flex-col cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
          {eyebrow ? (
            <div className="absolute left-5 top-5 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cream/90 backdrop-blur-sm">
              {eyebrow}
            </div>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
            <h3 className="heading-md mb-3">{title}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-cream/85">{description}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6">
          {items?.length ? (
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-navy/10 bg-background/80 px-3 py-1 text-xs font-medium text-slate"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy">
            <span>{ctaLabel}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </MagicCard>
  );
}
