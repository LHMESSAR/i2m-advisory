import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://i2m-advisory.fr"),
  title: {
    template: "%s | I2M Advisory",
    default: "I2M Advisory — Conseil Data & Finance",
  },
  description:
    "Cabinet de conseil indépendant spécialisé dans la donnée pour l'industrie financière. Banque, gestion d'actifs, services titres, conformité réglementaire.",
  keywords: [
    "conseil data finance",
    "asset management",
    "securities services",
    "SFDR",
    "MiFID II",
    "data engineering",
    "gouvernance données",
    "transformation digitale",
    "reporting réglementaire",
  ],
  authors: [{ name: "I2M Advisory" }],
  creator: "I2M Advisory",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://i2m-advisory.fr",
    siteName: "I2M Advisory",
    title: "I2M Advisory — Conseil Data & Finance",
    description:
      "Cabinet de conseil indépendant spécialisé dans la donnée pour l'industrie financière.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "I2M Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I2M Advisory — Conseil Data & Finance",
    description:
      "Cabinet de conseil indépendant spécialisé dans la donnée pour l'industrie financière.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#020617]">
        {children}
      </body>
    </html>
  );
}
