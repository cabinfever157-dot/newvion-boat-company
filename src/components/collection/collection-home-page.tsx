import Image from "next/image";
import Link from "next/link";

import {
  collectionRootCards,
  collectionTicker,
  companiesCards,
} from "@/content/collection-map";
import { BranchCard } from "@/components/collection/branch-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LightRays } from "@/components/ui/light-rays";
import Marquee from "@/components/ui/marquee";

const branchColumns = [
  {
    title: "Newvion Companies",
    href: "/companies",
    description: "The operating side of the collection, from development and opportunity-zone work to marine and resort ventures.",
    links: companiesCards.map((card) => ({ href: card.href, label: card.title })),
  },
  {
    title: "NewvionConnect.com",
    href: "/connect",
    description: "The current site becomes the digital platform layer and connective tissue for the broader collection.",
    links: [
      { href: "/connect", label: "Current homepage" },
      { href: "/connect/about", label: "About" },
      { href: "/connect/platform", label: "Platform" },
      { href: "/connect/experience-hub", label: "Experience Hub" },
      { href: "/connect/programming", label: "Programming" },
      { href: "/connect/retreats", label: "Retreats" },
    ],
  },
  {
      title: "Newvion Story",
      href: "/story",
      description: "The narrative layer that explains the people, ventures, and future-facing bets behind the brand.",
      links: [
        { href: "/story/team", label: "Team" },
        { href: "/story/team/studios", label: "Newvion Studios" },
        { href: "/story/team/development", label: "Newvion Development" },
        { href: "/story/team/capital", label: "Newvion Capital" },
        { href: "/story/team/ai", label: "Newvion AI" },
      ],
    },
];

export function CollectionHomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden max-w-full">
      <LightRays className="z-0 opacity-100" />

      <section className="relative min-h-screen pt-28 md:pt-36">
        <Image
          src="/images/retreats/river.png"
          alt="Newvion Collection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,25,47,0.86),rgba(10,25,47,0.68),rgba(10,25,47,0.92))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/10 to-navy/90" />

        <div className="container relative z-10 grid gap-10 pb-16 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <BlurFade className="max-w-3xl text-cream">
            <div className="mb-6 inline-flex rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cream/85 backdrop-blur-sm">
              Newvion Collection
            </div>
            <h1 className="display-lg max-w-4xl text-cream">
              One collection with
              <span className="px-3 py-2 italic text-gold"> three cinematic gateways</span>{" "}
              into the Newvion world.
            </h1>
            <p className="body-lg mt-6 max-w-2xl text-cream/82">
              The new front page now works like a collection gateway: Newvion Companies,
              NewvionConnect.com, and Newvion Story sit at the top, while the current site lives inside
              the Connect branch as the digital platform that supports the entire business.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/connect">
                <InteractiveHoverButton text="Enter NewvionConnect" className="w-80 border-cream/20 bg-cream/10 text-cream hover:border-gold/60" />
              </Link>
              <Button asChild variant="secondary" size="lg" className="bg-cream/90 text-navy hover:bg-cream">
                <Link href="/companies">Browse the collection</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "GE-style branch gateway",
                "Cinematic intro ready for video swap",
                "Current site preserved under /connect",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cream/15 bg-cream/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cream/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.12} className="w-full mt-8 lg:-mt-16 lg:ml-8 z-20">
            <BlurFade delay={0.4} className="relative aspect-video w-full max-w-xl mx-auto lg:max-w-none rounded-[32px] overflow-hidden shadow-2xl transform-gpu ring-1 ring-white/10">
              <iframe
                src="https://player.vimeo.com/video/1174564693?badge=0&autopause=0&player_id=0&app_id=58479&background=0"
                className="absolute inset-0 w-full h-full rounded-[32px] bg-black"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="NEWVION_GladesCountyVisionPlan"
              />
            </BlurFade>
          </BlurFade>
        </div>
      </section>

      <section className="relative z-10 border-y border-gold/10 bg-navy py-4 text-cream overflow-hidden">
        <Marquee pauseOnHover className="[--duration:34s]">
          {collectionTicker.map((item) => (
            <span key={item} className="mx-4 text-xs uppercase tracking-[0.24em] text-cream/70">
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="relative z-10 bg-ivory/80 py-20 backdrop-blur-sm md:py-28">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">Three ways in</div>
            <h2 className="heading-xl mb-6 text-navy">Start with the branch that matches what you need next.</h2>
            <p className="body-lg text-slate">
              Each branch is now framed as a clear destination with room underneath for the pages,
              ventures, and proof points you want to add over time.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {collectionRootCards.map((card) => (
              <BranchCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative h-[50vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/exp-yoga.png')" }}
      >
        <div className="absolute inset-0 bg-navy/55" />
        <div className="container relative z-10 flex h-full items-center justify-center text-center">
          <p className="heading-lg max-w-4xl text-cream drop-shadow-md">
            “The current site still exists in full. It simply moves into the Connect branch so the rest of the collection can grow above it.”
          </p>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">Collection map</div>
            <h2 className="heading-xl mb-5 text-navy">What each gateway now houses</h2>
            <p className="body-lg text-slate">
              The hierarchy from your sitemap is now translated into browsable branch pages and placeholders so we can start filling each area in deliberately.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {branchColumns.map((column) => (
              <div key={column.title} className="rounded-[28px] border border-gold/15 bg-background/80 p-8 shadow-lg shadow-navy/5 backdrop-blur-sm">
                <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">Gateway</div>
                <h3 className="heading-md mb-4 text-navy">{column.title}</h3>
                <p className="body-md mb-6 text-slate">{column.description}</p>
                <div className="space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={`${column.title}-${link.href}-${link.label}`}
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl border border-navy/8 bg-ivory/60 px-4 py-3 text-sm text-slate transition-colors hover:border-gold/30 hover:bg-ivory"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-navy">Open</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
