import { type Request, type Response, type NextFunction } from 'express'
/**
 * Wrapper function
 *
 * @param {function} fn
 * @returns {function}
 */
export default function asyncHandler (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    // Returns resolved promise
    await Promise.resolve(fn(req, res, next)).catch(next)
  }
}
