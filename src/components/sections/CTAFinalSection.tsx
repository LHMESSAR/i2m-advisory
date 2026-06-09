"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/shared/Container";

const schema = z.object({
  name: z.string().min(2, "Prénom et nom requis (2 caractères minimum)"),
  email: z.string().email("Adresse email invalide"),
  company: z.string().min(1, "Société requise"),
});

type FormData = z.infer<typeof schema>;

export function CTAFinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "cta_final" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError(true);
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 bg-[#0F172A] overflow-hidden"
      aria-labelledby="cta-final-heading"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Amber glow */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 bg-[#CA8A04] opacity-[0.07] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4 mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#CA8A04]">
            Contact
          </p>
          <h2
            id="cta-final-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance"
          >
            Discutons de votre prochain projet data
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            Un associé vous répond dans les 48 heures pour comprendre vos enjeux
            et vous proposer une note de cadrage initiale.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center p-8 bg-white/[0.06] border border-white/[0.12] rounded-2xl"
          >
            <CheckCircle className="w-12 h-12 text-[#CA8A04] mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white mb-2">Message envoyé</h3>
            <p className="text-slate-300 text-sm">
              Un associé vous contactera dans les 48 heures ouvrées. Merci de votre intérêt pour I2M Advisory.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Formulaire de prise de contact"
            className="max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              {/* Name */}
              <div>
                <label htmlFor="cta-name" className="sr-only">
                  Prénom et nom
                </label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Prénom Nom"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cta-name-error" : undefined}
                  {...register("name")}
                  className="w-full px-4 py-3 text-sm bg-white/[0.07] border border-white/[0.15] text-white placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-all"
                />
                {errors.name && (
                  <p id="cta-name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="cta-email" className="sr-only">
                  Adresse email professionnelle
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="email@société.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cta-email-error" : undefined}
                  {...register("email")}
                  className="w-full px-4 py-3 text-sm bg-white/[0.07] border border-white/[0.15] text-white placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p id="cta-email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="cta-company" className="sr-only">
                  Société
                </label>
                <input
                  id="cta-company"
                  type="text"
                  placeholder="Société"
                  autoComplete="organization"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "cta-company-error" : undefined}
                  {...register("company")}
                  className="w-full px-4 py-3 text-sm bg-white/[0.07] border border-white/[0.15] text-white placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-all"
                />
                {errors.company && (
                  <p id="cta-company-error" className="mt-1 text-xs text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#CA8A04] text-white font-semibold rounded-lg hover:bg-[#B45309] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] cursor-pointer"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Prendre rendez-vous
                </>
              )}
            </button>

            {serverError && (
              <p className="mt-3 text-xs text-red-400 text-center" role="alert">
                Une erreur est survenue. Contactez-nous directement à contact@i2m-advisory.fr
              </p>
            )}

            <p className="mt-4 text-xs text-slate-500 text-center">
              Données traitées conformément au RGPD. Aucun démarchage commercial.
              <br />
              Ou contactez-nous directement :{" "}
              <a href="mailto:contact@i2m-advisory.fr" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">
                contact@i2m-advisory.fr
              </a>
            </p>
          </motion.form>
        )}
      </Container>
    </section>
  );
}
