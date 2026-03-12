const { axiosAPIinstance } = require("@/utils/helper")

const getColor = (queryObject = {}) => {
    const query = new URLSearchParams();
    
    if (queryObject.limit) {
        query.append("limit", queryObject.limit)
    }

    if (queryObject.status) {
        query.append("status", queryObject.status)
    }

    return axiosAPIinstance.get(`color/?${query.toString()}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data
            } else {
                return []
            }
        }
    ).catch(
        (error) => {
            return []
        }
    )
}


const getColorById = (id) => {
    return axiosAPIinstance.get(`color/${id}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data
            } else {
                return {}
            }
        }
    ).catch(
        (error) => {
            return {};
        }
    )
}


export { getColor, getColorById };