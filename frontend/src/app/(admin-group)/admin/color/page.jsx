import Link from "next/link";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import StatusBadge from "@/components/admin/StatusBadge";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { getColor } from "@/api/color";

export default async function page() {
    const color = await getColor();
    return (
        <div className="bg-white rounded-2xl shadow p-6">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Color Management</h2>
                    <p className="text-gray-500 text-sm">
                        Manage Color, Name and Actions
                    </p>
                </div>

                {/* SINGLE BUTTON */}
                <Link href="/admin/color/add">
                    <button className="flex items-center gap-2 bg-[#ff7b00] text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
                        <FiPlus size={18} />
                        Add Color
                    </button>
                </Link>

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 text-sm">
                            <th className="p-4 text-left rounded-l-xl">Color</th>
                            <th className="p-4 text-left rounded-l-xl">Name</th>
                            <th className="p-4 text-left">Slug</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left rounded-r-xl">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            color &&
                            color?.data.map((color) => (
                                <tr
                                    key={color._id}
                                    className="border-t hover:bg-orange-50 transition"
                                >
                                    <td className="p-4 font-medium">
                                        <div style={{background: color.code}} className="w-10 h-10 rounded-md" ></div>
                                    </td>
                                    <td className="p-4 font-medium">
                                        {color.name}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {color.slug}
                                    </td>

                                    {/* STATUS */}
                                    <td className="p-4 flex gap-2">
                                        <StatusBadge url={`color/status/${color._id}`} status={color.status} flag="status" />
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <Link href={`/admin/color/edit/${color._id}`}>
                                                <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                                                    <FiEdit />
                                                </button></Link>
                                            <DeleteBtn url={`color/delete/${color._id}`} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

