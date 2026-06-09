"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BarChart3, Landmark, Database, Shield, Cpu, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";

const ICONS = { BarChart3, Landmark, Database, Shield, Cpu };

const EXPERTISES = [
  {
    slug: "asset-management",
    icon: "BarChart3",
    title: "Asset Management",
    description: "Production de NAV, reportings réglementaires SFDR/AIFMD, gouvernance des données de gestion d'actifs.",
    featured: true,
  },
  {
    slug: "securities-services",
    icon: "Landmark",
    title: "Securities Services",
    description: "Conservation, administration de fonds, règlement-livraison, référentiels instruments et conformité post-marché.",
    featured: false,
  },
  {
    slug: "data-strategy",
    icon: "Database",
    title: "Stratégie Data",
    description: "Feuilles de route data, Data Platform Azure, gouvernance et accompagnement des CDO.",
    featured: false,
  },
  {
    slug: "regulatory-compliance",
    icon: "Shield",
    title: "Conformité Réglementaire",
    description: "SFDR, MiFID II, AIFMD, DORA — automatisation des reportings et dispositifs de contrôle qualité.",
    featured: false,
  },
  {
    slug: "digital-transformation",
    icon: "Cpu",
    title: "Transformation Digitale",
    description: "Modernisation des SI, automatisation, BI Power BI et migration cloud pour l'industrie financière.",
    featured: false,
  },
];

export function ExpertisesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = EXPERTISES.find((e) => e.featured);
  const others = EXPERTISES.filter((e) => !e.featured);

  return (
    <section
      className="py-20 md:py-28 bg-[#F1F5F9]"
      aria-labelledby="expertises-heading"
    >
      <Container>
        <Heading
          eyebrow="Nos expertises"
          title="Cinq domaines de compétence au service de la finance"
          subtitle="Une combinaison unique d'expertise métier finance et de maîtrise technologique, au service des acteurs les plus exigeants du secteur."
          className="mb-12"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured card — large */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-2 md:row-span-2"
            >
              <ExpertiseCard expertise={featured} featured />
            </motion.div>
          )}

          {/* Standard cards */}
          {others.map((expertise, i) => (
            <motion.div
              key={expertise.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i + 1) * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <ExpertiseCard expertise={expertise} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ExpertiseCard({
  expertise,
  featured = false,
}: {
  expertise: (typeof EXPERTISES)[number];
  featured?: boolean;
}) {
  const Icon = ICONS[expertise.icon as keyof typeof ICONS];

  return (
    <Link
      href={`/expertises/${expertise.slug}`}
      className={`
        group flex flex-col h-full min-h-[160px] bg-white rounded-xl border border-[#E2E8F0]
        p-6 md:p-8 transition-all duration-200 cursor-pointer
        hover:border-[#0F172A] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-2
        ${featured ? "md:min-h-[320px]" : ""}
      `}
      aria-label={`Expertise ${expertise.title}`}
    >
      <div className="flex-1 space-y-4">
        <div
          className={`
          inline-flex items-center justify-center rounded-lg transition-colors duration-200
          ${featured ? "w-12 h-12" : "w-10 h-10"}
          bg-[#F1F5F9] group-hover:bg-[#0F172A]
        `}
        >
          <Icon
            className={`transition-colors duration-200 group-hover:text-white text-[#0F172A] ${featured ? "w-6 h-6" : "w-5 h-5"}`}
            aria-hidden="true"
          />
        </div>

        <div className="space-y-2">
          <h3
            className={`font-bold text-[#0F172A] tracking-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
          >
            {expertise.title}
          </h3>
          <p
            className={`text-[#475569] leading-relaxed ${featured ? "text-base" : "text-sm"}`}
          >
            {expertise.description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-[#CA8A04] group-hover:gap-2 transition-all duration-200">
        En savoir plus
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </Link>
  );
}
