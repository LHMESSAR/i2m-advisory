"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/expertises", label: "Expertises" },
  { href: "/references", label: "Références" },
  { href: "/insights", label: "Insights" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/cabinet", label: "Le cabinet" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHeroPage = pathname === "/";
  const isNavyBg = !scrolled && isHeroPage;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 rounded-xl transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : isHeroPage
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
        )}
        role="banner"
      >
        <nav
          className="flex items-center justify-between h-14 px-4 md:px-6"
          aria-label="Navigation principale"
        >
          <Logo variant={isNavyBg ? "light" : "dark"} />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-1",
                      active
                        ? isNavyBg
                          ? "text-white bg-white/10"
                          : "text-[#0F172A] bg-[#F1F5F9]"
                        : isNavyBg
                        ? "text-slate-200 hover:text-white hover:bg-white/10"
                        : "text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={cn(
              "hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-2",
              isNavyBg
                ? "bg-[#CA8A04] text-white hover:bg-[#B45309]"
                : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
            )}
          >
            Nous contacter
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]",
              isNavyBg
                ? "text-white hover:bg-white/10"
                : "text-[#0F172A] hover:bg-[#F1F5F9]"
            )}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-4 top-20 z-40 bg-white rounded-xl border border-[#E2E8F0] shadow-xl overflow-hidden"
          role="dialog"
          aria-label="Menu mobile"
        >
          <nav className="p-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    active
                      ? "bg-[#0F172A] text-white"
                      : "text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-[#E2E8F0]">
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-3 text-sm font-semibold bg-[#CA8A04] text-white rounded-lg hover:bg-[#B45309] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
