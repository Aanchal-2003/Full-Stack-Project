const productModel = require("../models/product.models");
const { uniqueName } = require("../utils/helper");
const { sendServerError, sendAllFieldsRequired, sendAlreadyExist, sendCreated, sendSuccess, sendNotFound, sendUpdated, sendDeleted } = require("../utils/responseHelpers");
const fs = require("fs");


const create = async (req, res) => {
    try {
        const { name, slug, description, original_price, discount_percentage, final_price, category_id, color_ids, brand_id } = req.body;
        const thumbnail = req.files.thumbnail;
        if (!name || !slug || !description || !original_price || !discount_percentage || !final_price || !category_id || !color_ids || !brand_id || !thumbnail) return sendAllFieldsRequired(res);
        const isProductExist = await productModel.findOne({ name });
        if (isProductExist) return sendAlreadyExist(res);
        const image = uniqueName(thumbnail.name);
        const destination = "./public/images/product/main/" + image;
        thumbnail.mv(
            destination,
            async (error) => {
                if (error) return sendServerError(res, "Unable to Uplaod File");
                const product = await productModel.create({ ...req.body, color_ids: JSON.parse(color_ids), thumbnail: image });
                return sendCreated(res);
            }
        )
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const get = async (req, res) => {
    try {
        const product = await productModel.find().populate([
            {
                path: "category_id",
                select: "name slug"
            },
            {
                path: "color_ids",
                select: "name code"
            },
            {
                path: "brand_id",
                select: "name slug"
            }
        ]);
        return sendSuccess(res, "Product Find", { product, imageBaseUrl: "http://localhost:5000/images/product/" });
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const update = async (req, res) => {
    try {
        const { field } = req.body;
        const id = req.params.id;

        const fields = ["status", "is_best_seller", "is_home", "is_featured", "is_hot"];
        if (!fields.includes(field)) {
            return res.status(400).json({
                success: false,
                message: "Invalid field for update"
            })
        }

        const product = await productModel.findById(id);
        if (!product) return sendNotFound(res);

        await productModel.findByIdAndUpdate(id, { [field]: !product[field] })
        const message = `${field} Status Updated Successfully`;
        return sendUpdated(res, message);
    } catch (error) {
        return sendServerError(res)
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        if (!product) return sendNotFound(res);
        await productModel.findByIdAndDelete(id);
        fs.unlinkSync(`./public/images/product/main/${product.thumbnail}`);
        return sendDeleted(res);

    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);
        if (!product) return sendNotFound(res);
        return sendSuccess(res, "Product Find", product);
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}

const updateById = async (req, res) => {
    try {
        const { name, slug, description, original_price, discount_percentage, final_price, category_id, color_ids, brand_id } = req.body;
        const id = req.params.id;
        const product_image = req.files != null ? req.files.thumbnail : null;
        const product = await productModel.findById(id)
        if (!product) return sendNotFound(res);

        const update = {};
        if (name) update.name = name;
        if (slug) update.slug = slug;
        if (description) update.description = description;
        if (original_price) update.original_price = original_price;
        if (discount_percentage) update.discount_percentage = discount_percentage;
        if (final_price) update.final_price = final_price;
        if (color_ids) update.color_ids = color_ids;
        if (brand_id) update.brand_id = brand_id;


        if (product_image != null) {
            const image = uniqueName(product_image.name);
            const destination = "./public/images/product/main/" + image;
            product_image.mv(
                destination,
                async (error) => {
                    if (error) return sendServerError(res, "Unable to upload file");
                    if (image) update.image = image;

                    await productModel.updateOne(
                        { _id: id },
                        {
                            $set: update
                        }
                    )

                    fs.unlinkSync(`./public/images/product/main/${product.image}`);
                    return sendUpdated(res, " Product Update Successfully")
                }
            )
        } else {
            await productModel.updateOne(
                { _id: id },
                {
                    $set: update
                }
            )

            return sendUpdated(res, " Product Update Successfully")
        }



    } catch (error) {
        return sendServerError(res);
    }
}

const otherImageAdd = async (req, res) => {
    try {
        const id = req.params.id;
        const imageFile = req.files.images;
        const product = await productModel.findById(id);
        if (!product) return sendNotFound(res);
        const other_images_name = product.other_images;

        if (Array.isArray(imageFile)) {
            console.log("Hello")
        } else {
            const image = uniqueName(imageFile.name);
            const destination = "./public/images/product/other/" + image;
            other_images_name.push(image)
            await imageFile.mv(destination)
        }

        product.other_images = other_images_name;
        await product.save();
        return sendCreated(res);

    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}


module.exports = {
    create,
    get,
    getById,
    otherImageAdd,
    update,
    updateById,
    deleteById
}