import { Request, Response, NextFunction } from 'express';
/**
 * Wrapper function
 * 
 * @param {function} fn 
 * @returns {function}
 */
export default function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return function (req: Request, res: Response, next: NextFunction): Promise<void> {
    // Returns resolved promise
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
