"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";

const ETAPES = [
  {
    number: "01",
    title: "Comprendre",
    subtitle: "Diagnostic & qualification",
    description:
      "Chaque mission commence par un travail de compréhension approfondie : cartographie des flux de données, inventaire des systèmes source, identification des points de friction et des risques. Le diagnostic est factuel, documenté, partagé avec les équipes métier et IT.",
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Industrialiser",
    subtitle: "Conception & déploiement",
    description:
      "Les solutions conçues sont pensées pour durer. Pipelines robustes, contrôles qualité automatiques, référentiels structurés, architectures scalables. L'automatisation remplace les traitements manuels sources d'erreurs et de délais.",
    color: "#CA8A04",
  },
  {
    number: "03",
    title: "Pérenniser",
    subtitle: "Gouvernance & transfert",
    description:
      "Une solution sans appropriation est éphémère. I2M Advisory assure le transfert de compétences, la documentation des processus, la mise en place des instances de gouvernance et l'accompagnement au changement pour garantir l'autonomie des équipes.",
    color: "#0F172A",
  },
];

export function ApprocheSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 bg-[#0F172A]"
      aria-labelledby="approche-heading"
    >
      <Container>
        <Heading
          id="approche-heading"
          eyebrow="Notre approche"
          title="Une méthode industrialisée de la donnée"
          subtitle="Qualité, traçabilité, conformité : trois impératifs qui structurent chaque mission I2M Advisory."
          light
          className="mb-16"
        />

        <div ref={ref} className="relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.667%+16px)] right-[calc(16.667%+16px)] h-px bg-gradient-to-r from-[#2563EB] via-[#CA8A04] to-[#334155] opacity-30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {ETAPES.map((etape, i) => (
              <motion.div
                key={etape.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.55, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex flex-col h-full p-8 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.06] transition-colors duration-200">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ backgroundColor: etape.color + "22", color: etape.color === "#0F172A" ? "#94A3B8" : etape.color }}
                    >
                      {etape.number}
                    </div>
                    <div
                      className="h-px flex-1 opacity-20"
                      style={{ backgroundColor: etape.color === "#0F172A" ? "#94A3B8" : etape.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{etape.title}</h3>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: etape.color === "#0F172A" ? "#94A3B8" : etape.color }}
                  >
                    {etape.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">{etape.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
