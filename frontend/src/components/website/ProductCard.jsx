const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$149",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: "$49",
        image: "https://via.placeholder.com/300",
    },
];

const ProductSection = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Featured Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-t-xl"
                            />

                            <div className="p-5">
                                <h3 className="text-lg font-semibold">
                                    {product.name}
                                </h3>

                                <p className="text-indigo-600 font-bold mt-2">
                                    {product.price}
                                </p>

                                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
