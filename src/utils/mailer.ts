import { paths } from '@/routes/paths';
import nodemailer from 'nodemailer';
import { generateToken } from './auth';

export async function sendEmail(to: string, emailPayload: any) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_PERSONAL_EMAIL,
      pass: process.env.NODEMAILER_EMAIL_PASSWORD,
    },
  });

  const token = generateToken(emailPayload);
  const url = `${process.env.DOMAIN}${paths.auth.verify}?token=${token}`;

  let mailOptions = {
    from: 'mabbuncamille@gmail.com',
    to,
    subject: 'Verify Your Email Address',
    html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
  };

  await transporter.sendMail(mailOptions);
}
