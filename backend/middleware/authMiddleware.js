var jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");
const { sendNotFound } = require('../utils/responseHelpers');

async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please Logged IN"
            })
        }

        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModel.findById({ _id: decoded.id }).select("-password");

        if (!user) {
            return sendNotFound(res, "User not found")
        }
        req.user = user;
        next()

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token Expire"
        })
    }
}

module.exports = authMiddleware;