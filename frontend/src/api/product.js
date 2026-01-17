const { axiosAPIinstance } = require("@/utils/helper")

const getproduct = () => {
    return axiosAPIinstance.get("product").then(
        (response) => {
            return response.data.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


const getProductById = (id) => {
    return axiosAPIinstance.get(`product/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


export { getproduct, getProductById }