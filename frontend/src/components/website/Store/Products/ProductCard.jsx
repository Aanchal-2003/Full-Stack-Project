import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product, imageBaseUrl, user }) => {
    const imageUrl = product?.thumbnail
        ? `${imageBaseUrl}main/${product.thumbnail}`
        : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"

    return (
        <div className="relative bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden group mt-5">

            {/* BADGES */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                {
                    product.is_best_seller && (
                        <span className="bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                            Best Seller
                        </span>
                    )
                }

                {
                    product.is_hot && (
                        <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                            New
                        </span>
                    )
                }
            </div>

            {/* DISCOUNT*/}
            {product?.discount_percentage > 0 && (
                <span className="absolute top-2 right-2 text-white text-[10px] font-semibold px-2 py-0.5 rounded z-10">
                    {product?.discount_percentage}% OFF
                </span>
            )}

            {/* IMAGE */}
            <div className="h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product?.name}
                </h3>

                {/* Price*/}
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-gray-900">
                        ₹{product?.final_price}
                    </span>

                    {product?.original_price && (
                        <span className="text-sm line-through text-gray-400">
                            ₹{product?.original_price}
                        </span>
                    )}

                    {/* STOCK */}
                    {!product.stock && (
                        <p className="text-xs text-red-500 font-medium">
                            Out of Stock
                        </p>
                    )}
                </div>
            </div>
            <AddToCartButton id={product._id} user={user} name={product.name} image={imageUrl} final_price={product.final_price} original_price={product.original_price} />
        </div >
    );
}

export default ProductCard;
