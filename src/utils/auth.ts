import jwt from 'jsonwebtoken';

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '1m',
  });
}
