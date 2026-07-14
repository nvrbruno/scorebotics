import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './auth.middleware';

export function requireResponsible(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (req.user?.role !== 'responsible') {
    return res.status(403).json({ message: 'Access denied. Responsible only.' });
  }
  next();
}