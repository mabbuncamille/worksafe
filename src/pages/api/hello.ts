// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../lib/db';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await executeQuery({
      query: 'SELECT * FROM `roles`',
      values: [req.body.content],
    });
    res.status(200).json(result);
  } catch (error) {}
}
