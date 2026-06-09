import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center">
      <Container size="sm">
        <div className="text-center py-24 space-y-6">
          <div className="text-8xl font-bold text-white/10 tabular-nums" aria-hidden="true">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Page introuvable</h1>
          <p className="text-slate-400 max-w-md mx-auto">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <CTAButton href="/" arrow>Retour à l&apos;accueil</CTAButton>
            <CTAButton href="/contact" variant="ghost">Nous contacter</CTAButton>
          </div>
          <nav aria-label="Liens utiles">
            <ul className="flex flex-wrap justify-center gap-4 pt-8 text-sm" role="list">
              {[
                ["/expertises", "Expertises"],
                ["/references", "Références"],
                ["/insights", "Insights"],
                ["/cabinet", "Le cabinet"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 hover:text-slate-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
