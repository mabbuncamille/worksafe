import executeQuery from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { sendEmail } from '@/utils/mailer';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, password, role } = await req.body;

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
        'INSERT INTO users (fullName, email, password, verified, accountCreated) VALUES (?, ?, ?, ?, ?)',
      values: [
        fullName,
        email,
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

    await sendEmail(email, { newUserId, email });
    res.status(200).json({
      message: 'Registration successful. Verification email sent.',
    });
  } catch (error) {
    console.log(error, 'ERROR');
    res.status(500).json({ message: 'Internal server error' });
  }
}
