"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoute = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const protectedRoute = (req, res, next) => {
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1];
        const decodeToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decodeToken;
    }
    else {
        return res.status(400).json({
            message: "You are not authenticated. Please contact administrator.",
        });
    }
    next();
};
exports.protectedRoute = protectedRoute;
