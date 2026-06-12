import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ChevronRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/elements/Container";
import { CTAButton } from "@/components/elements/CTAButton";
import jobsData from "@/data/jobs.json";

export const metadata: Metadata = {
  title: "Carrières — Rejoindre I2M Advisory",
  description:
    "I2M Advisory recrute des consultants data et finance. Missions stimulantes, culture de l'excellence, progression rapide dans le conseil spécialisé.",
  alternates: { canonical: "https://i2m-advisory.fr/carrieres" },
};

const PROCESS = [
  { step: "01", title: "Candidature1", description: "Envoi de votre CV et d'une présentation courte. Réponse sous 5 jours ouvrés." },
  { step: "02", title: "Échange téléphonique", description: "30 minutes avec un associé pour comprendre votre parcours et vos ambitions." },
  { step: "03", title: "Entretien technique", description: "1h avec un consultant senior sur votre expertise métier et/ou technique." },
  { step: "04", title: "Rencontre de l'équipe", description: "Demi-journée pour rencontrer l'équipe et valider l'adéquation réciproque." },
];

const CULTURE = [
  {
    title: "Expertise double, pas niche unique",
    description: "Chaque consultant développe une maîtrise métier finance ET technologique. Pas de spécialisation étroite, mais une vision complète de la chaîne de valeur data.",
  },
  {
    title: "Missions, pas de banc",
    description: "I2M Advisory est une boutique. Pas de consultants en attente de mission. Chaque recrutement correspond à un besoin identifié chez nos clients.",
  },
  {
    title: "Partage de connaissance systématique",
    description: "Retours d'expérience, points méthodologiques, veille réglementaire partagée. Le savoir-faire collectif est une valeur cardinale.",
  },
];

export default function CarrieresPage() {
  const activeJobs = jobsData.filter((j) => j.active);

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
              <li className="text-slate-300" aria-current="page">Carrières</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">Nous rejoindre</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Construisez votre expertise à l&apos;intersection de la finance et de la donnée
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              I2M Advisory recrute des consultants confirmés et juniors qui souhaitent exercer
              un conseil de haute valeur ajoutée dans un environnement rigoureux et stimulant.
            </p>
            <CTAButton href="#offres" arrow>Voir les offres</CTAButton>
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="culture-heading">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Culture</p>
            <h2 id="culture-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Ce qui nous différencie
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE.map((c) => (
              <div key={c.title} className="p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#0F172A] transition-colors duration-200">
                <h3 className="font-bold text-[#0F172A] mb-2">{c.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Jobs */}
      <section id="offres" className="py-20 md:py-28 bg-[#F1F5F9]" aria-labelledby="offres-heading">
        <Container>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Offres d&apos;emploi</p>
            <h2 id="offres-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              {activeJobs.length} poste{activeJobs.length > 1 ? "s" : ""} ouvert{activeJobs.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="space-y-4">
            {activeJobs.map((job) => (
              <article key={job.id} className="group bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#0F172A] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#334155] rounded">{job.type}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-[#EFF6FF] text-[#2563EB] rounded">{job.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#475569] mb-3">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" aria-hidden="true" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden="true" />{job.experience}</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed mb-4">{job.description}</p>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req) => (
                        <li key={req} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#CA8A04] shrink-0 mt-0.5" aria-hidden="true" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href={`/carrieres#candidature`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-lg hover:bg-[#1E293B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                    >
                      Postuler <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="process-heading">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Processus</p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Le processus de recrutement en 4 étapes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#E2E8F0] z-0" style={{ width: "calc(100% - 2rem)" }} aria-hidden="true" />
                )}
                <div className="relative z-10 p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] h-full">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs font-bold mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Candidature spontanée */}
      <section id="candidature" className="py-20 bg-[#0F172A]" aria-labelledby="candidature-heading">
        <Container size="md">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">Candidature spontanée</p>
            <h2 id="candidature-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Votre profil ne correspond pas exactement à une offre ?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Envoyez une candidature spontanée. Si votre profil est pertinent, un associé vous contactera dans les meilleurs délais.
            </p>
          </div>
          <div className="max-w-lg mx-auto text-center">
            <a
              href="mailto:recrutement@i2m-advisory.fr?subject=Candidature%20spontan%C3%A9e"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA8A04] text-white font-semibold rounded-lg hover:bg-[#B45309] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              Envoyer ma candidature
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs text-slate-500">recrutement@i2m-advisory.fr</p>
          </div>
        </Container>
      </section>
    </>
  );
}
