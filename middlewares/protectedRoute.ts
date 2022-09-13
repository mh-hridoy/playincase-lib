import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

declare global {
  namespace Express {
    interface Request {
      user: any
    }
  }
}
export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1]

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = decodeToken
  } else {
    return res.status(400).json({
      message: "You are not authenticated. Please contact administrator.",
    })
  }
  next()
}
