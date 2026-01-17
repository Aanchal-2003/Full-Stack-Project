const brandRouter = require("express").Router();
const { create, get, update, deleteById, getById, updateById } = require("../controllers/brand.controllers");
const fileUpload = require("express-fileupload");


brandRouter.post("/create", fileUpload({ createParentPath: true }), create);
brandRouter.get("/", get);
brandRouter.patch("/status/:id", update);
brandRouter.delete("/delete/:id", deleteById);
brandRouter.get("/:id", getById);
brandRouter.put("/update/:id", fileUpload({ createParentPath: true }), updateById)


module.exports = brandRouter;