"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
}

export function Logo({ variant = "dark", className, compact = true }: LogoProps) {
  const isLight = variant === "light";
  const s = isLight ? "l" : "d";
  const f = compact ? "c" : "x";
  const g1 = `i2m-g1-${s}-${f}`;
  const g2 = `i2m-g2-${s}-${f}`;

  const blue0 = isLight ? "#7EC5F0" : "#509ED8";
  const blue1 = isLight ? "#4080C8" : "#1B3870";
  const advisoryColor = isLight ? "#FFFFFF" : "#1B3870";
  const taglineColor = isLight ? "rgba(255,255,255,0.55)" : "#607090";
  const sepColor = isLight ? "rgba(255,255,255,0.30)" : "#1B3870";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-2 rounded-sm",
        className
      )}
      aria-label="I2M Advisory — retour à l'accueil"
    >
      <svg
        viewBox={compact ? "0 0 180 78" : "0 0 240 108"}
        height={compact ? 44 : 72}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Horizontal gradient for i2m text and swoosh */}
          <linearGradient id={g1} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={blue0} />
            <stop offset="100%" stopColor={blue1} />
          </linearGradient>
          {/* Vertical gradient (bottom→top) for bar chart bars */}
          <linearGradient id={g2} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={blue0} />
            <stop offset="100%" stopColor={blue1} />
          </linearGradient>
        </defs>

        {/* i2m */}
        <text
          x="4"
          y="50"
          style={{ fontFamily: "var(--font-ibm-plex), 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif" }}
          fontSize="52"
          fontWeight="700"
          fill={`url(#${g1})`}
        >
          i2m
        </text>

        {/* Bar chart bars — positioned after "m", bottom aligned at baseline */}
        <rect x="84" y="22" width="8" height="28" rx="1.5" fill={`url(#${g2})`} opacity="0.80" />
        <rect x="94" y="12" width="8" height="38" rx="1.5" fill={`url(#${g2})`} />
        <rect x="104" y="30" width="8" height="20" rx="1.5" fill={`url(#${g2})`} opacity="0.70" />

        {/* Swoosh arc under i2m + bars */}
        <path
          d="M2 58 Q60 68 118 56"
          stroke={`url(#${g1})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* ADVISORY */}
        <text
          x="4"
          y="72"
          style={{ fontFamily: "var(--font-ibm-plex), 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif" }}
          fontSize="11"
          fontWeight="600"
          letterSpacing="5"
          fill={advisoryColor}
        >
          ADVISORY
        </text>

        {/* Separator + tagline (full variant only) */}
        {!compact && (
          <>
            <line x1="4" y1="80" x2="130" y2="80" stroke={sepColor} strokeWidth="0.8" />
            <text
              x="4"
              y="93"
              style={{ fontFamily: "var(--font-ibm-plex), 'IBM Plex Sans', 'Helvetica Neue', Helvetica, sans-serif" }}
              fontSize="7.5"
              fontWeight="400"
              letterSpacing="1.2"
              fill={taglineColor}
            >
              CONSEIL INFORMATIQUE EN FINANCE
            </text>
          </>
        )}
      </svg>
    </Link>
  );
}
