const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 10
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        maxLength: 15
    },
    code: {
        type: String,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("color", colorSchema);