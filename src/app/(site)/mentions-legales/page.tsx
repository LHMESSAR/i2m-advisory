import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-[#0F172A] pt-32 pb-16">
        <Container>
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300" aria-current="page">Mentions légales</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Mentions légales</h1>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="md">
          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-[#334155]">
            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Éditeur du site</h2>
              <p>
                <strong>I2M Advisory SAS</strong><br />
                Capital social : [à compléter] €<br />
                RCS Paris : [à compléter]<br />
                Numéro de TVA intracommunautaire : [à compléter]<br />
                Siège social : 52 avenue du Commerce, Roissy-en-Brie<br />
                Email : <a href="mailto:i2m.advisory@gmail.com" className="text-[#2563EB] hover:underline">i2m.advisory@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Directeur de la publication</h2>
              <p>[Nom du directeur de la publication — à compléter]</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, illustrations, logos, icônes)
                est la propriété exclusive d&apos;I2M Advisory SAS ou de ses partenaires, et est protégé
                par les lois françaises et internationales relatives à la propriété intellectuelle.
                Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
                du contenu de ce site est interdite sans autorisation préalable écrite d&apos;I2M Advisory.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Limitation de responsabilité</h2>
              <p>
                I2M Advisory s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
                sur ce site. Cependant, I2M Advisory ne peut garantir l&apos;exactitude, la précision ou
                l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Données personnelles</h2>
              <p>
                Pour toute information sur la gestion de vos données personnelles, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-[#2563EB] hover:underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0F172A] mb-3">Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
