import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import executeQuery from '@/lib/db';

interface JwtPayload extends jwt.JwtPayload {
  email: string;
  username: string;
}

export default async function verify(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token } = await req.body;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (decoded.email) {
      const result = await executeQuery({
        query: 'UPDATE users SET verified = TRUE WHERE email = ?',
        values: [decoded.email],
      });

      console.log(result, 'RESULT');
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Email verified successfully.' });
      } else {
        res.status(404).json({ message: 'User not found.' });
      }
    } else {
      res.status(400).json({ message: 'Invalid token.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error verifying email.' });
  }
}
