import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { KPISection } from "@/components/sections/KPISection";
import { ExpertisesSection } from "@/components/sections/ExpertisesSection";
import { ValeursSection } from "@/components/sections/ValeursSection";
import { ApprocheSection } from "@/components/sections/ApprocheSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CarrieresSection } from "@/components/sections/CarrieresSection";
import { CTAFinalSection } from "@/components/sections/CTAFinalSection";

export const metadata: Metadata = {
  title: "I2M Advisory — Conseil Data & Finance",
  description:
    "Cabinet de conseil indépendant spécialisé dans la donnée pour l'industrie financière. Asset management, securities services, conformité réglementaire SFDR MiFID II, transformation digitale.",
  alternates: {
    canonical: "https://i2m-advisory.fr",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KPISection />
      <ExpertisesSection />
      <ValeursSection />
      <ApprocheSection />
      <ReferencesSection />
      <InsightsSection />
      <CarrieresSection />
      <CTAFinalSection />
    </>
  );
}
