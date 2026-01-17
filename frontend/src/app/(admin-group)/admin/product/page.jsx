import Link from "next/link";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import StatusBadge from "@/components/admin/StatusBadge";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { getproduct } from "@/api/product";
import ViewButton from "@/components/admin/ViewButton";
import { CiImageOn } from "react-icons/ci";


export default async function page() {
  const productJSON = await getproduct();
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Product Management</h2>
          <p className="text-gray-500 text-sm">
            Manage Product, Name and Actions
          </p>
        </div>

        {/* SINGLE BUTTON */}
        <Link href="/admin/product/add">
          <button className="flex items-center gap-2 bg-[#ff7b00] text-white px-5 py-2 rounded-xl hover:opacity-90 transition">
            <FiPlus size={18} />
            Add Product
          </button>
        </Link>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-4 text-left rounded-l-xl">Image</th>
              <th className="p-4 text-left rounded-l-xl">Name</th>
              <th className="p-4 text-left">Slug</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left rounded-r-xl">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              productJSON &&
              productJSON.product.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-orange-50 transition"
                >
                  <td className="p-4 font-medium">
                    <img className="w-10 h-10 rounded-md" src={productJSON.imageBaseUrl + `main/${product.thumbnail}`} alt={product.name} />
                  </td>
                  <td className="p-4 font-medium">
                    {product.name}
                  </td>
                  <td className="p-4 text-gray-600">
                    {product.slug}
                  </td>

                  {/* STATUS */}
                  <td className="p-4 flex gap-2">
                    <StatusBadge url={`product/status/${product._id}`} status={product.status} flag="status" />
                    <StatusBadge url={`product/status/${product._id}`} status={product.is_best_seller} flag="is_best_seller" />
                    <StatusBadge url={`product/status/${product._id}`} status={product.is_featured} flag="is_featured" />
                    <StatusBadge url={`product/status/${product._id}`} status={product.is_hot} flag="is_hot" />
                    <StatusBadge url={`product/status/${product._id}`} status={product.is_home} flag="is_home" />
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/product/edit/${product._id}`}>
                        <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                          <FiEdit />
                        </button>
                      </Link>
                      <DeleteBtn url={`product/delete/${product._id}`} />
                      <ViewButton imageBaseUrl={productJSON.imageBaseUrl} product={product} />
                      <Link href={`/admin/product/add-multiple-images/${product._id}`}>
                        <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200">
                          <CiImageOn />
                        </button>
                      </Link>

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

