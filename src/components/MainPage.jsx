import React, { useState } from "react";
import NavBar from "./NavBar";
import DesktopProductGallery from "./DesktopProductGallery";
import ProductInfo from "./ProductInfo";
import MobileProductGallery from "./MobileProductGallery";
import CartPreview from "./CartPreview";
import LightboxGallery from "./LightboxGallery";

function MainPage({ products }) {
    const [cartisOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    return (
        <div className="flex flex-col w-full items-center">
            <NavBar
                cartisOpen={cartisOpen}
                setCartIsOpen={setCartIsOpen}
                cartItems={cartItems}
            />
            <CartPreview
                cartisOpen={cartisOpen}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
            <div className="flex flex-col lg:w-3/4 lg:flex-row lg:pt-20">
                <DesktopProductGallery
                    products={products}
                    setIsLightboxOpen={setIsLightboxOpen}
                />
                <MobileProductGallery products={products} />
                <ProductInfo
                    products={products}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </div>
            <LightboxGallery
                images={products[0].images}
                isLightboxOpen={isLightboxOpen}
                setIsLightboxOpen={setIsLightboxOpen}
            />
        </div>
    );
}

export default MainPage;
