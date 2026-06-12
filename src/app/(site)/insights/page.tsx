import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/elements/Container";
import insightsData from "@/data/insights.json";

export const metadata: Metadata = {
  title: "Insights — Publications & analyses",
  description:
    "Points de vue et analyses sectorielles d'I2M Advisory : SFDR, MiFID II, data strategy, asset management, transformation digitale.",
  alternates: { canonical: "https://i2m-advisory.fr/insights" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Conformité réglementaire": "text-[#2563EB] bg-[#EFF6FF]",
  "Stratégie Data": "text-[#CA8A04] bg-[#FFFBEB]",
  "Asset Management": "text-[#0F172A] bg-[#F1F5F9]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#CA8A04] to-transparent opacity-60" aria-hidden="true" />
        <Container>
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">Insights</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">Publications</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Analyses & points de vue sectoriels
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Décryptages réglementaires, retours d&apos;expérience terrain et analyses technologiques
              sur les enjeux data de l&apos;industrie financière.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]" aria-label="Liste des publications">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsData.map((insight) => {
              const colorClass = CATEGORY_COLORS[insight.category] ?? "text-[#334155] bg-[#F1F5F9]";
              return (
                <Link
                  key={insight.id}
                  href={`/insights/${insight.slug}`}
                  className="group flex flex-col h-full bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                >
                  <div className="h-40 bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] flex items-center justify-center relative overflow-hidden">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-20" aria-hidden="true">
                      <line x1="10" y1="70" x2="40" y2="30" stroke="white" strokeWidth="1.5" />
                      <line x1="40" y1="30" x2="70" y2="50" stroke="white" strokeWidth="1.5" />
                      <line x1="70" y1="50" x2="90" y2="20" stroke="white" strokeWidth="1.5" />
                      <line x1="90" y1="20" x2="110" y2="35" stroke="white" strokeWidth="1.5" />
                      <circle cx="40" cy="30" r="3" fill="#CA8A04" />
                      <circle cx="90" cy="20" r="4" fill="#CA8A04" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 p-6 space-y-3">
                    <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded ${colorClass}`}>
                      {insight.category}
                    </span>
                    <h2 className="text-base font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-sm text-[#475569] leading-relaxed line-clamp-2 flex-1">{insight.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-2 border-t border-[#E2E8F0]">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" aria-hidden="true" />{formatDate(insight.date)}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" aria-hidden="true" />{insight.readingTime}</span>
                      <ArrowRight className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
