import executeQuery from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { useRouter } from '@/routes/hooks/use-router';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      fullname,
      username,
      email,
      password,
      role_id,
      status,
      date_created,
    } = req.body.data;

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await executeQuery({
      query:
        'INSERT INTO users (fullName, username, email, password, role_id, status, date_created) VALUES (?, ?, ?, ?, ?, ?, ?)',
      values: [
        fullname,
        username,
        email,
        hashedPassword,
        role_id,
        status,
        date_created,
      ],
    });

    res.status(201).json({ message: 'User inserted successfully.' });
  } catch (error) {
    console.log(error);
  }
}
