const orderRouter = require("express").Router();
const { orderPlace, orderSuccess } = require("../controllers/order.controllers.js");

orderRouter.post("/create", orderPlace);
orderRouter.post("/success", orderSuccess);

module.exports = orderRouter;