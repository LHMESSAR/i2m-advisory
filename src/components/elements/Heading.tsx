import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  id?: string;
}

export function Heading({ eyebrow, title, subtitle, align = "left", light, className, id }: HeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            light ? "text-[#CA8A04]" : "text-[#CA8A04]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.15]",
          light ? "text-white" : "text-[#0F172A]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-slate-300" : "text-[#475569]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
