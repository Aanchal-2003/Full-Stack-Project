const { axiosAPIinstance } = require("@/utils/helper")

const getproduct = (queryObject = {}) => {

    const query = new URLSearchParams();
    if (queryObject.limit) {
        query.append("limit", queryObject.limit)
    }

    if (queryObject.status) {
        query.append("status", queryObject.status)
    }

    if (queryObject.name) {
        query.append("name", queryObject.name)
    }

    if (queryObject.is_home) {
        query.append("is_home", queryObject.is_home)
    }

    if (queryObject.stock) {
        query.append("stock", queryObject.stock)
    }

    if (queryObject.is_best_seller) {
        query.append("is_best_seller", queryObject.is_best_seller)
    }

    if (queryObject.is_featured) {
        query.append("is_featured", queryObject.is_featured)
    }

    if (queryObject.is_hot) {
        query.append("is_hot", queryObject.is_hot)
    }

    if (queryObject.categorySlug) {
        query.append("categorySlug", queryObject.categorySlug)
    }

    if (queryObject.color_ids) {
        query.append("color_ids", queryObject.color_ids)
    }

    if (queryObject.brandSlug) {
        query.append("brandSlug", queryObject.brandSlug)
    }

    if (queryObject.min_price && queryObject.max_price) {
        query.append("min_price", Number(queryObject.min_price)),
        query.append("max_price", Number(queryObject.max_price))
    }

    if (queryObject.sort) {
        query.append("sort", queryObject.sort)
    }   

    return axiosAPIinstance.get(`product/?${query.toString()}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data.data
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


const getProductById = (id) => {
    return axiosAPIinstance.get(`product/${id}`).then(
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

export { getproduct, getProductById }