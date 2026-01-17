'use client'

import { useState } from "react";
import ProductOverlay from "./ProductOverlay";
import { IoEyeSharp } from "react-icons/io5";

const ViewButton = ({ product, imageBaseUrl }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="p-2 rounded-lg bg-orange-100 text-[#ff7b00] hover:bg-orange-200"
                onClick={() => setOpen(true)}

            >
                <IoEyeSharp />
            </button>

            <ProductOverlay
                imageBaseUrl={imageBaseUrl}
                isOpen={open}
                onClose={() => setOpen(false)}
                product={product}
            />
        </>
    );
}

export default ViewButton;
