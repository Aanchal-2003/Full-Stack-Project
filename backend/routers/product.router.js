const { create, get, getById, otherImageAdd, update, updateById, deleteById } = require("../controllers/product.controller");
const productRouter = require("express").Router();
const fileUpload = require("express-fileupload");


productRouter.post("/create", fileUpload({ createParentPath: true }), create);
productRouter.get("/", get);
productRouter.patch("/status/:id", update);
productRouter.delete("/delete/:id", deleteById);
productRouter.get("/:id", getById);
productRouter.put("/update/:id", fileUpload({ createParentPath: true }), updateById);
productRouter.post("/otherImageAdd/:id", fileUpload({ createParentPath: true }), otherImageAdd);


module.exports = productRouter;