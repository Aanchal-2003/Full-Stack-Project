const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxLength: 150
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String
    },

    thumbnail: {
        type: String, // store file name and fullURL
        required: true
        // NOTE: Validate size during upload, not in Schema
    },

    original_price: {
        type: Number,
        default: 0
    },

    discount_percentage: {
        type: Number,
        required: 0
    },

    final_price: {
        type: Number,
        required: true
    },

    status: {
        type: Boolean,
        default: true
    },

    stock: {
        type: Boolean,
        default: true
    },

    is_best_seller: {
        type: Boolean,
        default: false
    },

    is_home: {
        type: Boolean,
        default: false
    },

    is_featured: {
        type: Boolean,
        default: false
    },

    is_hot: {
        type: Boolean,
        default: false
    },

    other_images: [
        {
            type: String // multiple filenames/URLs
        }
    ],

    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },

    color_ids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "color",
            required: true
        }
    ],

    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand",
        required: true
    }
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model("product", productSchema);