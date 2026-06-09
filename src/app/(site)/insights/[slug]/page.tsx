import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import insightsData from "@/data/insights.json";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insightsData.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightsData.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `https://i2m-advisory.fr/insights/${slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Conformité réglementaire": "text-[#2563EB] bg-[#EFF6FF]",
  "Stratégie Data": "text-[#CA8A04] bg-[#FFFBEB]",
  "Asset Management": "text-[#0F172A] bg-[#F1F5F9]",
};

function getMdxContent(slug: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "src/content/insights", `${slug}.mdx`);
    if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");
    return null;
  } catch {
    return null;
  }
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightsData.find((i) => i.slug === slug);
  if (!insight) notFound();

  const colorClass = CATEGORY_COLORS[insight.category] ?? "text-[#334155] bg-[#F1F5F9]";
  const related = insightsData.filter((i) => i.slug !== slug).slice(0, 3);
  const mdxContent = getMdxContent(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          aria-hidden="true"
        />
        <Container size="md">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li><Link href="/insights" className="hover:text-slate-300 transition-colors">Insights</Link></li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-slate-300 truncate max-w-[200px]" aria-current="page">{insight.title}</li>
            </ol>
          </nav>
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-4 ${colorClass}`}>
            {insight.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            {insight.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" aria-hidden="true" />{formatDate(insight.date)}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />{insight.readingTime}</span>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <Container size="sm">
          {mdxContent ? (
            <article
              className="prose prose-slate max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#0F172A]
                prose-p:text-[#334155] prose-p:leading-relaxed
                prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#0F172A]
                prose-code:text-[#0F172A] prose-code:bg-[#F1F5F9] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                prose-ul:text-[#334155] prose-ol:text-[#334155]
                prose-blockquote:border-l-[#CA8A04] prose-blockquote:text-[#475569]
                prose-hr:border-[#E2E8F0]"
            >
              <MDXRemote source={mdxContent} />
            </article>
          ) : (
            <div>
              <p className="text-lg text-[#334155] leading-relaxed font-medium mb-8">{insight.excerpt}</p>
              <div className="p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] block mb-2">Contenu à venir</strong>
                Ajoutez le fichier{" "}
                <code className="text-xs bg-[#E2E8F0] px-1.5 py-0.5 rounded font-mono">
                  src/content/insights/{slug}.mdx
                </code>{" "}
                pour publier le contenu complet de cet article.
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2 mb-6">
              {insight.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-[#F1F5F9] text-[#334155] rounded-full">{tag}</span>
              ))}
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Retour aux publications
            </Link>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F1F5F9]" aria-labelledby="related-heading">
        <Container>
          <h2 id="related-heading" className="text-xl font-bold text-[#0F172A] mb-6">À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => {
              const rc = CATEGORY_COLORS[r.category] ?? "text-[#334155] bg-[#F1F5F9]";
              return (
                <Link
                  key={r.id}
                  href={`/insights/${r.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#0F172A] hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04]"
                >
                  <span className={`self-start text-xs font-semibold px-2 py-0.5 rounded mb-3 ${rc}`}>{r.category}</span>
                  <h3 className="text-sm font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors flex-1 mb-3">{r.title}</h3>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#CA8A04]">
                    Lire <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Ces enjeux concernent votre organisation ?</h2>
              <p className="text-slate-300">Discutons de votre contexte avec un associé I2M Advisory.</p>
            </div>
            <CTAButton href="/contact" size="lg" arrow className="shrink-0">Prendre contact</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
