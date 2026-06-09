import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(100),
  message: z.string().max(2000).optional(),
  subject: z.string().max(200).optional(),
  source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, message, source } = parsed.data;

    // TODO: brancher Resend ou un autre mailer
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "site@i2m-advisory.fr",
    //   to: "contact@i2m-advisory.fr",
    //   subject: `Nouveau contact — ${name} (${company})`,
    //   html: `<p><strong>De :</strong> ${name} &lt;${email}&gt;</p>
    //          <p><strong>Société :</strong> ${company}</p>
    //          <p><strong>Source :</strong> ${source}</p>
    //          <p><strong>Message :</strong><br/>${message ?? "(aucun message)"}</p>`,
    // });

    console.info("[contact] New lead:", { name, email, company, source });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
