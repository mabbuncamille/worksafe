import { decodeToken } from '@/utils/auth';
import { sendEmail } from '@/utils/mailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function resendVerification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token } = req.body;
    console.log(token, 'TOKEN');
    const decoded = decodeToken(token as string, true);
    console.log(decoded, 'DECODED');
    if (decoded) {
      const { newUserId, email } = decoded;
      await sendEmail(email, { newUserId, email });
    }
    res.status(200).json({
      message: 'Verification email sent.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error in resend verification.' });
  }
}
