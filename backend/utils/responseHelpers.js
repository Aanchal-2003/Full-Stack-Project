// success response

const sendSuccess = (res, message = " Success", data = {}) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
};


// craeted response

const sendCreated = (res, message = "Created Successfully", data = {}) => {
    return res.status(201).json({
        success: true,
        message,
        data
    });
};


// updated response

const sendUpdated = (res, message = "Updated Successfully", data = {}) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
};


// deleted response

const sendDeleted = (res, message = "Deleted Successfully") => {
    return res.status(200).json({
        success: true,
        message
    });
};


// all field required

const sendAllFieldsRequired = (res, message = "All Fields Are Required") => {
    return res.status(400).json({
        success: false,
        message
    });
};


// not found

const sendNotFound = (res, message = "Responsse Not Found") => {
    return res.status(404).json({
        success: false,
        message
    });
};


// already exist

const sendAlreadyExist = (res, message = "Data Already Exist") => {
    return res.status(409).json({
        success: false,
        message
    });
};

// server error

const sendServerError = (res, error) => {
    console.log(error);  //log internally
    return res.status(500).json({
        success: false,
        message:"Inernal Server Error"
    });
};


module.exports = {
    sendSuccess,
    sendCreated,
    sendUpdated, 
    sendDeleted,
    sendAllFieldsRequired,
    sendNotFound,
    sendServerError,
    sendAlreadyExist
}