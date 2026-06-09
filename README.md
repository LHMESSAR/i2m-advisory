# I2M Advisory — Site vitrine corporate

Site web vitrine de I2M Advisory, cabinet de conseil indépendant spécialisé dans la donnée pour l'industrie financière.

## Stack technique

- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Tailwind CSS v4 + shadcn/ui
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Formulaires** : React Hook Form + Zod
- **MDX** : next-mdx-remote (articles /insights)
- **Hébergement cible** : Vercel

---

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Structure des dossiers

```
src/
├── app/
│   ├── (site)/               # Routes du site (avec Navbar + Footer)
│   │   ├── page.tsx          # Accueil
│   │   ├── expertises/
│   │   │   ├── page.tsx      # Liste des expertises
│   │   │   └── [slug]/       # Page expertise dynamique
│   │   ├── references/       # Références clients
│   │   ├── insights/
│   │   │   ├── page.tsx      # Liste des articles
│   │   │   └── [slug]/       # Article MDX
│   │   ├── carrieres/        # Offres d'emploi
│   │   ├── cabinet/          # À propos
│   │   ├── contact/          # Formulaire de contact
│   │   ├── mentions-legales/
│   │   └── politique-confidentialite/
│   ├── api/
│   │   └── contact/          # Route API formulaire de contact
│   ├── sitemap.ts            # Sitemap automatique
│   ├── robots.ts             # robots.txt
│   └── not-found.tsx         # Page 404
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Navigation sticky flottante
│   │   └── Footer.tsx        # Footer riche 5 colonnes
│   ├── sections/             # Sections de la page d'accueil
│   │   ├── HeroSection.tsx
│   │   ├── KPISection.tsx
│   │   ├── ExpertisesSection.tsx
│   │   ├── ValeursSection.tsx
│   │   ├── ApprocheSection.tsx
│   │   ├── ReferencesSection.tsx
│   │   ├── InsightsSection.tsx
│   │   ├── CarrieresSection.tsx
│   │   └── CTAFinalSection.tsx
│   └── shared/               # Composants réutilisables
│       ├── Container.tsx
│       ├── CTAButton.tsx
│       ├── ContactForm.tsx
│       ├── Heading.tsx
│       ├── LinkedInIcon.tsx
│       ├── Logo.tsx
│       └── Section.tsx
├── content/
│   └── insights/             # Articles MDX
│       └── *.mdx
└── data/                     # Données mock JSON
    ├── expertises.json
    ├── cases.json
    ├── insights.json
    ├── jobs.json
    └── team.json
```

---

## Ajouter une page expertise

1. Ajouter une entrée dans `src/data/expertises.json` avec le même schéma que les entrées existantes
2. La page `/expertises/[slug]` est générée automatiquement via `generateStaticParams`

## Ajouter un article Insights

**Option A — Données + MDX complet :**

1. Ajouter une entrée dans `src/data/insights.json`
2. Créer `src/content/insights/[slug].mdx` avec le contenu en MDX

**Option B — Données seules (résumé visible, contenu "à venir") :**

1. Ajouter uniquement l'entrée dans `src/data/insights.json`
2. La page affiche l'excerpt jusqu'à ce que le fichier MDX soit créé

## Ajouter une offre d'emploi

1. Ajouter une entrée dans `src/data/jobs.json`
2. Mettre `"active": true` pour que le poste apparaisse sur `/carrieres`

## Ajouter un membre de l'équipe

1. Ajouter une entrée dans `src/data/team.json`
2. Mettre `"placeholder": false` une fois photo et identité complétées

---

## Configurer le mailer (formulaire de contact)

La route `src/app/api/contact/route.ts` est prête. Pour activer l'envoi d'emails :

1. Installer Resend : `npm install resend`
2. Ajouter la clé API dans `.env.local` : `RESEND_API_KEY=re_xxxxx`
3. Décommenter le bloc Resend dans `route.ts`

---

## Déploiement Vercel

```bash
# Installer la CLI Vercel
npm install -g vercel

# Déployer
vercel --prod
```

Variables d'environnement à configurer dans Vercel :
- `RESEND_API_KEY` — clé API Resend pour le mailer

---

## Design system

Le design system complet est documenté dans `design-system/i2m-advisory/MASTER.md`.

**Palette :**

| Token | Valeur |
|-------|--------|
| Navy primary | `#0F172A` |
| Slate secondary | `#334155` |
| Amber CTA | `#CA8A04` |
| Cobalt accent | `#2563EB` |
| Background | `#F8FAFC` |
| Surface alt | `#F1F5F9` |

**Typographie :** IBM Plex Sans (300–700) — finance, trustworthy, professional.

---

## Checklist avant mise en ligne

- [ ] Compléter les informations légales dans `src/app/(site)/mentions-legales/page.tsx`
- [ ] Valider juridiquement l'affichage des logos clients dans `HeroSection` et `ReferencesSection`
- [ ] Remplacer les placeholders `[à compléter]` dans les mentions légales
- [ ] Ajouter photos et identités réelles de l'équipe dans `src/data/team.json`
- [ ] Configurer le mailer Resend dans `src/app/api/contact/route.ts`
- [ ] Créer l'image OpenGraph `/public/og-image.png` (1200×630px)
- [ ] Configurer la variable `RESEND_API_KEY` dans Vercel
- [ ] Mettre à jour l'URL `https://i2m-advisory.fr` dans `src/app/layout.tsx` et `sitemap.ts`
- [ ] Rédiger les articles MDX dans `src/content/insights/`
