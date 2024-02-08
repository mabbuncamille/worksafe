import jwt, { JwtPayload } from 'jsonwebtoken';

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '24h',
  });
}

export function decodeToken(token: string, ignoreExpiration: boolean = false) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string, {
      ignoreExpiration,
    }) as JwtPayload;
  } catch (error) {
    return null;
  }
}
