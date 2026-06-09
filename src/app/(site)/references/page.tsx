import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import casesData from "@/data/cases.json";

export const metadata: Metadata = {
  title: "Références clients",
  description:
    "Missions réalisées auprès de CANDRIAM, BNP Paribas Securities Services, AXA Investment Managers, Allianz Global Investors. Case studies data & finance.",
  alternates: { canonical: "https://i2m-advisory.fr/references" },
};

const SECTORS = [
  { value: "all", label: "Toutes" },
  { value: "asset-management", label: "Asset Management" },
  { value: "securities-services", label: "Securities Services" },
  { value: "data-strategy", label: "Stratégie Data" },
  { value: "regulatory-compliance", label: "Conformité" },
];

export default function ReferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
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
              <li className="text-slate-300" aria-current="page">Références</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">Références clients</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Des missions à fort impact dans la finance
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Chaque mission est conduite avec un objectif de résultat mesurable. Nos case studies
              illustrent la rigueur et l&apos;impact de nos interventions — identités clients confirmées sur demande.
            </p>
          </div>
        </Container>
      </section>

      {/* Cases grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]" aria-label="Case studies">
        <Container>
          {/* Sector filter pills — static, JS filtering can be added */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Filtres par secteur">
            {SECTORS.map((s) => (
              <span
                key={s.value}
                className="px-4 py-2 text-xs font-semibold rounded-full border border-[#E2E8F0] bg-white text-[#334155] cursor-default select-none"
              >
                {s.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {casesData.map((c) => (
              <article
                key={c.id}
                className="flex flex-col bg-white rounded-xl border border-[#E2E8F0] p-8 hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                <div className="mb-5">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded mb-3">
                    {c.sectorLabel}
                  </span>
                  <h2 className="text-xl font-bold text-[#0F172A] mb-1">{c.title}</h2>
                  <p className="text-sm text-[#475569]">{c.client}</p>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">{c.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                      <div className="text-xl font-bold text-[#0F172A] tabular-nums">{m.value}</div>
                      <div className="text-[10px] text-[#475569] leading-tight mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-4 border-t border-[#E2E8F0]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />{c.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" aria-hidden="true" />{c.team}
                  </span>
                  <div className="flex gap-1.5 ml-auto flex-wrap">
                    {c.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#F1F5F9] text-[#334155] rounded text-[10px] font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#94A3B8] text-center">
            Logos clients et identités complètes disponibles sur demande après accord juridique préalable.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Parlons de votre prochain projet</h2>
              <p className="text-slate-300">Un associé vous répond sous 48h pour cadrer ensemble votre besoin.</p>
            </div>
            <CTAButton href="/contact" size="lg" arrow className="shrink-0">Prendre contact</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
