require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin: process.env.FRONTEND_URL || true, 
    credentials: true 
}));
app.use(express.static("public"));

app.use("/category", require("./routers/category.router"));
app.use("/brand", require("./routers/brand.router"));
app.use("/color", require("./routers/color.router"));
app.use("/product", require("./routers/product.router"));
app.use("/user", require("./routers/user.router"));
app.use("/cart", require("./routers/cart.router"));
app.use("/order", require("./routers/order.router"));

mongoose.connect(process.env.DATABASE_URL).then(
    () => {
        console.log("MongoDB connected successfully")

        app.listen(
            process.env.PORT,
            () => {
                console.log(`Server is running on port ${process.env.PORT}`)
            }
        )
    }
).catch(
    (error) => {
        console.log("MongoDB connection failed");
        console.log(error)
        // console.log(error.message);
    }
)