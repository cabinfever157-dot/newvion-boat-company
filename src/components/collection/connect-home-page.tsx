import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, MapPin, Users, Zap } from "lucide-react";

import { digitalPlatform, experienceHub, phases, pillars } from "@/content/content-map";
import { experiences } from "@/content/experiences";
import { hosts } from "@/content/hosts";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ExperienceVideoCard } from "@/components/ui/experience-video-card";
import { Hero } from "@/components/ui/hero";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LightRays } from "@/components/ui/light-rays";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ConnectHomePage() {
  const featuredExperiences = experiences.slice(0, 6);
  const featuredHosts = hosts.filter((host) => host.featured);

  return (
    <main className="relative min-h-screen overflow-x-hidden max-w-full">
      <LightRays className="z-0 opacity-100" />

      <ScrollReveal width="100%">
        <Hero basePath="/connect" />
      </ScrollReveal>

      <section
        className="relative z-0 flex h-[50vh] items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/exp-yoga.png')" }}
      >
        <div className="absolute inset-0 bg-forest/30 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-4 text-cream drop-shadow-md">"Find your rhythm in nature."</h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 bg-ivory/80 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="heading-xl mb-6">What Moves Us</h2>
            <p className="body-lg mx-auto max-w-2xl text-slate">
              Newvion brings together the essential elements of a fulfilling lifestyle-connecting
              place, capital, and community through experience-driven development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.values(pillars).map((pillar, index) => (
              <ScrollReveal check-circle key={pillar.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-stone/10 bg-background/80 p-8 text-center backdrop-blur-sm transition-colors hover:border-gold/30 depth-1">
                  <h3 className="heading-md mb-4">{pillar.title}</h3>
                  <p className="body-md mb-6 text-slate">{pillar.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {pillar.components.map((component) => (
                      <span key={component} className="rounded-full bg-ivory px-3 py-1 text-xs text-charcoal">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="heading-xl mb-6">How It Works</h2>
            <p className="body-lg mx-auto max-w-2xl text-slate">
              Discover, engage, and contribute to a growing community of wellness-focused individuals.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Join the Community</h3>
              <p className="body-md text-slate">Get access to live and on-demand experiences</p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Explore Experiences</h3>
              <p className="body-md text-slate">Find classes, workshops, and gatherings that inspire</p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-sm mb-3">Host or Partner</h3>
              <p className="body-md text-slate">Share your expertise with our community</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/connect/experiences">
              <InteractiveHoverButton text="Browse Experiences" className="w-64" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative z-0 flex h-[60vh] items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/retreats/river.png')" }}
      >
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="heading-lg mx-auto mb-4 max-w-4xl text-cream drop-shadow-md">
              "Real connection happens when we slow down and gather in places that inspire us."
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 bg-ivory/60 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="heading-xl mb-3">Featured Experiences</h2>
              <p className="body-md text-slate">Handpicked classes and workshops</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/connect/experiences">View All</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredExperiences.map((experience, index) => (
              <ExperienceVideoCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="heading-xl mb-6">The Newvion Platform</h2>
            <p className="body-lg mb-8 text-slate">A seamless digital experience that extends beyond our physical hub</p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="heading-lg mb-6">Digital Capabilities</h3>
              <ul className="space-y-4">
                {digitalPlatform.capabilities.map((capability) => (
                  <li key={capability.name} className="flex items-start">
                    <div className="mt-0.5 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal">{capability.name}</h4>
                      <p className="text-sm text-slate">{capability.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/connect/platform">Explore Platform</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/connect/join">Join Community</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <ScrollReveal direction="left">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl depth-2">
                  <Image
                    src="/images/exp-pottery.png"
                    alt="Newvion Digital Platform"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 to-transparent p-8">
                    <p className="font-playfair text-xl italic text-cream">
                      "Connecting the physical and digital worlds seamlessly."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory/80 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="heading-xl mb-6">Phased Activation</h2>
            <p className="body-lg text-slate">Our journey from digital foundation to permanent hub</p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-[50%] bg-stone md:left-1/2" />

            <div className="relative mb-16 pl-12 md:mb-24 md:pl-0">
              <div className="md:translate-y-4 absolute left-4 z-10 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
              <div className="rounded-2xl bg-background p-8 depth-1 md:ml-[52%]">
                <div className="mb-2 text-sm font-medium text-gold">Phase 1</div>
                <h3 className="heading-md mb-4">{phases.phase1.title}</h3>
                <p className="body-md mb-6 text-slate">{phases.phase1.description}</p>
                <ul className="space-y-2">
                  {phases.phase1.components.slice(0, 3).map((component) => (
                    <li key={component} className="flex items-center">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-forest" />
                      <span className="text-sm">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative pl-12 md:pl-0">
              <div className="md:translate-y-4 absolute left-4 z-10 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
              <div className="rounded-2xl bg-background p-8 depth-1 md:mr-[52%]">
                <div className="mb-2 text-sm font-medium text-gold">Phase 2</div>
                <h3 className="heading-md mb-4">{phases.phase2.title}</h3>
                <p className="body-md mb-6 text-slate">{phases.phase2.description}</p>
                <ul className="space-y-2">
                  {phases.phase2.components.map((component) => (
                    <li key={component} className="flex items-center">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-forest" />
                      <span className="text-sm">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-ivory px-4 py-2 text-sm font-medium text-forest">
              <MapPin className="mr-2 h-4 w-4" />
              Moore Haven Marina, Florida
            </div>
            <h2 className="heading-xl mb-6">The Experience Hub</h2>
            <p className="body-lg mx-auto max-w-2xl text-slate">{experienceHub.anchorDescription}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceHub.components.slice(0, 6).map((component) => (
              <div key={component.name} className="rounded-2xl bg-ivory p-6 depth-1">
                <h3 className="heading-sm mb-3">{component.name}</h3>
                <p className="body-sm mb-4 text-slate">{component.description}</p>
                {component.capacity ? (
                  <div className="text-xs font-medium text-forest">Capacity: {component.capacity}</div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/connect/experience-hub">Explore the Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ivory/60 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="heading-xl mb-6">Meet Our Hosts</h2>
            <p className="body-lg text-slate">Talented creators, wellness professionals, and community leaders</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredHosts.map((host) => (
              <ScrollReveal key={host.id} delay={0.1} className="h-full">
                <MagicCard className="h-full border-white/20 bg-background/50 backdrop-blur-sm" gradientColor="#E5C568">
                  <div className="flex h-full flex-col">
                    <div className="relative h-64 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                      <BlurFade delay={0.2} inView className="h-full w-full">
                        <Image src={host.image} alt={host.name} fill className="object-cover" />
                      </BlurFade>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="heading-sm mb-1 transition-colors group-hover:text-gold">{host.name}</h3>
                      <p className="mb-3 text-sm text-forest">{host.role}</p>
                      <p className="body-sm mb-4 flex-1 text-slate">{host.bio.substring(0, 100)}...</p>
                      <Button asChild variant="ghost" size="sm" className="-ml-3 mt-auto self-start">
                        <Link href={`/connect/hosts/${host.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </div>
                </MagicCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/connect/host">Become a Host</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-forest p-12 text-center text-cream">
            <h2 className="heading-lg mb-4">Join the Newvion Community</h2>
            <p className="body-lg mx-auto mb-8 max-w-2xl opacity-90">
              Get early access to experiences, on-demand sessions, and local gatherings.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <Link href="/connect/join">Join Now</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="border border-cream/30 bg-transparent text-cream hover:bg-cream/10">
                <Link href="/connect/host">Host an Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
