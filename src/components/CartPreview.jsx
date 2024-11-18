import React from "react";

function CartPreview({ cartisOpen, cartItems, setCartItems }) {
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.currentPrice * item.quantity,
        0
    );

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };
    return (
        <>
            {cartisOpen && (
                <div className="absolute top-24 w-11/12 min-h-60 bg-white rounded-lg shadow-lg z-30 lg:min-h-56 lg:w-80 lg:top-16 lg:right-32">
                    {/* Cart Header */}
                    <div className="p-4 border-b border-grayish-blue">
                        <h3 className="font-semibold">Cart</h3>
                    </div>

                    {/* Cart Content */}
                    <div className="p-4">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-dark-grayish-blue py-8">
                                Your cart is empty.
                            </p>
                        ) : (
                            <>
                                {/* Cart Items */}
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-4"
                                        >
                                            <img
                                                src={item.images[0].image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm text-gray-600">
                                                    {item.name}
                                                </h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-500">
                                                        $
                                                        {item.currentPrice.toFixed(
                                                            2
                                                        )}{" "}
                                                        × {item.quantity}
                                                    </span>
                                                    <span className="font-bold">
                                                        $
                                                        {(
                                                            item.currentPrice *
                                                            item.quantity
                                                        ).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                <img
                                                    src="./images/icon-delete.svg"
                                                    alt="delete"
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full mt-4 bg-orange text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    Checkout ${totalAmount.toFixed(2)}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default CartPreview;
