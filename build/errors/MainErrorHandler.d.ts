import { Response, Request, NextFunction } from "express";
export interface Errors extends Error {
    statusCode?: number;
    status?: string;
    code?: number;
}
export declare const MainErrorHandler: (err: Errors, req: Request, res: Response, next: NextFunction) => void;
