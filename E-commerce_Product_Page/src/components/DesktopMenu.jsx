import React from "react";

function DesktopMenu() {
    return (
        <ul className="hidden space-x-8 lg:flex text-dark-grayish-blue">
            <li className="py-6 border-b-4 border-b-white hover:border-orange">
                <a href="/">Collections</a>
            </li>
            <li className="py-6 border-b-4 border-b-white hover:border-orange">
                <a href="/">Men</a>
            </li>
            <li className="py-6 border-b-4 border-b-white hover:border-orange">
                <a href="/">Women</a>
            </li>
            <li className="py-6 border-b-4 border-b-white hover:border-orange">
                <a href="/">About</a>
            </li>
            <li className="py-6 border-b-4 border-b-white hover:border-orange">
                <a href="/">Contact</a>
            </li>
        </ul>
    );
}

export default DesktopMenu;
