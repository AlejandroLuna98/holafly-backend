"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.status(401).json({
            message: 'Unauthorized token',
        });
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.JWT);
        req.user = verified;
        next();
    }
    catch (e) {
        res.status(400).json({ message: 'Invalid Token', e });
    }
};
exports.validateJWT = validateJWT;
