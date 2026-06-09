import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Landmark, Database, Shield, Cpu, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import expertisesData from "@/data/expertises.json";

export const metadata: Metadata = {
  title: "Nos expertises — Conseil Data & Finance",
  description:
    "Asset management, securities services, stratégie data, conformité réglementaire SFDR MiFID II, transformation digitale. Cinq domaines d'expertise au service de l'industrie financière.",
  alternates: { canonical: "https://i2m-advisory.fr/expertises" },
};

const ICONS = { BarChart3, Landmark, Database, Shield, Cpu };

export default function ExpertisesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#CA8A04] to-transparent opacity-60" aria-hidden="true" />
        <Container>
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">Expertises</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">Nos expertises</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Une maîtrise complète de la chaîne data financière
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              De la production de valeurs liquidatives à la conformité SFDR, en passant par la gouvernance
              des données et la modernisation technologique — cinq domaines d&apos;expertise complémentaires.
            </p>
            <CTAButton href="/contact" arrow>Échanger avec un associé</CTAButton>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]" aria-label="Liste des expertises">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertisesData.map((expertise) => {
              const Icon = ICONS[expertise.icon as keyof typeof ICONS] ?? Database;
              return (
                <Link
                  key={expertise.slug}
                  href={`/expertises/${expertise.slug}`}
                  className="group flex flex-col h-full bg-white rounded-xl border border-[#E2E8F0] p-8 hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] group-hover:bg-[#0F172A] flex items-center justify-center mb-5 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-[#0F172A] group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A] mb-3">{expertise.title}</h2>
                  <p className="text-sm text-[#475569] leading-relaxed flex-1">{expertise.description}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {expertise.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-[#F1F5F9] text-[#334155] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#CA8A04] group-hover:gap-2 transition-all duration-150">
                    Découvrir <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Votre projet ne rentre pas dans une case ?</h2>
              <p className="text-slate-300">Nos missions combinent souvent plusieurs expertises. Discutons de votre contexte.</p>
            </div>
            <CTAButton href="/contact" size="lg" arrow className="shrink-0">Prendre contact</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
