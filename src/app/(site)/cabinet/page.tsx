import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Award, Users, TrendingUp } from "lucide-react";
import { LinkedInIcon } from "@/components/elements/LinkedInIcon";
import { Container } from "@/components/elements/Container";
import { CTAButton } from "@/components/elements/CTAButton";
import teamData from "@/data/team.json";

export const metadata: Metadata = {
  title: "Le cabinet — I2M Advisory",
  description:
    "I2M Advisory, cabinet de conseil indépendant fondé en 2010, spécialisé dans la donnée pour la banque, la gestion d'actifs et l'assurance.",
  alternates: { canonical: "https://i2m-advisory.fr/cabinet" },
};

const TIMELINE = [
  { year: "2010", event: "Fondation d'I2M Advisory à Roissy en Brie. Premiers engagements dans la gestion d'actifs." },
  { year: "2013", event: "Développement de la practice Securities Services. Référencement auprès d'un dépositaire bancaire majeur." },
  { year: "2016", event: "Lancement de la practice Conformité Réglementaire. Premières missions MiFID II." },
  { year: "2018", event: "Intégration de la dimension cloud et data engineering. Partenariat Azure." },
  { year: "2021", event: "Développement des expertises ESG/SFDR. Accompagnement des premiers projets de conformité Article 8 et 9." },
  { year: "2024", event: "Renforcement de l'équipe. Nouvelles missions DORA et Data Governance chez des clients institutionnels." },
];

const VALEURS_DETAIL = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "L'innovation chez I2M Advisory n'est pas un objectif en soi, mais une conséquence de la rigueur d'analyse. Anticiper les mutations technologiques et réglementaires pour que nos clients soient toujours en avance, jamais en retard.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Chaque consultant associe une maîtrise métier profonde à une compétence technique solide. Cette double compétence est non négociable : elle garantit des diagnostics pertinents et des solutions qui fonctionnent dans la réalité opérationnelle.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Le cabinet fonctionne en intelligence collective. Les savoirs circulent, les expériences se partagent, les approches se challengent. Cette culture du partage bénéficie directement à nos clients.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Chaque mission est définie avec des objectifs mesurables. La valeur d'un conseil se mesure aux résultats produits, pas aux livrables remis. Délais, qualité, conformité : les impacts sont documentés et partagés.",
  },
];

export default function CabinetPage() {
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
              <li className="text-slate-300" aria-current="page">Le cabinet</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">À propos</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Un cabinet indépendant, expert, engagé
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Fondé en 2010, I2M Advisory s&apos;est imposé comme un partenaire de confiance des acteurs
              financiers qui cherchent à transformer leurs défis data en avantages opérationnels.
            </p>
          </div>
        </Container>
      </section>

      {/* History timeline */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="histoire-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Histoire</p>
              <h2 id="histoire-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">
                15 ans au service de la finance
              </h2>
              <p className="text-[#475569] leading-relaxed mb-6">
                I2M Advisory a été fondé avec une conviction simple : les acteurs financiers ont besoin
                d&apos;un conseil indépendant, à taille humaine, qui comprend réellement leurs métiers
                et leurs contraintes techniques.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Cette conviction guide encore aujourd&apos;hui chaque engagement : pas de généralisme,
                pas de sous-traitance en cascade, pas de promesses déconnectées de la réalité opérationnelle.
              </p>
            </div>
            <div className="space-y-0" role="list" aria-label="Chronologie">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-5" role="listitem">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-1" aria-hidden="true" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-bold text-[#CA8A04] mb-1">{item.year}</p>
                    <p className="text-sm text-[#334155] leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#F1F5F9]" aria-labelledby="valeurs-heading">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Valeurs</p>
            <h2 id="valeurs-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Quatre principes fondateurs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALEURS_DETAIL.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-8 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0F172A] transition-colors duration-200">
                  <div className="w-11 h-11 rounded-lg bg-[#0F172A] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="equipe-heading">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Équipe</p>
            <h2 id="equipe-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Des associés impliqués sur chaque mission
            </h2>
            <p className="text-[#475569] mt-3">
              Chez I2M Advisory, les associés ne vendent pas et ne disparaissent pas. Ils sont présents
              sur chaque engagement, du cadrage à la livraison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamData.map((member) => (
              <div key={member.id} className="group p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#0F172A] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-200">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#E2E8F0] flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-xl font-bold text-[#334155]">{member.name[0]}</span>
                </div>
                <h3 className="font-bold text-[#0F172A]">{member.name}</h3>
                <p className="text-sm text-[#CA8A04] font-medium mb-3">{member.role}</p>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.expertise.map((e) => (
                    <span key={e} className="text-[10px] px-2 py-0.5 bg-white border border-[#E2E8F0] text-[#334155] rounded">{e}</span>
                  ))}
                </div>
                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#0F172A] transition-colors"
                    aria-label={`Profil LinkedIn de ${member.name}`}
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    LinkedIn
                  </a>
                )}
                {member.placeholder && (
                  <p className="text-[10px] text-[#94A3B8] mt-2">Photo & identité à compléter avant publication</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Travailler avec I2M Advisory</h2>
              <p className="text-slate-300">Échanger avec un associé sur vos enjeux data et finance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <CTAButton href="/contact" size="lg" arrow>Prendre contact</CTAButton>
              <CTAButton href="/carrieres" variant="ghost" size="lg">Nous rejoindre</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
