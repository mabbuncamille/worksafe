import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import executeQuery from '@/lib/db';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const rows = await executeQuery({
      query: 'SELECT * FROM users WHERE email = ?',
      values: [email],
    });

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found.' });
    }

    const user = rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        fullname: user.fullName,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1h',
      }
    );

    const serialized = serialize('authToken', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json({ message: 'Login Successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
