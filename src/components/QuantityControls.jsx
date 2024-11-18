import React from "react";

function QuantityControls({ quantity, setQuantity }) {
    return (
        <div className="flex flex-row items-center justify-between px-4 py-2 gap-x-4 rounded-md bg-light-grayish-blue lg:py-4 lg:w-2/5">
            <img
                className="hover:cursor-pointer"
                src="./images/icon-minus.svg"
                alt="minus"
                onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                }}
            />
            <p>{quantity}</p>
            <img
                className="hover:cursor-pointer"
                src="./images/icon-plus.svg"
                alt="plus"
                onClick={() => setQuantity(quantity + 1)}
            />
        </div>
    );
}

export default QuantityControls;
