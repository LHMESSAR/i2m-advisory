"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Award, Users, TrendingUp } from "lucide-react";
import { Container } from "@/components/elements/Container";
import { Heading } from "@/components/elements/Heading";

const VALEURS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Les défis data du secteur financier évoluent vite. I2M Advisory anticipe les mutations technologiques et réglementaires pour proposer des solutions éprouvées, pas des expérimentations.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Chaque consultant I2M Advisory combine une double compétence : maîtrise métier (gestion d'actifs, conformité, post-marché) et excellence technique (data engineering, Azure, Python).",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Aucune mission réussie sans transfert de compétences. Les équipes clients sont partie prenante de chaque projet, et repartent avec les clés pour faire vivre les solutions déployées.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description:
      "Chaque engagement est mesurable. Des délais de production réduits, des anomalies détectées, des reportings conformes : les bénéfices de nos missions se chiffrent, pas se racontent.",
  },
];

export function ValeursSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="valeurs-heading"
    >
      <Container>
        <Heading
          id="valeurs-heading"
          eyebrow="Pourquoi I2M Advisory"
          title="Quatre engagements qui fondent notre pratique"
          subtitle="La boutique spécialisée qui combine pointe métier finance et agilité d'une équipe à taille humaine."
          className="mb-12"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALEURS.map((valeur, i) => {
            const Icon = valeur.icon;
            return (
              <motion.div
                key={valeur.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CA8A04] hover:shadow-[0_4px_24px_rgba(202,138,4,0.1)] transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center mb-5 group-hover:bg-[#CA8A04] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{valeur.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{valeur.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
