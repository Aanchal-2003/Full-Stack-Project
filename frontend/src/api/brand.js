const { axiosAPIinstance } = require("@/utils/helper")

const getBrand = () => {
    return axiosAPIinstance.get("brand").then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


const getBrandById = (id) => {
    return axiosAPIinstance.get(`brand/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}

export { getBrand, getBrandById }