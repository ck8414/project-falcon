import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, title, org, email, phone, inquiry, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
      <div style="background:#142254;padding:24px 32px;border-radius:6px 6px 0 0;border-bottom:4px solid #C4973C;">
        <h1 style="color:#fff;margin:0;font-size:22px;">New Contact Form Submission</h1>
        <p style="color:#9AAAC8;margin:6px 0 0;font-size:14px;">G&amp;C Capital Holdings — Website Inquiry</p>
      </div>
      <div style="background:#fff;padding:32px;border-radius:0 0 6px 6px;border:1px solid #e0e0e0;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          ${[
            ["Full Name", name],
            ["Title / Role", title],
            ["Organization", org],
            ["Email", `<a href="mailto:${email}">${email}</a>`],
            ["Phone", phone || "—"],
            ["Inquiry Type", inquiry],
          ]
            .map(
              ([label, val]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#6B7A99;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;width:140px;vertical-align:top;">${label}</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#0D1A3A;">${val}</td>
            </tr>`
            )
            .join("")}
        </table>
        ${
          message
            ? `<div style="margin-top:24px;padding:20px;background:#f5f5f5;border-radius:6px;border-left:3px solid #C4973C;">
                <p style="font-size:12px;color:#6B7A99;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;">Message</p>
                <p style="font-size:15px;color:#0D1A3A;margin:0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
              </div>`
            : ""
        }
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e0e0e0;">
          <p style="font-size:13px;color:#9AAAC8;margin:0;">Submitted via gccapitalholdings.com contact form</p>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"G&C Capital Website" <${process.env.SMTP_USER}>`,
      to: "info@gccapitalholdings.com",
      replyTo: email,
      subject: `[Website Inquiry] ${inquiry} — ${name} at ${org}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
