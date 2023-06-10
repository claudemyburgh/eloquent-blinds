import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel";

const Home = () => {
    const { ziggy } = usePage<any>().props;

    const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc&libraries=places`;

    return (
        <AppLayout>
            <Head title="Home">
                <link rel="canonical" href={ziggy.location} />
            </Head>

            <div className="relative">
                <div className="wrapper mt-24 ">
                    <ReviewPanel />
                </div>
                <div className="h-[220px] bg-gradient-to-t from-white via-white dark:from-gray-900 dark:via-gray-900 to-transparent absolute bottom-0 inset-x-0 flex items-center justify-center">
                    <button
                        className={`mt-24 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-[300px]`}
                    >
                        See more
                    </button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;
