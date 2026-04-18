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

// Health check & root routes for deployment verification
app.get("/", (req, res) => res.json({ status: "Backend is running", message: "Swoo Tech Mart API" }));
app.get("/health", (req, res) => res.json({ 
    status: "healthy", 
    db: mongoose.connection.readyState === 1 ? "connected" : "connecting/disconnected" 
}));

app.use("/category", require("./routers/category.router"));
app.use("/brand", require("./routers/brand.router"));
app.use("/color", require("./routers/color.router"));
app.use("/product", require("./routers/product.router"));
app.use("/user", require("./routers/user.router"));
app.use("/cart", require("./routers/cart.router"));
app.use("/order", require("./routers/order.router"));

// Database Connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.error(error);
    });

// Start Server immediately for Vercel Multi-Service
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});