import React, { useState } from "react";

function LightboxGallery({ images, isLightboxOpen, setIsLightboxOpen }) {
    console.log(images);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const closeLightbox = () => {
        setIsOpen(false);
    };
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {isLightboxOpen && (
                <div className="hidden fixed inset-0 z-50 bg-black bg-opacity-75 lg:flex items-center justify-center">
                    <div className="relative w-full max-w-lg mx-4">
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute -top-8 right-0 text-white hover:text-orange-500 transition-colors"
                        >
                            <svg
                                width="14"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                    fill="white"
                                    fill-rule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="relative">
                            <img
                                src={images[currentIndex].image}
                                alt={`Product ${currentIndex + 1}`}
                                className="w-full rounded-lg"
                            />

                            <button
                                onClick={previousImage}
                                className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <img
                                    src="./images/icon-previous.svg"
                                    alt="previous"
                                />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <img src="./images/icon-next.svg" alt="next" />
                            </button>
                        </div>

                        <div className="hidden md:grid grid-cols-4 gap-4 mt-4 px-12">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative rounded-lg overflow-hidden cursor-pointer
                  ${
                      currentIndex === index
                          ? "border-orange border-2 bg-black opacity-75"
                          : ""
                  }`}
                                    onClick={() => selectImage(index)}
                                >
                                    <img
                                        src={image.image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LightboxGallery;
