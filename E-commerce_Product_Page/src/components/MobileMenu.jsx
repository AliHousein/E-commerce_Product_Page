import React, { useState } from "react";

function MobileMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex lg:hidden">
            <img
                className="hover:cursor-pointer"
                src="./images/icon-menu.svg"
                alt="menu"
                onClick={() => setIsNavOpen(!isNavOpen)}
            />
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-40 ${
                    isNavOpen ? "block" : "hidden"
                }`}
            />
            <div
                className={`flex flex-col items-start justify-start bg-white top-0 left-0 z-50 absolute w-4/6 h-full ${
                    isNavOpen ? "flex" : "hidden"
                }`}
            >
                <img
                    className="absolute top-4 left-4 hover:cursor-pointer"
                    src="./images/icon-close.svg"
                    alt="close"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                />
                <ul className="NAVIGATION-MOBILE-OPEN flex flex-col pl-4 pt-16 gap-y-4">
                    <li className="">
                        <a className="font-bold" href="/">
                            Collections
                        </a>
                    </li>
                    <li className="">
                        <a className="font-bold" href="/">
                            Men
                        </a>
                    </li>
                    <li className="">
                        <a className="font-bold" href="/">
                            Women
                        </a>
                    </li>
                    <li className="">
                        <a className="font-bold" href="/">
                            About
                        </a>
                    </li>
                    <li className="">
                        <a className="font-bold" href="/">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;
