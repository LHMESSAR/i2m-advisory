import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#CA8A04] text-white hover:bg-[#B45309] active:scale-[0.98]",
    secondary:
      "bg-transparent text-[#0F172A] border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 active:scale-[0.98]",
    white:
      "bg-white text-[#0F172A] hover:bg-slate-100 active:scale-[0.98]",
  };

  const sizes = {
    sm:  "px-4 py-2 text-sm",
    md:  "px-6 py-3 text-sm md:text-base",
    lg:  "px-8 py-4 text-base md:text-lg",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}
