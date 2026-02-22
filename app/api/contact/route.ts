import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
  website?: string;
};

const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT || "465");
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactTo = process.env.CONTACT_TO;
const contactFrom = process.env.CONTACT_FROM || smtpUser;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot anti-bot field: real users keep it empty.
    if (sanitize(body.website).length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const nome = sanitize(body.nome);
    const email = sanitize(body.email);
    const telefone = sanitize(body.telefone);
    const mensagem = sanitize(body.mensagem);

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { ok: false, error: "Dados obrigatorios ausentes." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalido." },
        { status: 400 }
      );
    }

    if (!smtpUser || !smtpPass || !contactTo || !contactFrom) {
      return NextResponse.json(
        { ok: false, error: "Configuracao de email incompleta no servidor." },
        { status: 500 }
      );
    }

    const subject = `Contato pelo site - ${nome}`;
    const lines = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefone: ${telefone || "Nao informado"}`,
      "",
      "Mensagem:",
      mensagem,
    ];

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: contactFrom,
      to: contactTo.split(",").map((item) => item.trim()).filter(Boolean),
      replyTo: `${nome} <${email}>`,
      subject,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro ao processar envio." },
      { status: 500 }
    );
  }
}
