'use client'

import { axiosAPIinstance, notify } from "@/utils/helper"
import { useRouter } from "next/navigation"

function StatusBadge({ status, flag, url}) {
    const router = useRouter();
    let display = ""
    if (flag == "status") {
        display = status ? "Active" : "Inactive"
    }

    if (flag == "is_top") {
        display = status ? "Top" : "Not top"
    }

    if (flag == "is_best") {
        display = status ? "Best" : "Not best"
    }

    if (flag == "is_home") {
        display = status ? "Home" : "Not home"
    }

    if (flag == "is_best_seller") {
        display = status ? "Best Seller" : "Not best seller"
    }

    if (flag == "is_featured") {
        display = status ? "Featured" : "Not featured"
    }

    if (flag == "is_hot") {
        display = status ? "Hot" : "Not hot"
    }


    const base = "px-3 py-1 rounded-full cursor-pointer text-sm font-medium";

    function statusHandler(url, field) {
        axiosAPIinstance.patch(url, { field }).then(
            (response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.refresh()
                }
            }
        ).catch(
            (error) => {
                console.log(error)
                notify(error?.response?.data?.message, false)
            }
        )
    }

    return (
        <span onClick={() => statusHandler(url, flag)} className={`${base} ${status ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"} `}>
            {display}
        </span>
    );
}


export default StatusBadge;
