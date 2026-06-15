import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, subject, message } = await req.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"TenancyPaper Contact" <${process.env.EMAIL_USER}>`,
      to: 'contact@arsal.dev',
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      html: `
        <div style="background-color: #eef2ff; border-left: 4px solid #4f46e5; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0; color: #3730a3; font-size: 16px;">
            🔔 <strong>Notice:</strong> This contact submission is directly from the <strong>tenancypaper.com</strong> domain.
          </p>
        </div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <div style="background-color: #f9fafb; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <p style="margin: 0; font-family: sans-serif; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email via Nodemailer:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
