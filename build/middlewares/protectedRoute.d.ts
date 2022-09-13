import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            user: any;
        }
    }
}
export declare const protectedRoute: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
