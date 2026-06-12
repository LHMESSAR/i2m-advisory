import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/elements/Logo";
import { LinkedInIcon } from "@/components/elements/LinkedInIcon";
import { Container } from "@/components/elements/Container";

const EXPERTISES = [
  { href: "/expertises/asset-management", label: "Asset Management" },
  { href: "/expertises/securities-services", label: "Securities Services" },
  { href: "/expertises/data-strategy", label: "Stratégie Data" },
  { href: "/expertises/regulatory-compliance", label: "Conformité Réglementaire" },
  { href: "/expertises/digital-transformation", label: "Transformation Digitale" },
];

const CABINET = [
  { href: "/cabinet", label: "Le cabinet" },
  { href: "/references", label: "Références" },
  { href: "/insights", label: "Insights" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300" role="contentinfo">
      <Container>
        <div className="pt-16 pb-8">
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <Logo variant="light" compact={false} />
              <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                Cabinet de conseil indépendant spécialisé dans la donnée pour l&apos;industrie financière.
                Banque, gestion d&apos;actifs, assurance.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:i2m.advisory@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  aria-label="Envoyer un email à I2M Advisory"
                >
                  <Mail className="w-4 h-4 shrink-0 group-hover:text-[#CA8A04] transition-colors" aria-hidden="true" />
                  i2m.advisory@gmail.com
                </a>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>52 avenue du Commerce, Roissy-en-Brie</span>
                </div>
                <a
                  href="https://www.linkedin.com/company/i2m-advisory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  aria-label="I2M Advisory sur LinkedIn (s'ouvre dans un nouvel onglet)"
                >
                  <LinkedInIcon className="shrink-0 group-hover:text-[#CA8A04] transition-colors" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Expertises */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                Expertises
              </h3>
              <ul className="space-y-2.5" role="list">
                {EXPERTISES.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CA8A04] rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cabinet */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                Le cabinet
              </h3>
              <ul className="space-y-2.5" role="list">
                {CABINET.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CA8A04] rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                Informations
              </h3>
              <ul className="space-y-2.5" role="list">
                {LEGAL.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CA8A04] rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2 space-y-1.5">
                <p className="text-xs text-slate-500">SAS au capital de 10 000 €</p>
                <p className="text-xs text-slate-500">RCS Paris — SIRET [à compléter]</p>
                <p className="text-xs text-slate-500">N° TVA intracommunautaire [à compléter]</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {year} I2M Advisory — Tous droits réservés
            </p>
            <p className="text-xs text-slate-500 text-center sm:text-right">
              Données personnelles traitées conformément au RGPD.{" "}
              <Link
                href="/politique-confidentialite"
                className="underline underline-offset-2 hover:text-slate-300 transition-colors"
              >
                En savoir plus
              </Link>
            </p>
          </div>
        </div>
      </Container>

      {/* RGPD banner placeholder */}
      <div
        id="rgpd-banner"
        className="border-t border-white/10 bg-[#0B1120] py-3 px-4"
        role="complementary"
        aria-label="Information cookies"
      >
        <Container>
          <p className="text-xs text-slate-500 text-center">
            Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie de traçage tiers n&apos;est utilisé.{" "}
            <Link
              href="/politique-confidentialite"
              className="text-slate-400 underline underline-offset-2 hover:text-slate-200 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
