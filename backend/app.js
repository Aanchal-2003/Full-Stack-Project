require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }))
app.use("/category", require("./routers/category.router"));
app.use("/brand", require("./routers/brand.router"));
app.use("/color", require("./routers/color.router"));
app.use("/product", require("./routers/product.router"));
app.use(express.static("public"));

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