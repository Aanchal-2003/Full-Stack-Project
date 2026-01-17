const categoryModel = require("../models/category.models");
const { uniqueName } = require("../utils/helper.js");
const fs = require("fs");
const { sendAllFieldsRequired, sendAlreadyExist, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotFound, sendDeleted } = require("../utils/responseHelpers.js");


const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const categoryImage = req.files.image;
        if (!name || !slug || !categoryImage) {
            return sendAllFieldsRequired(res);
        }
        const isCategoryExist = await categoryModel.findOne({ name });
        if (isCategoryExist) return sendAlreadyExist(res);
        const image = uniqueName(categoryImage.name);
        const destination = "./public/images/category/" + image;
        categoryImage.mv(
            destination,
            async (error) => {
                if (error) return sendServerError(res, "Unable to upload file");
                const category = await categoryModel.create({ name, slug, image });
                return sendCreated(res);
            }
        )
    } catch (error) {
        return sendServerError(res);
    }
}

const get = async (req, res) => {
    try {
        const category = await categoryModel.find();
        return sendSuccess(res, "Category Find", category);
    } catch (error) {
        return sendServerError(res);
    }
}

const update = async (req, res) => {
    try {
        const { field } = req.body;
        const { id } = req.params;

        const fields = ["status", "is_top", "is_home", "is_best"];
        if (!fields.includes(field)) {
            return res.status(400).json({
                success: false,
                message: "Invalid field for update"
            })
        }

        const category = await categoryModel.findById(id);
        if (!category) {
            return sendNotFound(res);
        }

        await categoryModel.findByIdAndUpdate(id, { [field]: !category[field] });
        const message = `${field} Status Updated Successfully`;
        return sendUpdated(res, message);

    } catch (error) {
        return sendServerError(res);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryModel.findById(id);
        if (!category) {
            return sendNotFound(res);
        }
        await categoryModel.findByIdAndDelete(id);
        fs.unlinkSync(`./public/images/category/${category.image}`);
        return sendDeleted(res)

    } catch (error) {
        return sendServerError(res);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryModel.findById(id);
        if (!category) return sendNotFound(res);
        return sendSuccess(res, "Category Find", category);
    } catch (error) {
        return sendServerError(res);
    }
}

const updateById = async (req, res) => {    
    try {
        const { name, slug } = req.body;
        const id = req.params.id;
        const category_image = req.files != null ? req.files.image : null;
        const category = await categoryModel.findById(id);
        if (!category) return sendNotFound(res);


        const update = {};
        if (name) update.name = name;
        if (slug) update.slug = slug;

        if (category_image != null) {
            const image = uniqueName(category_image.name);
            const destination = "./public/images/category/" + image;
            category_image.mv(
                destination,
                async (error) => {
                    if (error) return sendServerError(res, "Unable to upload file");
                    if (image) update.image = image;

                    await categoryModel.updateOne(
                        { _id: id },
                        {
                            $set: update
                        }
                    )

                    fs.unlinkSync(`./public/images/category/${category.image}`);
                    return sendUpdated(res, " Category Update Successfully")
                }
            )
        } else {
            await categoryModel.updateOne(
                { _id: id },
                {
                    $set: update
                }
            )

            return sendUpdated(res, " Category Update Successfully")
        }


    } catch (error) {
        return sendServerError(res);
    }
}


module.exports = {
    create,
    get,
    update,
    deleteById,
    getById,
    updateById
}