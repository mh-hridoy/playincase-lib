export declare class Errorhandler extends Error {
    statusCode?: number;
    status: string;
    constructor(message: string, statusCode?: number);
}
