import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BarChart3, Landmark, Database, Shield, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/elements/Container";
import { CTAButton } from "@/components/elements/CTAButton";
import expertisesData from "@/data/expertises.json";

const ICONS = { BarChart3, Landmark, Database, Shield, Cpu };

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return expertisesData.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const expertise = expertisesData.find((e) => e.slug === slug);
  if (!expertise) return {};
  return {
    title: `${expertise.title} — Expertise`,
    description: expertise.description,
    alternates: { canonical: `https://i2m-advisory.fr/expertises/${slug}` },
  };
}

export default async function ExpertisePage({ params }: PageProps) {
  const { slug } = await params;
  const expertise = expertisesData.find((e) => e.slug === slug);
  if (!expertise) notFound();

  const Icon = ICONS[expertise.icon as keyof typeof ICONS] ?? Database;

  const others = expertisesData.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#CA8A04] to-transparent opacity-60" aria-hidden="true" />

        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li><Link href="/expertises" className="hover:text-slate-300 transition-colors">Expertises</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">{expertise.title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/[0.08]">
              <Icon className="w-7 h-7 text-[#CA8A04]" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04]">
              Expertise
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              {expertise.heroTitle}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {expertise.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {expertise.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-white/[0.08] text-slate-300 border border-white/[0.12] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton href="/contact" size="lg" arrow>
                Échanger avec un associé
              </CTAButton>
              <CTAButton href="/references" variant="ghost" size="lg">
                Voir nos références
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="approach-heading">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">
              Approche
            </p>
            <h2 id="approach-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              {expertise.approach.title}
            </h2>
            <p className="text-[#475569] leading-relaxed">{expertise.approach.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.approach.steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#0F172A] transition-colors duration-200"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center text-xs font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-[#F1F5F9]" aria-labelledby="usecases-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">
                Cas d&apos;usage
              </p>
              <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">
                Exemples de missions
              </h2>
              <ul className="space-y-3" role="list">
                {expertise.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#334155] text-sm leading-relaxed">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-3">
                Bénéfices clients
              </p>
              {expertise.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#CA8A04] hover:shadow-[0_4px_16px_rgba(202,138,4,0.08)] transition-all duration-200"
                >
                  <h3 className="font-bold text-[#0F172A] mb-1 text-sm">{benefit.title}</h3>
                  <p className="text-sm text-[#475569]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]" aria-label="Prise de contact">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Un projet {expertise.shortTitle.toLowerCase()} ?
              </h2>
              <p className="text-slate-300">
                Échangeons sur vos enjeux. Un associé vous répond sous 48h.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <CTAButton href="/contact" size="lg" arrow>
                Demander une note de cadrage
              </CTAButton>
              <CTAButton href="/references" variant="ghost" size="lg">
                Voir les références
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Other expertises */}
      <section className="py-16 bg-white" aria-labelledby="other-expertises-heading">
        <Container>
          <h2 id="other-expertises-heading" className="text-xl font-bold text-[#0F172A] mb-6">
            Autres expertises
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((other) => {
              const OtherIcon = ICONS[other.icon as keyof typeof ICONS] ?? Database;
              return (
                <Link
                  key={other.slug}
                  href={`/expertises/${other.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0F172A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E2E8F0] group-hover:bg-[#0F172A] flex items-center justify-center transition-colors duration-200 shrink-0">
                    <OtherIcon className="w-4 h-4 text-[#334155] group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{other.shortTitle}</p>
                    <p className="text-xs text-[#475569] mt-0.5 line-clamp-2">{other.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#CA8A04] ml-auto shrink-0 transition-colors" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
