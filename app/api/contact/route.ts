import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111;">New message from your portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 80px;"><strong>Name</strong></td>
            <td style="padding: 8px 0; color: #111;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Email</strong></td>
            <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Subject</strong></td>
            <td style="padding: 8px 0; color: #111;">${subject}</td>
          </tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
