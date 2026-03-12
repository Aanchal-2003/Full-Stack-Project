const { register, login, getMe, logout, addressAdd } = require("../controllers/user.controllers");
const userRouter = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/me", authMiddleware, getMe);
userRouter.get("/logout", logout);
userRouter.post("/address/:id", addressAdd);

module.exports = userRouter;