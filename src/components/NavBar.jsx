import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function NavBar({ cartisOpen, setCartIsOpen, cartItems }) {
    return (
        <div className="flex items-center justify-between py-6 w-5/6 lg:border-b lg:border-grayish-blue lg:py-0">
            <div className="flex items-center gap-x-10">
                <div className="flex flex-row-reverse items-center gap-x-4">
                    <a href="/">
                        <img src="./images/logo.svg" alt="logo" />
                    </a>
                    <MobileMenu />
                </div>
                <DesktopMenu />
            </div>
            <div className="flex gap-x-2 items-center lg:gap-x-10">
                <div
                    className="relative hover:cursor-pointer"
                    onClick={() => setCartIsOpen(!cartisOpen)}
                >
                    <img src="./images/icon-cart.svg" alt="cart" />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-3 h-3 px-2 flex items-center justify-center">
                            {cartItems.reduce(
                                (total, item) => total + item.quantity,
                                0
                            )}
                        </span>
                    )}
                </div>
                <img
                    className="w-8 h-8 hover:border-2 hover:border-orange hover:rounded-full hover:cursor-pointer lg:w-14 lg:h-14"
                    src="./images/image-avatar.png"
                    alt="avatar"
                />
            </div>
        </div>
    );
}

export default NavBar;
