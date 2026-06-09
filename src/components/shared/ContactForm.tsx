"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Prénom et nom requis (2 caractères minimum)"),
  email: z.string().email("Adresse email invalide"),
  company: z.string().min(1, "Société requise"),
  subject: z.string().min(3, "Objet requis (3 caractères minimum)"),
  message: z.string().min(20, "Message trop court (20 caractères minimum)"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact_page" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-14 h-14 text-[#CA8A04] mb-4" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Message envoyé</h2>
        <p className="text-[#475569] max-w-sm">
          Un associé d&apos;I2M Advisory vous contactera dans les 48 heures ouvrées.
        </p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#020617] placeholder:text-[#94A3B8] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent ${
      hasError ? "border-red-400 bg-red-50" : "border-[#E2E8F0] hover:border-[#334155]"
    }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulaire de contact"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Prénom et nom <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Jean Dupont"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.name.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Société <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            placeholder="Société de gestion, banque…"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            {...register("company")}
            className={inputClass(!!errors.company)}
          />
          {errors.company && (
            <p id="contact-company-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.company.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          Email professionnel <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="jean.dupont@societe.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          Objet <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Ex : Projet de refonte data NAV, conformité SFDR…"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          {...register("subject")}
          className={inputClass(!!errors.subject)}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Décrivez votre contexte, vos enjeux data, et ce que vous attendez du cabinet…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />{errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-600 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" aria-hidden="true" />
          Une erreur est survenue. Contactez-nous directement à contact@i2m-advisory.fr
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-[#94A3B8]">
          Données traitées conformément au RGPD.{" "}
          <a href="/politique-confidentialite" className="underline underline-offset-2 hover:text-[#334155] transition-colors">
            Politique de confidentialité
          </a>
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white text-sm font-semibold rounded-lg hover:bg-[#1E293B] active:scale-[0.99] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CA8A04] focus-visible:ring-offset-2 shrink-0"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
              Envoi…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
