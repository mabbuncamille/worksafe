import executeQuery from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { paths } from '@/routes/paths';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, username, email, password, role } = await req.body;

  try {
    const existingUser = await executeQuery({
      query: 'SELECT * FROM users WHERE email = ?',
      values: [email],
    });

    if (existingUser.length > 0) {
      return res.status(400).json({
        message: 'Email already in use.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await executeQuery({
      query:
        'INSERT INTO users (fullName, email, username, password, verified, accountCreated) VALUES (?, ?, ?, ?, ?, ?)',
      values: [
        fullName,
        email,
        username,
        hashedPassword,
        0, // Default
        new Date().toISOString().split('T')[0],
      ],
    });

    //For MySQL in a Node.js environment, you often use LAST_INSERT_ID(). If you are using a library like mysql or mysql2 in Node.js, the ID is typically returned as part of the result object from the insert query.
    const newUserId: number = newUser.insertId;
    await executeQuery({
      query: 'INSERT INTO user_roles (userId, roleId) VALUES (?, ?)',
      values: [newUserId, Number(role)],
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const token: string = jwt.sign(
      { newUserId, email, username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '24h',
      }
    );

    const url = `${process.env.DOMAIN}${paths.auth.verify}?token=${token}`;

    let mailOptions = {
      from: 'mabbuncamille@gmail.com',
      to: email,
      subject: 'Verify Your Email Address',
      html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: 'Registration successful. Verification email sent.' });
  } catch (error) {
    console.log(error, 'ERROR');
    res.status(500).json({ message: 'Internal server error' });
  }
}
