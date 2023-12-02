"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.authenticate = void 0;
const jwt_1 = require("../config/jwt");
const multer_1 = __importDefault(require("multer"));
const authenticate = (req, res, next) => {
    // Get the JWT token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    // Verify the token
    const decodedToken = (0, jwt_1.verifyToken)(token);
    if (!decodedToken) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    next();
};
exports.authenticate = authenticate;
const storage = multer_1.default.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
exports.upload = (0, multer_1.default)({ storage });
