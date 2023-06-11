import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel";
import logo from "@/../img/google-logo.svg";

const Reviews = () => {
    const { ziggy } = usePage<any>().props;

    const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc&libraries=places`;

    return (
        <AppLayout>
            <Head title="Reviews">
                <link rel="canonical" href={ziggy.location} />
            </Head>

            <div className="relative">
                <div className="wrapper pt-24 ">
                    <div className="my-10">
                        <img
                            height={86}
                            width={273}
                            loading={`lazy`}
                            className={`block mx-auto pt-12`}
                            src={logo}
                            alt="google logo "
                        />
                        <h1
                            className={`text-2xl text-gray-500 dark:text-gray-200 font-bold text-center`}
                        >
                            Customer Reviews
                        </h1>
                    </div>
                    <ReviewPanel />
                </div>
            </div>
        </AppLayout>
    );
};

export default Reviews;
