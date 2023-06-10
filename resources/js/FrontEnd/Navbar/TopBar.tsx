import React from "react";

const TopBar = () => {
    return (
        <div className="hidden md:block fixed top-0 inset-x-0 z-40  bg-gradient-to-r backdrop-blur-sm from-primary-500/80 to-secondary-500/80">
            <div className="wrapper px-4 py-3 ">
                <div className="text-white text-sm font-semibold flex justify-between items-center">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facere, officiis?
                    </div>
                    <div>
                        <button
                            className={`text-primary-500 bg-white px-4 py-1.5 rounded-lg text-xs`}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
