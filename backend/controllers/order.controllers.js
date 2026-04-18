const { sendServerError } = require("../utils/responseHelpers");
const OrderModel = require("../models/order.models");
const cartModel = require("../models/cart.models");
const Razorpay = require('razorpay');
const crypto = require("crypto");

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const orderPlace = async (req, res) => {
    try {
        const { user_id, paymentMethod, shipping_address } = req.body;
        const cart = await cartModel.find({ userId: user_id }).populate("productId", '_id final_price');
        
        // Filter out cart items where productId might be null (product deleted)
        const validCart = cart.filter(item => item.productId);
        
        const productDetails = validCart.map((product) => {
            return {
                product_id: product.productId._id,
                qty: product.qty,
                price: product.productId.final_price,
                total: (product.productId.final_price) * (product.qty)
            }
        });

        const totalOrder = productDetails.reduce((sum, item) => {
            return sum + item.total
        }, 0)

        const order = await OrderModel.create({
            user_id: user_id,
            product_details: productDetails,
            order_total: totalOrder,
            payment_mode: paymentMethod,
            shipping_details: shipping_address
        });

        if (paymentMethod == 0) {
            await cartModel.deleteMany({ userId: user_id });
            return res.status(201).json({
                success: true,
                message: "Order placed",
                order_id: order._id
            })
        } else {
            var options = {
                amount: totalOrder * 100,  // Amount is in currency subunits. 
                currency: "INR",
                receipt: order._id.toString()
            };

            instance.orders.create(options, async function (err, Razorpayorder) {
                if (err) {
                    return sendServerError(res, "Order not Created")
                } else {
                    order.razorpay_order_id = Razorpayorder.id
                    await order.save()
                    return res.status(200).json({
                        success: true,
                        message: "Order placed",
                        order_id: order._id,
                        razorpay_order_id: Razorpayorder.id
                    });
                }
            });
        }

    } catch (error) {
        return sendServerError(res, error)
    }
}


const orderSuccess = async (req, res) => {
    try {
        const { order_id, user_id, razorpay_response } = req.body;
        const order = await OrderModel.findById(order_id);
        if (!order) {
            return sendNotFound(res)
        }
        // Verify the payment
        const generated_signature =
            crypto
                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                .update(razorpay_response.razorpay_order_id + "|" + razorpay_response.razorpay_payment_id)
                .digest("hex");
        if (generated_signature !== razorpay_response.razorpay_signature) {
            return sendServerError(res, "Invalid Signature")
        }
        // Update order status to paid
        order.payment_status = 1;
        order.order_status = 1;
        order.razorpay_payment_id = razorpay_response.razorpay_payment_id;
        await order.save();
        await cartModel.deleteMany({ userId: user_id });
        return res.status(200).json({
            success: true,
            status: true,
            message: "Order placed successfully",
            order_id: order._id
        })

    } catch (error) {
        console.error("Error in order success:", error.message);
        return sendServerError(res, error)
    }
}

module.exports = {
    orderPlace,
    orderSuccess
}