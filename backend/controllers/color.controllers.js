const colorModel = require("../models/color.models");
const { sendServerError, sendAlreadyExist, sendCreated, sendAllFieldsRequired, sendSuccess, sendNotFound, sendUpdated, sendDeleted } = require("../utils/responseHelpers");

const create = async (req, res) => {
    try {
        const { name, slug, code } = req.body;
        if (!name || !slug || !code) return sendAllFieldsRequired(res);
        const isColorExist = await colorModel.findOne({ name });
        if (isColorExist) return sendAlreadyExist(res);
        const color = await colorModel.create({ name, slug, code });
        return sendCreated(res);
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const get = async (req, res) => {
    try {
        const query = req.query;
        const dynamicFilter = {};
        const limit = query.limit != null ? query.limit : 0;
        if (query.id) dynamicFilter._id = query.id;
        if (query.status) dynamicFilter.status = query.status == "true" ? true : false;
        const color = await colorModel.find(dynamicFilter).limit(limit);
        return sendSuccess(res, "Color Find", color);
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const color = await colorModel.findById(id);
        if (!color) return sendNotFound(res);
        await colorModel.findByIdAndUpdate(id, { $set: { status: !color.status } });
        return sendUpdated(res);
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const color = await colorModel.findById(id);
        if (!color) return sendNotFound(res);
        await colorModel.findByIdAndDelete(id);
        return sendDeleted(res);
    } catch (error) {
        return sendServerError(res);
    }
}


const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const color = await colorModel.findById(id);
        if (!color) return sendNotFound9res;
        return sendSuccess(res, "Color Find", color);
    } catch (error) {
        return sendServerError(res);
    }
}

const updateById = async (req, res) => {
    try {
        const { name, slug, code } = req.body;
        const { id } = req.params;
        const color = await colorModel.findById(id);
        if (!color) return sendNotFound(res);
        await colorModel.findByIdAndUpdate(id, { name, slug, code });
        return sendUpdated(res);
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