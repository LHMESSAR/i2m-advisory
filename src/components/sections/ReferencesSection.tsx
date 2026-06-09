"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import casesData from "@/data/cases.json";

const FEATURED_CASES = casesData.filter((c) => c.featured).slice(0, 2);

const CLIENTS = [
  "CANDRIAM",
  "BNP Paribas Securities Services",
  "AXA Investment Managers",
  "Allianz Global Investors",
];

export function ReferencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 bg-[#F1F5F9]"
      aria-labelledby="references-heading"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Heading
            id="references-heading"
            eyebrow="Références clients"
            title="Des missions à fort impact dans l'industrie financière"
          />
          <Link
            href="/references"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#CA8A04] hover:text-[#B45309] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] rounded"
          >
            Toutes les références
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Logo wall */}
        <div
          ref={ref}
          className="flex flex-wrap gap-6 items-center py-6 px-8 bg-white rounded-xl border border-[#E2E8F0] mb-8"
          aria-label="Clients de référence (logos à valider juridiquement avant publication)"
        >
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-sm font-semibold text-[#94A3B8] hover:text-[#334155] transition-colors duration-200 cursor-default"
              title={client}
            >
              {client}
            </motion.div>
          ))}
          <p className="w-full text-xs text-[#94A3B8] mt-2">
            Logos à valider juridiquement avant toute publication.
          </p>
        </div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_CASES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            >
              <CaseStudyCard c={c} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseStudyCard({ c }: { c: (typeof FEATURED_CASES)[number] }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl border border-[#E2E8F0] p-8 hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded mb-2">
            {c.sectorLabel}
          </span>
          <h3 className="text-xl font-bold text-[#0F172A]">{c.title}</h3>
          <p className="text-sm text-[#475569] mt-0.5">{c.client}</p>
        </div>
      </div>

      <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">{c.description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {c.metrics.map((m) => (
          <div key={m.label} className="text-center p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <div className="text-xl font-bold text-[#0F172A] tabular-nums">{m.value}</div>
            <div className="text-[10px] text-[#475569] leading-tight mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-4 border-t border-[#E2E8F0]">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          {c.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" aria-hidden="true" />
          {c.team}
        </span>
        <div className="flex gap-1.5 ml-auto flex-wrap">
          {c.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#F1F5F9] text-[#334155] rounded text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
