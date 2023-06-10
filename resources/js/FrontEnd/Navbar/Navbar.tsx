import React from "react";
import dark_logo from "@/../img/logo-on-dark.svg";
import light_logo from "@/../img/logo-on-light.svg";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <div className={`md:fixed w-full z-50 top-2`}>
                <div
                    className={`wrapper text-gray-500 dark:bg-gray-900/60 bg-gray-200/60 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-4 rounded-lg flex justify-between items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm`}
                >
                    <Link
                        href={route("home")}
                        id="logo"
                        className="text-2xl font-black shrink-0"
                    >
                        <img
                            className={`h-9 hidden dark:block`}
                            src={dark_logo}
                            alt=""
                        />
                        <img
                            className={`h-9 dark:hidden block`}
                            src={light_logo}
                            alt=""
                        />
                        <div className="sr-only">Eloquent Blinds</div>
                    </Link>
                    <div className="flex space-x-8 font-bold">
                        <Link href={route("home")}>Home</Link>
                        <a href="#">Products</a>
                        <Link href={route("reviews")}>Reviews</Link>
                        <a href="#">FAQ's</a>
                        <Link href={route("contact")}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
