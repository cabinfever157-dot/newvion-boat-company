import Image from "next/image";
import Link from "next/link";

import type { CollectionCardItem } from "@/content/collection-map";
import { BranchCard } from "@/components/collection/branch-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LightRays } from "@/components/ui/light-rays";
import { Button } from "@/components/ui/button";

interface ShellLink {
  label: string;
  href: string;
}

interface CollectionPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cards?: CollectionCardItem[];
  highlights?: string[];
  primaryCta?: ShellLink;
  secondaryCta?: ShellLink;
  statusTitle?: string;
  statusText?: string;
}

export function CollectionPageShell({
  eyebrow,
  title,
  description,
  image,
  cards = [],
  highlights = [],
  primaryCta,
  secondaryCta,
  statusTitle = "Skeleton in place",
  statusText = "This page structure is now ready for copy, media, partner details, timelines, and page-specific calls to action.",
}: CollectionPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden max-w-full">
      <LightRays className="z-0 opacity-100" />

      <section className="relative flex min-h-[82vh] items-end overflow-hidden pt-28 md:pt-36">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/90" />

        <div className="container relative z-10 pb-16 md:pb-24">
          <BlurFade className="max-w-4xl text-cream">
            <div className="mb-5 inline-flex rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cream/85 backdrop-blur-sm">
              {eyebrow}
            </div>
            <h1 className="display-lg max-w-4xl text-cream">{title}</h1>
            <p className="body-lg mt-6 max-w-3xl text-cream/82">{description}</p>

            {(primaryCta || secondaryCta) ? (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {primaryCta ? (
                  <Link href={primaryCta.href}>
                    <InteractiveHoverButton text={primaryCta.label} className="w-72 border-cream/20 bg-cream/10 text-cream hover:border-gold/60" />
                  </Link>
                ) : null}

                {secondaryCta ? (
                  <Button asChild variant="secondary" size="lg" className="bg-cream/90 text-navy hover:bg-cream">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            ) : null}

            {highlights.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-cream/15 bg-cream/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cream/85"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            ) : null}
          </BlurFade>
        </div>
      </section>

      <section className="relative z-10 bg-ivory/80 py-20 backdrop-blur-sm md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">Implementation status</div>
              <h2 className="heading-lg mb-5 text-navy">{statusTitle}</h2>
              <p className="body-lg max-w-2xl text-slate">{statusText}</p>
            </div>

            <div className="rounded-[28px] border border-gold/20 bg-background/80 p-8 shadow-lg shadow-navy/5 backdrop-blur-sm">
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">What comes next</div>
              <ul className="space-y-4 text-sm leading-relaxed text-slate">
                <li>Refine page-specific positioning and proof points.</li>
                <li>Add media, testimonials, maps, partner logos, or deal visuals.</li>
                <li>Drop in forms, contact flows, and rollout CTAs once content is approved.</li>
              </ul>
            </div>
          </div>

          {cards.length ? (
            <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <BranchCard key={card.href} {...card} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
