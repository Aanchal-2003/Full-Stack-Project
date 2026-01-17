import React from "react";

const ProductOverlay = ({ isOpen, onClose, product, imageBaseUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            {/* Modal */}
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg relative p-6">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Image */}
                    <img
                        src={imageBaseUrl + product.thumbnail}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    {/* Details */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

                        <div
                            className="text-gray-600 mb-3"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />

                        <p className="text-lg font-bold text-green-600">
                            ₹{product.final_price}
                        </p>

                        <p className="text-sm text-gray-500 line-through">
                            ₹{product.original_price}
                        </p>

                        <p className="text-sm text-red-500">
                            {product.discount_percentage}% OFF
                        </p>

                        {/* Category & Brand */}
                        <div className="mt-4 space-y-1 text-sm">
                            <p><span className="font-semibold">Category:</span> {product.category_id.name}</p>
                            <p><span className="font-semibold">Brand:</span> {product.brand_id.name}</p>
                        </div>

                        {/* Colors */}
                        <div className="mt-4">
                            <p className="font-semibold mb-1">Available Colors</p>
                            <div className="flex gap-2">
                                {product.color_ids.map((color) => (
                                    <div
                                        key={color._id}
                                        title={color.name}
                                        className="w-6 h-6 rounded-full border"
                                        style={{ backgroundColor: color.code }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Status */}
                        <div className="mt-4 text-sm">
                            <p>Stock: {product.stock ? "✅ In Stock" : "❌ Out of Stock"}</p>
                            <p>Status: {product.status ? "Active" : "Inactive"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverlay;
