"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errorhandler = void 0;
class Errorhandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.Errorhandler = Errorhandler;
module.exports = Errorhandler;
