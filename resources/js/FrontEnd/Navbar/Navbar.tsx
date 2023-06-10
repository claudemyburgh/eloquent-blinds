import React from "react";

const Navbar = () => {
    return (
        <div className={`md:fixed w-full z-50 top-4`}>
            <div
                className={`wrapper bg-gray-900/60 text-gray-100 p-6 rounded-lg flex justify-between items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm`}
            >
                <div id="logo" className="w-[200px] text-2xl font-black">
                    Eloquent Blinds
                </div>
                <div className="flex space-x-8 font-bold">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Reviews</a>
                    <a href="#">FAQ's</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
