"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "@/components/elements/CTAButton";
import { Container } from "@/components/elements/Container";
import { CheckCircle } from "lucide-react";

const ATOUTS = [
  "Missions à forte valeur ajoutée chez des clients institutionnels de premier plan",
  "Double montée en compétences : expertise métier finance et technologie data",
  "Environnement de travail à taille humaine, culture de l'excellence sans bureaucratie",
];

export function CarrieresSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 bg-[#F1F5F9]"
      aria-labelledby="carrieres-section-heading"
    >
      <Container>
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-2/5 shrink-0"
            aria-hidden="true"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] aspect-[4/3] flex items-center justify-center">
              <svg viewBox="0 0 400 300" fill="none" className="w-full h-full p-8" aria-hidden="true">
                {/* Abstract team network */}
                {[
                  { cx: 80, cy: 150, r: 24, fill: "#2563EB" },
                  { cx: 200, cy: 80, r: 28, fill: "#CA8A04" },
                  { cx: 320, cy: 150, r: 24, fill: "#334155" },
                  { cx: 200, cy: 220, r: 20, fill: "#1E293B" },
                ].map((node, i) => (
                  <circle key={i} cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} opacity={0.9} />
                ))}
                {/* Connection lines */}
                {[
                  [80, 150, 200, 80],
                  [200, 80, 320, 150],
                  [80, 150, 200, 220],
                  [200, 220, 320, 150],
                  [80, 150, 320, 150],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="1"
                    opacity={0.15}
                  />
                ))}
                {/* Person icons */}
                {[
                  { cx: 80, cy: 150 },
                  { cx: 200, cy: 80 },
                  { cx: 320, cy: 150 },
                  { cx: 200, cy: 220 },
                ].map((pos, i) => (
                  <g key={i}>
                    <circle cx={pos.cx} cy={pos.cy - 8} r="6" fill="white" opacity={0.9} />
                    <path
                      d={`M${pos.cx - 10} ${pos.cy + 14} Q${pos.cx} ${pos.cy + 4} ${pos.cx + 10} ${pos.cy + 14}`}
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      opacity={0.9}
                    />
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04]">
                Rejoindre I2M Advisory
              </p>
              <h2
                id="carrieres-section-heading"
                className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-[1.15]"
              >
                Construire votre expertise à l&apos;intersection de la finance et de la donnée
              </h2>
            </div>

            <p className="text-[#475569] leading-relaxed">
              I2M Advisory recrute des consultants seniorssur la partie B-one. et juniors alliant rigueur métier finance
              et curiosité technologique. L&apos;environnement est exigeant, les missions sont stimulantes,
              la progression est rapide.
            </p>

            <ul className="space-y-3" role="list">
              {ATOUTS.map((atout) => (
                <li key={atout} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#334155]">{atout}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CTAButton href="/carrieres" arrow>
                Voir nos opportunités
              </CTAButton>
              <CTAButton href="/carrieres#candidature" variant="secondary">
                Candidature spontanée
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
