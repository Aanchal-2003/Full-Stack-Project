const { create, get, update, deleteById, getById, updateById } = require("../controllers/color.controllers");
const colorRouter = require("express").Router();


colorRouter.post("/create", create);
colorRouter.get("/", get);
colorRouter.patch("/status/:id", update);
colorRouter.delete("/delete/:id", deleteById);
colorRouter.get("/:id", getById);
colorRouter.put("/update/:id", updateById);


module.exports = colorRouter;