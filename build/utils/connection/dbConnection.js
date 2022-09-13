"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.MONGO_URI;
const dbConnection = () => {
    mongoose_1.default.connect(URI, (err) => {
        if (err)
            console.log(err);
        console.log("connected to MongoDB");
    });
};
exports.dbConnection = dbConnection;
