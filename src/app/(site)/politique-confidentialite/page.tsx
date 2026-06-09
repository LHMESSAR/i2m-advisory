import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-[#0F172A] pt-32 pb-16">
        <Container>
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">Politique de confidentialité</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Politique de confidentialité</h1>
          <p className="text-slate-400 mt-3 text-sm">Dernière mise à jour : juin 2024</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="md">
          <div className="space-y-8 text-sm leading-relaxed text-[#334155]">
            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Responsable du traitement</h2>
              <p>
                I2M Advisory SAS, 52 avenue du Commerce, Roissy-en-Brie.<br />
                Email : <a href="mailto:i2m.advisory@gmail.com" className="text-[#2563EB] hover:underline">i2m.advisory@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Données collectées</h2>
              <p>
                I2M Advisory collecte uniquement les données que vous fournissez volontairement via
                les formulaires de contact du site : nom, prénom, adresse email professionnelle, société, message.
                Aucune donnée n&apos;est collectée à votre insu. Aucun cookie de traçage tiers n&apos;est utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Finalités et base légale</h2>
              <p>
                Les données collectées sont utilisées exclusivement pour répondre à vos demandes de contact
                et, avec votre consentement, pour vous envoyer des communications relatives aux expertises
                et publications d&apos;I2M Advisory. Base légale : exécution de mesures précontractuelles
                et intérêt légitime.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Durée de conservation</h2>
              <p>
                Les données de contact sont conservées pendant 3 ans à compter de la dernière interaction,
                conformément aux recommandations de la CNIL.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez des droits suivants : accès, rectification,
                effacement, portabilité, opposition et limitation du traitement.
              </p>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:i2m.advisory@gmail.com" className="text-[#2563EB] hover:underline">
                  i2m.advisory@gmail.com
                </a>.
                En cas de réclamation, vous pouvez contacter la CNIL :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">
                  www.cnil.fr
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Cookies</h2>
              <p>
                Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement
                (session, préférences d&apos;accessibilité). Aucun cookie de mesure d&apos;audience ou de
                reciblage publicitaire n&apos;est déposé.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Sécurité</h2>
              <p>
                I2M Advisory met en œuvre les mesures techniques et organisationnelles appropriées
                pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
                Le site est hébergé sur l&apos;infrastructure sécurisée de Vercel.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <p className="text-xs text-[#94A3B8]">
                Pour tout renseignement complémentaire, consultez nos{" "}
                <Link href="/mentions-legales" className="underline hover:text-[#334155] transition-colors">
                  Mentions légales
                </Link>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
