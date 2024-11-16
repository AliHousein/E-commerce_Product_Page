import React, { useState } from "react";

function DesktopProductGallery({ products, setIsLightboxOpen }) {
    const [currentImage, setCurrentImage] = useState(1);
    return (
        <div className="hidden lg:flex lg:flex-col lg:gap-y-4 lg:w-1/2">
            <div className="w-4/5 h-5/6">
                <img
                    className="rounded-lg hover:cursor-pointer"
                    src={`${products[0].images[currentImage - 1].image}`}
                    alt="product"
                    onClick={() => setIsLightboxOpen(true)}
                />
            </div>
            <div className="flex flex-row items-center gap-x-8 w-4/5">
                {products[0].images.map((image) => (
                    <div
                        key={image.id}
                        className={`w-1/5 h-20 hover:opacity-50 hover:cursor-pointer rounded-lg ${
                            currentImage === image.id
                                ? "border-2 border-orange"
                                : ""
                        }`}
                    >
                        <img
                            key={image.id}
                            className={`w-full h-full rounded-lg ${
                                currentImage === image.id ? "opacity-40" : ""
                            }`}
                            src={image.image}
                            alt="product"
                            onClick={() => setCurrentImage(image.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesktopProductGallery;
