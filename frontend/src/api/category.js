import { axiosAPIinstance } from "@/utils/helper"


const getCategories = () => {
    return axiosAPIinstance.get("category").then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


const getCategoryById = (id) => {
    return axiosAPIinstance.get(`category/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


export { getCategories, getCategoryById}