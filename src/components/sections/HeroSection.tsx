"use client";

import { motion, type Variants } from "framer-motion";
import { CTAButton } from "@/components/shared/CTAButton";
import { Container } from "@/components/shared/Container";

const CLIENTS = [
  { name: "CANDRIAM", abbr: "CANDRIAM" },
  { name: "BNP Paribas Securities Services", abbr: "BNP Paribas SS" },
  { name: "AXA Investment Managers", abbr: "AXA Investment Managers" },
  { name: "Allianz Global Investors", abbr: "Allianz GI" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] },
  }),
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] flex flex-col justify-center bg-[#0F172A] overflow-hidden"
      aria-label="Accueil I2M Advisory"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Abstract data network illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06]"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          {/* Network nodes */}
          {[
            [120, 150], [300, 80], [450, 200], [550, 350],
            [400, 500], [200, 600], [80, 400], [350, 700],
            [500, 650], [150, 300],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="6" fill="white" />
          ))}
          {/* Network edges */}
          {[
            [120,150,300,80], [300,80,450,200], [450,200,550,350],
            [550,350,400,500], [400,500,200,600], [200,600,80,400],
            [80,400,120,150], [120,150,450,200], [300,80,550,350],
            [80,400,400,500], [350,700,500,650], [350,700,200,600],
            [500,650,550,350], [150,300,80,400], [150,300,300,80],
          ].map(([x1,y1,x2,y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" />
          ))}
          {/* Highlight nodes */}
          <circle cx="300" cy="80" r="10" fill="#CA8A04" opacity="0.8" />
          <circle cx="450" cy="200" r="8" fill="#2563EB" opacity="0.8" />
          <circle cx="550" cy="350" r="7" fill="#CA8A04" opacity="0.6" />
        </svg>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </div>

      {/* Amber accent line */}
      <div
        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#CA8A04] to-transparent opacity-60"
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04] mb-6"
          >
            Cabinet de conseil indépendant — Banque · Finance · Assurance
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-6"
          >
            La donnée au service de la performance financière.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            I2M Advisory accompagne les acteurs de la banque, de la gestion d&apos;actifs et de l&apos;assurance
            dans la maîtrise de leur donnée : qualité, traçabilité, conformité réglementaire, gouvernance
            et industrialisation des processus.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton href="/expertises" size="lg" arrow>
              Découvrir nos expertises
            </CTAButton>
            <CTAButton href="/contact" variant="ghost" size="lg">
              Échanger avec un associé
            </CTAButton>
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-6">
            Références clients <span className="text-slate-600 normal-case tracking-normal font-normal">(logos à valider juridiquement avant publication)</span>
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {CLIENTS.map(({ name, abbr }) => (
              <div
                key={name}
                className="group relative cursor-default"
                title={name}
              >
                <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-300 transition-colors duration-200 tracking-wide">
                  {abbr}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
