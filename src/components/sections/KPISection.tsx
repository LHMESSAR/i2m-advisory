"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/shared/Container";

interface KPI {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const KPIS: KPI[] = [
  { value: 15, suffix: "+", label: "ans d'expérience", description: "Fondé en 2010, I2M Advisory intervient depuis plus de 15 ans dans l'industrie financière." },
  { value: 50, suffix: "+", label: "missions livrées", description: "Des projets de transformation data menés de bout en bout, de la conception au déploiement." },
  { value: 4, suffix: "", label: "grands clients institutionnels", description: "CANDRIAM, BNP Paribas SS, AXA Investment Managers, Allianz GI." },
  { value: 100, suffix: "%", label: "spécialisation finance", description: "Une expertise exclusive au secteur financier, sans dérivation généraliste." },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function KPISection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 md:py-28 bg-white border-y border-[#E2E8F0]"
      aria-labelledby="kpi-heading"
    >
      <Container>
        <div className="sr-only" id="kpi-heading">
          I2M Advisory en chiffres
        </div>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E2E8F0]">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-center px-4 lg:px-8 space-y-2"
            >
              <div
                className="text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tight"
                aria-label={`${kpi.value}${kpi.suffix} ${kpi.label}`}
              >
                <CountUp target={kpi.value} suffix={kpi.suffix} active={inView} />
              </div>
              <div className="text-sm font-semibold text-[#334155] uppercase tracking-wider">
                {kpi.label}
              </div>
              <p className="text-xs text-[#475569] leading-relaxed hidden md:block">
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
