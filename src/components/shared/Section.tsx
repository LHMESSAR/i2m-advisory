import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  alt?: boolean;
}

export function Section({ children, className, id, dark, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        dark && "bg-[#0F172A] text-[#F8FAFC]",
        alt && "bg-[#F1F5F9]",
        !dark && !alt && "bg-[#F8FAFC]",
        className
      )}
    >
      {children}
    </section>
  );
}
