const categoryModel = require("../models/category.models");
const productModel = require("../models/product.models");
const brandModel = require("../models/brand.models");
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
        const query = req.query;
        const searchFilter = {};
        const sortFilter = {};
        const limit = query.limit != null ? query.limit : 0;

       if (query.sort === "price_asc") {
            sortFilter.final_price = 1;
        } else if (query.sort === "price_desc") {
            sortFilter.final_price = -1;
        } else {
            sortFilter.createdAt = -1
        }

        if (query.id) searchFilter._id = query.id;
        if (query.status) searchFilter.status = query.status == "true" ? true : false;
        if (query.is_home) searchFilter.is_home = query.is_home == "true" ? true : false;
        if (query.stock) searchFilter.stock = query.stock == "true" ? true : false;
        if (query.is_best_seller) searchFilter.is_best_seller = query.is_best_seller == "true" ? true : false;
        if (query.is_featured) searchFilter.is_featured = query.is_featured == "true" ? true : false;
        if (query.is_hot) searchFilter.is_hot = query.is_hot == "true" ? true : false;

        if (query.categorySlug) {
            const category = await categoryModel.findOne({ slug: query.categorySlug });
            searchFilter.category_id = category._id;
        }

        if (query.brandSlug) {
            const brand = await brandModel.findOne({ slug: query.brandSlug });
            searchFilter.brand_id = brand._id;
        }

        if (query.color_ids) {
            searchFilter.color_ids = query.color_ids;
        }

        if (query.max_price && query.min_price) {
            searchFilter.final_price = {
                $gte: Number(query.min_price),
                $lte: Number(query.max_price)
            }
        }
        const product = await productModel.find(searchFilter).populate([
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
        ]).sort(sortFilter).limit(limit);
        
        return sendSuccess(res, "Product Find", { product, imageBaseUrl: "/_/backend/images/product/" });
    } catch (error) {
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
        return sendSuccess(res, "Product Find", { product, imageBaseUrl: "/_/backend/images/product/" });
    } catch (error) {
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
        if (category_id) update.category_id = category_id;
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
            const all_promise = imageFile.map(async (file) => {
                const image = uniqueName(file.name);
                const destination = "./public/images/product/other/" + image;
                other_images_name.push(image);
                return await file.mv(destination);
            })

            await Promise.all(all_promise);

        } else {
            const image = uniqueName(imageFile.name);
            const destination = "./public/images/product/other/" + image;
            other_images_name.push(image);
            await imageFile.mv(destination)
        }

        product.other_images = other_images_name;
        await product.save();
        return sendCreated(res, "Added Successfully");

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