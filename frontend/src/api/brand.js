const { axiosAPIinstance } = require("@/utils/helper")

const getBrand = (queryObject = {}) => {
    const query = new URLSearchParams();
    if (queryObject.limit) {
        query.append("limit", queryObject.limit)
    }

    if (queryObject.status) {
        query.append("status", queryObject.status)
    }

    if (queryObject.is_home) {
        query.append("is_home", queryObject.is_home)
    }

    if (queryObject.is_best) {
        query.append("is_best", queryObject.is_best)
    }

    if (queryObject.is_top) {
        query.append("is_top", queryObject.is_top)
    }

    return axiosAPIinstance.get(`brand/?${query.toString()}`).then(
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


const getBrandById = (id) => {
    return axiosAPIinstance.get(`brand/${id}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data
            } else {
                return {}
            }
        }
    ).catch(
        (error) => {
            return {}
        }
    )
}

export { getBrand, getBrandById }