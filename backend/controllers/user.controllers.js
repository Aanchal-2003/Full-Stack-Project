const UserModel = require("../models/user.model");
const Cryptr = require('cryptr');
const { sendServerError, sendAllFieldsRequired, sendCreated, sendNotFound, sendSuccess } = require("../utils/responseHelpers");
const cryptr = new Cryptr(process.env.SECRET_KEY);
var jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return sendAllFieldsRequired(res);
        
        // Check if user already exists
        const isUserExist = await UserModel.findOne({ email });
        if (isUserExist) return sendAlreadyExist(res, "Email already in use");

        const encryptedPass = cryptr.encrypt(password);
        await UserModel.create({ name, email, password: encryptedPass });
        return sendCreated(res, "User Account Created");
    } catch (error) {
        return sendServerError(res);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return sendAllFieldsRequired(res);
        const user = await UserModel.findOne({ email });
        if (!user) return sendNotFound(res, "User Not Found");
        if (password !== cryptr.decrypt(user.password)) {
            return sendNotFound(res, "Incorrect Password");
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.SECRET_KEY, { expiresIn: 7 * 24 * 60 * 60 * 1000 });

        res.cookie("user_token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, //Cookie expiresin 7 days (millisecond)
            httpOnly: true, // Prevents client-side Javascript access (secruity best practise)
            secure: false, //Ensures the cookie is the only sent over HTTPS (use in produvtion)
            sameSite: "Lax"
        })

        return sendSuccess(res, "User Login", { userId: user._id });

    } catch (error) {
        return sendServerError(res);
    }
}

const getMe = async (req, res, next) => {
    try {
        const user = req.user;
        return sendSuccess(res, "User Data", user)
    } catch (error) {
        return sendServerError(res);
    }
}

// address add api
const addressAdd = async (req, res) => {
    try {
        const userId = req.user._id;
        const { addressLine1, addressLine2, city, state, postalCode, country } = req.body;
        
        if (!addressLine1 || !addressLine2 || !city || !state || !postalCode || !country) {
            return sendAllFieldsRequired(res);
        }

        const userData = await UserModel.findByIdAndUpdate(
            userId,
            { $push: { shipping_address: { ...req.body } } },
            { new: true }
        )
        return sendSuccess(res, "Address added successfully", userData.shipping_address);
    } catch (err) {
        return sendServerError(res, err);
    }
};



// change password api

// logout

const logout = (req, res) => {
    try {
        res.clearCookie("user_token", {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            path: "/"
        });

        return res.status(200).json({
            success: true,
            message: "Logout Successful"
        });

    } catch (error) {
        return sendServerError(res);
    }
}

module.exports = {
    register,
    login,
    getMe,
    addressAdd,
    logout
}