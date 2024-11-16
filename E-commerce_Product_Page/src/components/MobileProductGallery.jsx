import React, { useState } from "react";

function MobileProductGallery({ products }) {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <div className="flex lg:hidden w-screen">
            <div className="relative">
                <img
                    className="w-fit"
                    src={`${products[0].images[currentImage].image}`}
                    alt="product"
                />
                <div
                    className="absolute top-1/2 left-2 bg-white rounded-full w-8 h-8 flex justify-center items-center"
                    onClick={() =>
                        setCurrentImage(
                            currentImage === 0
                                ? products[0].images.length - 1
                                : currentImage - 1
                        )
                    }
                >
                    <svg
                        className="hover:cursor-pointer"
                        width="6"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 1 2 5l3 3"
                            stroke="#1D2026"
                            stroke-width="2"
                            fill="none"
                            fill-rule="evenodd"
                        />
                    </svg>
                </div>
                <div
                    className="absolute top-1/2 right-2 bg-white rounded-full w-8 h-8 flex justify-center items-center"
                    onClick={() =>
                        setCurrentImage(
                            currentImage === products[0].images.length - 1
                                ? 0
                                : currentImage + 1
                        )
                    }
                >
                    <svg
                        className="hover:cursor-pointer"
                        width="6"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m1 1 3 3-3 3"
                            stroke="#1D2026"
                            stroke-width="2"
                            fill="none"
                            fill-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MobileProductGallery;
