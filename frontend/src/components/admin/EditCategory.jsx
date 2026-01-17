"use client";

import { useRef } from "react";
import { axiosAPIinstance, notify, slugCreate } from "@/utils/helper";
import { FiTag, FiLink, FiImage } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function EditCategory({ category }) {
    const router = useRouter();
    const nameRef = useRef();
    const slugRef = useRef();

    function generateSlug() {
        const slug = slugCreate(nameRef.current.value);
        slugRef.current.value = slug
    }

    function SubmitHandler(e) {
        e.preventDefault();
        const payload = new FormData();
        payload.append("name", nameRef.current.value);
        payload.append("slug", slugRef.current.value);
        payload.append("image", e.target.image.files[0]);

        axiosAPIinstance.put(`category/update/${category._id}`, payload).then(
            (response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.push("/admin/category");
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
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10">

            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Edit Category</h1>
                <p className="text-gray-500">
                    Edit a category with slug and image
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={SubmitHandler} className="space-y-6">
                {/* CATEGORY NAME */}
                <div>
                    <label className="text-sm font-medium text-gray-600">
                        Category Name
                    </label>
                    <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                        <FiTag className="text-gray-400" />
                        <input
                            onChange={generateSlug}
                            ref={nameRef}
                            defaultValue={category?.name}
                            type="text"
                            placeholder="Enter category name"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* SLUG */}
                <div>
                    <label className="text-sm font-medium text-gray-600">
                        Slug
                    </label>
                    <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff7b00]">
                        <FiLink className="text-gray-400" />
                        <input
                            ref={slugRef}
                            defaultValue={category?.slug}
                            readOnly
                            type="text"
                            placeholder="enter-category-slug"
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* CATEGORY IMAGE */}
                <div>
                    <label className="text-sm font-medium text-gray-600">
                        Category Image
                    </label>
                    <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3">
                        <FiImage className="text-gray-400" />
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-orange-50 file:text-[#ff7b00]
                            hover:file:bg-orange-100"
                        />
                    </div>
                    <div className="p-4 font-medium">
                        <img className="w-10 h-10 rounded-md" src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE_URL + category.image} alt={category.name} />
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center justify-end gap-4 pt-6">
                    <button
                        type="button"
                        className="px-6 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-6 py-2 rounded-xl bg-[#ff7b00] text-white hover:opacity-90"
                    >
                        Edit Category
                    </button>
                </div>
            </form>
        </div>
    );
}