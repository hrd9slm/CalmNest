import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

interface User {
  id: Number;
  email: string;
 
  
}

function generateToken(user: User): string {
  const payload = {
    id: user.id,
    email: user.email,
 
  };

  const secret = process.env.JWT_SECRET as string; 
  const options: SignOptions = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
}


function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function getIdFromToken(token: string): number | null {
  const payload = verifyToken(token);
  if (payload && typeof payload.id === 'number') {
    return payload.id;
  }
  return null;
}

export { generateToken, verifyToken, getIdFromToken };