const { sendServerError, sendSuccess } = require("../utils/responseHelpers");
const cartModel = require("../models/cart.models");

const cartSync = async (req, res) => {
    // console.log("REQ BODY:", req.body);
    try {
        const { cart, userId } = req.body;
        if (cart == null || cart.length < 0) {
            return res.status(200).json({
                message: "User Cart Found",
                cart: await cartModel.find({ userId }).populate('productId'),
                success: true,
                imageBaseUrl: "/_/backend/images/product/main/"
            })
        }

        await Promise.all(
            cart.map(async (cd) => {
                const existingProduct = await cartModel.findOne({
                    userId: userId,
                    productId: cd.id
                })
                if (existingProduct) {
                    // qty increase
                    existingProduct.qty += Number(cd.qty);
                    await existingProduct.save();
                } else {
                    // new add
                    cartModel.create({
                        userId,
                        productId: cd.id,
                        qty: cd.qty
                    })

                }
            })
        )

        return res.status(200).json({
            message: "User Cart Found",
            cart: await cartModel.find({ userId }).populate('productId'),
            success: true,
            imageBaseUrl: "/_/backend/images/product/main/"
        })

    } catch (error) {
        return sendServerError(res);
    }
}

const addToCart = async (req, res) => {
    try {
        const { productId, userId, flag } = req.body;
        const existingProduct = await cartModel.findOne({
            userId: userId,
            productId: productId
        })
        if (existingProduct) {
            // qty increase
            if (flag == 2) {
                existingProduct.qty--;
            } else {
                existingProduct.qty++;
            }
            await existingProduct.save();
        } else {
            // new add
            await cartModel.create({
                userId,
                productId: productId,
                qty: 1
            })

        }

        return res.status(200).json({
            success: true,
            message: "User Cart Found",
            cart: await cartModel.find({ userId }).populate('productId'),
            imageBaseUrl: "/_/backend/images/product/main/"
        })

    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

module.exports = {
    cartSync,
    addToCart
}