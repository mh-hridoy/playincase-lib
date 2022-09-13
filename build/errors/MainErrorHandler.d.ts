export interface Errors extends Error {
    statusCode?: number;
    status?: string;
    code?: number;
}
