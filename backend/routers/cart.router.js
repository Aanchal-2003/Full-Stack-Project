const cartRouter = require("express").Router();
const { cartSync, addToCart } = require("../controllers/cart.controllers");

cartRouter.post("/sync", cartSync);
cartRouter.post("/add-to-cart", addToCart);

module.exports = cartRouter;