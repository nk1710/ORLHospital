// sendEmail.js

import { transporter } from "./mailer";


export async function sendEmail({ subject, html, to }) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to || process.env.EMAIL_USER,
    subject,
    html,
  });
}
export async function sendConfirmationEmail({ subject, html, to }) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to || process.env.EMAIL_USER,
    subject,
    html,
  });
}