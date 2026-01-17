const brandModel = require("../models/brand.models");
const { uniqueName } = require("../utils/helper");
const { sendServerError, sendAllFieldsRequired, sendCreated, sendNotFound, sendSuccess, sendUpdated, sendDeleted, sendAlreadyExist } = require("../utils/responseHelpers");
const fs = require("fs");

const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const brandImage = req.files.image;
        if (!name || !slug || !brandImage) return sendAllFieldsRequired(res);
        const isBrandExist = await brandModel.findOne({ name });
        if (isBrandExist) return sendAlreadyExist(res);
        const image = uniqueName(brandImage.name);
        const destination = "./public/images/brand/" + image;
        brandImage.mv(
            destination,
            async (error) => {
                if (error) return sendServerError(res, "Unable to Uplaod file");
                const brand = await brandModel.create({ name, slug, image });
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
        const brand = await brandModel.find();
        return sendSuccess(res, "Brand Find", brand);

    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}

const update = async (req, res) => {
    try {
        const { field } = req.body;
        const { id } = req.params;

        const fields = ["status", "is_top", "is_best", "is_home"];
        if (!fields.includes(field)) {
            return res.status(400).json({
                success: false,
                message: "Invalid field for update"
            })
        }

        const brand = await brandModel.findById(id);
        if (!brand) return sendNotFound(res);
        console.log({ [field]: !brand[field] })

        await brandModel.findByIdAndUpdate(id, { [field]: !brand[field] });
        const message = `${field} Status Updated Successfully`;
        return sendUpdated(res, message);

    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const brand = await brandModel.findById(id);
        if (!brand) return sendNotFound(res);
        await brandModel.findByIdAndDelete(id)
        fs.unlinkSync(`./public/images/brand/${brand.image}`);
        return sendDeleted(res);

    } catch (error) {
        return sendServerError(res)
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const brand = await brandModel.findById(id);
        if (!brand) return sendNotFound(res);
        return sendSuccess(res, "Brand Find", brand);
    } catch (error) {
        return sendServerError(res);
    }
}


const updateById = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const id = req.params.id;
        const brand_image = req.files != null ? req.files.image : null;
        const brand = await brandModel.findById(id);
        if (!brand) return sendNotFound(res);

        const update = {};
        if (name) update.name = name;
        if (slug) update.slug = slug;

        if (brand_image != null) {
            const image = uniqueName(brand_image.name);
            const destination = "./public/images/brand/" + image;
            brand_image.mv(
                destination,
                async (error) => {
                    if (error) return sendServerError(res, "Unable to upload file");
                    if (image) update.image = image;
                    await brandModel.updateOne(
                        { _id: id },
                        {
                            $set: update
                        }
                    )
                }
            )
        } else {
            await brandModel.updateOne(
                { _id: id },
                {
                    $set: update
                }
            )
            return sendUpdated(res, "Brand Update Successfully");
        }

    } catch (error) {
        console.log(error)
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