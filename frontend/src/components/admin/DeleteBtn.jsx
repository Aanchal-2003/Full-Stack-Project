'use client'

import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import { notify, axiosAPIinstance } from '@/utils/helper';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


export default function DeleteBtn({ url }) {
    const router = useRouter();

    function deleteHandler() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });


                axiosAPIinstance.delete(url).then(
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
        });
    }
    return (
        <button onClick={deleteHandler} className="p-2 rounded-lg bg-red-100 text-red-500 hover:bg-red-200">
            <FiTrash2 />
        </button>
    )
}
