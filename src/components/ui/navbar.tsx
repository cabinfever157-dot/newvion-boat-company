"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

// import { Logo } from "@/components/ui/logo";

const collectionNavLinks = [
  { href: "/companies", label: "Companies" },
  { href: "/connect", label: "NewvionConnect" },
  { href: "/story", label: "Story" },
];

const connectNavLinks = [
  { href: "/", label: "Collection" },
  { href: "/connect", label: "Connect" },
  { href: "/connect/experiences", label: "Experiences" },
  { href: "/connect/platform", label: "Platform" },
  { href: "/connect/experience-hub", label: "Experience Hub" },
  { href: "/connect/host", label: "Host" },
  { href: "/connect/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isConnectSection = pathname.startsWith("/connect");
  const navLinks = isConnectSection ? connectNavLinks : collectionNavLinks;
  const logoHref = "/";

  const isActiveLink = React.useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/";
      }

      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          "bg-background/95 backdrop-blur-md shadow-sm py-3"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActiveLink(link.href) ? "text-primary font-semibold" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href={isConnectSection ? "/connect/join" : "/connect"}>
              <InteractiveHoverButton
                text={isConnectSection ? "Join" : "Enter Connect"}
                className={cn(
                  isConnectSection ? "w-24 border-primary/20 hover:border-primary" : "w-44 border-primary/20 hover:border-primary",
                )}
              />
            </Link>
          </nav>

          <Link href={logoHref} className="z-50 relative group">
            <div className="relative h-12 w-48">
              <Image
                src="/images/newvion-logo.png"
                alt="Newvion"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-display text-2xl font-bold transition-colors hover:text-primary",
                    isActiveLink(link.href) ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <Button asChild size="lg" className="w-full text-lg">
                  <Link href={isConnectSection ? "/connect/join" : "/connect"}>
                    {isConnectSection ? "Join the Community" : "Enter NewvionConnect"}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full text-lg">
                  <Link href={isConnectSection ? "/" : "/story"}>
                    {isConnectSection ? "Back to Collection" : "View Story"}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
