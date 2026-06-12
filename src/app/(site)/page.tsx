import type { Metadata } from "next";
import { HeroSection } from "@/components/accueil/HeroSection";
import { KPISection } from "@/components/accueil/KPISection";
import { ExpertisesSection } from "@/components/accueil/ExpertisesSection";
import { ValeursSection } from "@/components/accueil/ValeursSection";
import { ApprocheSection } from "@/components/accueil/ApprocheSection";
import { ReferencesSection } from "@/components/accueil/ReferencesSection";
import { InsightsSection } from "@/components/accueil/InsightsSection";
import { CarrieresSection } from "@/components/accueil/CarrieresSection";
import { CTAFinalSection } from "@/components/accueil/CTAFinalSection";

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
