import React, { Fragment } from "react";
import dark_logo from "@/../img/logo-on-dark.svg";
import light_logo from "@/../img/logo-on-light.svg";
import { Link, usePage } from "@inertiajs/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { Popover, Transition } from "@headlessui/react";

const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faqs", label: "FAQ's" },
    { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
    const url = usePage().url;

    return (
        <>
            <Popover as={"nav"} className={`fixed w-full z-50 top-0 md:top-2`}>
                <div
                    className={`wrapper relative card text-gray-500 dark:bg-gray-900/60 bg-gray-200/60 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-4 rounded-b-lg md:rounded-lg flex flex-wrap justify-between items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm`}
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

                    <div className="md:flex space-x-8 font-bold hidden">
                        <Link
                            className={url === "/" ? "text-primary-500" : ""}
                            href={route("home")}
                        >
                            Home
                        </Link>
                        <a href="#">Products</a>
                        <Link
                            className={
                                url === "/reviews" ? "text-primary-500" : ""
                            }
                            href={route("reviews")}
                        >
                            Reviews
                        </Link>
                        <a href="#">FAQ's</a>
                        <Link
                            className={
                                url === "/contact-us" ? "text-primary-500" : ""
                            }
                            href={route("contact")}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <Popover.Button className="h-10 w-10 rounded-lg border border-gray-500 hover:scale-105 text-gray-600 dark:text-gray-200 dark:bg-gray-900 flex justify-center items-center md:hidden">
                        <Bars3BottomRightIcon
                            height={20}
                            width={20}
                            className={`block`}
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel
                            className={`w-full space-y-2.5 mt-3 flex flex-col`}
                        >
                            {links.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className={`
                                                flex font-semibold ${
                                                    url === link.href
                                                        ? "text-primary-500"
                                                        : "text"
                                                }
                                          `}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Popover.Panel>
                    </Transition>
                </div>
            </Popover>
        </>
    );
};

export default Navbar;
