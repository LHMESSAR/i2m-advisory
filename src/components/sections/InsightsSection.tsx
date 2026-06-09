"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import insightsData from "@/data/insights.json";

const RECENT = insightsData.slice(0, 3);

const CATEGORY_COLORS: Record<string, string> = {
  "Conformité réglementaire": "text-[#2563EB] bg-[#EFF6FF]",
  "Stratégie Data": "text-[#CA8A04] bg-[#FFFBEB]",
  "Asset Management": "text-[#0F172A] bg-[#F1F5F9]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InsightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="insights-heading"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Heading
            id="insights-heading"
            eyebrow="Insights"
            title="Points de vue & analyses sectorielles"
          />
          <Link
            href="/insights"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#CA8A04] hover:text-[#B45309] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] rounded"
          >
            Toutes nos publications
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT.map((insight, i) => {
            const colorClass = CATEGORY_COLORS[insight.category] ?? "text-[#334155] bg-[#F1F5F9]";
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex flex-col h-full bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                >
                  {/* Abstract illustration placeholder */}
                  <div className="h-40 bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] flex items-center justify-center relative overflow-hidden">
                    <svg
                      width="120"
                      height="80"
                      viewBox="0 0 120 80"
                      fill="none"
                      className="opacity-20"
                      aria-hidden="true"
                    >
                      <line x1="10" y1="70" x2="40" y2="30" stroke="white" strokeWidth="1.5" />
                      <line x1="40" y1="30" x2="70" y2="50" stroke="white" strokeWidth="1.5" />
                      <line x1="70" y1="50" x2="90" y2="20" stroke="white" strokeWidth="1.5" />
                      <line x1="90" y1="20" x2="110" y2="35" stroke="white" strokeWidth="1.5" />
                      <circle cx="40" cy="30" r="3" fill="#CA8A04" />
                      <circle cx="90" cy="20" r="4" fill="#CA8A04" />
                      <circle cx="70" cy="50" r="3" fill="white" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                  </div>

                  <div className="flex flex-col flex-1 p-6 space-y-3">
                    <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded ${colorClass}`}>
                      {insight.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors duration-150">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed line-clamp-2 flex-1">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-2 border-t border-[#E2E8F0]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {formatDate(insight.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {insight.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
