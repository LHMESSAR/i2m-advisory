import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/shared/ContactForm";
import { LinkedInIcon } from "@/components/shared/LinkedInIcon";

export const metadata: Metadata = {
  title: "Contact — I2M Advisory",
  description:
    "Contactez I2M Advisory pour discuter de votre projet data & finance. Un associé vous répond sous 24h.",
  alternates: { canonical: "https://i2m-advisory.fr/contact" },
};

export default function ContactPage() {
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
              <li className="text-slate-300" aria-current="page">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Décrivez votre contexte et vos enjeux. Un associé d&apos;I2M Advisory vous répond sous
              48 heures ouvrées pour proposer une note de cadrage initiale.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Coordonnées</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:i2m.advisory@gmail.com"
                    className="flex items-start gap-3 group"
                    aria-label="Envoyer un email"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] transition-colors">
                      <Mail className="w-4 h-4 text-[#334155] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Email</p>
                      <p className="text-sm font-medium text-[#0F172A] group-hover:text-[#2563EB] transition-colors">i2m.advisory@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#334155]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Adresse</p>
                      <p className="text-sm font-medium text-[#0F172A]">52 avenue du Commerce, Roissy-en-Brie</p>
                      <p className="text-xs text-[#475569]">Adresse précise sur demande</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#334155]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Horaires</p>
                      <p className="text-sm font-medium text-[#0F172A]">Lundi – Vendredi</p>
                      <p className="text-xs text-[#475569]">9h00 – 18h00</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/company/i2m-advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                    aria-label="LinkedIn I2M Advisory (s'ouvre dans un nouvel onglet)"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] transition-colors">
                      <LinkedInIcon className="text-[#334155] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">LinkedIn</p>
                      <p className="text-sm font-medium text-[#0F172A] group-hover:text-[#2563EB] transition-colors">I2M Advisory</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Reassurance */}
              <div className="p-5 bg-white rounded-xl border border-[#E2E8F0]">
                <h3 className="text-sm font-bold text-[#0F172A] mb-3">Ce à quoi vous pouvez vous attendre</h3>
                <ul className="space-y-2">
                  {[
                    "Réponse sous 48 heures ouvrées",
                    "Échange de 30 min avec un associé",
                    "Note de cadrage initiale gratuite",
                    "Aucun démarchage commercial non sollicité",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A04] shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
