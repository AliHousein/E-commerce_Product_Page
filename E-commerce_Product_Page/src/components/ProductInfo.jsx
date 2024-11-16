import React, { useState } from "react";
import QuantityControls from "./QuantityControls";
import AddToCartButton from "./AddToCartButton";

function ProductInfo({ products, cartItems, setCartItems }) {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex flex-col p-4 lg:w-1/2 lg:pt-16 gap-y-6">
            <div className="flex flex-col gap-y-4 lg:pr-32">
                <p className="font-semibold text-dark-grayish-blue">
                    {products[0].company}
                </p>
                <h1 className="text-4xl font-bold text-very-dark-blue">
                    {products[0].name}
                </h1>
            </div>

            <p className="text-dark-grayish-blue lg:text-md lg:pr-28">
                {products[0].description}
            </p>
            <div className="flex flex-row justify-between lg:flex-col lg:gap-y-4">
                <div className="flex flex-row items-center gap-x-4">
                    <p className="font-bold text-2xl text-very-dark-blue">
                        ${parseFloat(products[0].currentPrice, 10).toFixed(2)}
                    </p>
                    <div className="flex bg-black py-px px-2 rounded-md">
                        <p className="font-semibold text-grayish-blue text-xs">
                            {products[0].discount}%
                        </p>
                    </div>
                </div>
                <p className="line-through text-grayish-blue">
                    ${parseFloat(products[0].OriginalPrice, 10).toFixed(2)}
                </p>
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 mt-4">
                <QuantityControls
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
                <AddToCartButton
                    quantity={quantity}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    products={products}
                />
            </div>
        </div>
    );
}

export default ProductInfo;
