import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import executeQuery from '@/lib/db';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { userName, password } = req.body.data;

  try {
    const rows = await executeQuery({
      query: 'SELECT * FROM users WHERE userName = ?',
      values: [userName],
    });

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found.' });
    }

    const user = rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    res.status(200).json({ message: 'Login Successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
