const { create, get, update, deleteById, getById, updateById } = require("../controllers/category.controllers");
const categoryRouter = require("express").Router();
const fileUpload = require("express-fileupload");

categoryRouter.post("/create", fileUpload({ createParentPath: true }), create);
categoryRouter.get("/", get);
categoryRouter.patch("/status/:id", update);
categoryRouter.delete("/delete/:id", deleteById);
categoryRouter.get("/:id", getById);
categoryRouter.put("/update/:id", fileUpload({ createParentPath: true }),updateById);



module.exports = categoryRouter;