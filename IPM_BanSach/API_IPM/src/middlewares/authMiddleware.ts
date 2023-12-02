import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt';
import multer from 'multer';
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // Get the JWT token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
  }
  // Verify the token
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
  }
  next();
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
