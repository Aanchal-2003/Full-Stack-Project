const { axiosAPIinstance } = require("@/utils/helper")

const getColor = () => {
    return axiosAPIinstance.get("color").then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null;
        }
    )
}

 
const getColorById = (id) => {
    return axiosAPIinstance.get(`color/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null;
        }
    )
}


export { getColor, getColorById };