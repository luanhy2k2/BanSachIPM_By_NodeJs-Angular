const jwt = require("../config/jwt");
const multer = require("multer");
const express = require("express");

const authenticate = (req, res, next) => {
    // Get the JWT token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    // Verify the token
    const decodedToken = jwt.verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ message: 'Bạn không được cấp quyền!' });
    }
    next();
};

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });
module.exports = authenticate;

