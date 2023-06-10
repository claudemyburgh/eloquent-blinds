import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import { Toaster } from "react-hot-toast";
import ReviewPanel from "@/Components/Review/ReviewPanel";

const Home = () => {
    const { ziggy } = usePage<any>().props;

    return (
        <AppLayout>
            <Head title="Home">
                <link rel="canonical" href={ziggy.location} />
            </Head>
            <Toaster
                position={`top-right`}
                toastOptions={{
                    duration: 2200,
                }}
            />

            {/*<ReviewStats />*/}

            <div className="relative">
                <div className="wrapper mt-44 ">
                    <ReviewPanel />
                </div>
                <div className="h-1/3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent absolute bottom-0 inset-x-0 flex items-center justify-center">
                    <button
                        className={`mt-24 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-[300px]`}
                    >
                        See more
                    </button>
                </div>
            </div>

            {/*<HeroComponent />*/}
        </AppLayout>
    );
};

export default Home;
