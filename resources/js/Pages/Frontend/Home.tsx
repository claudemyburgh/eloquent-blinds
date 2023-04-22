import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Newsletter from "@/Components/Form/Newsletter";

const Home = () => {
    const { ziggy } = usePage<any>().props;

    return (
        <AppLayout>
            <Head title="Home">
                <link rel="canonical" href={ziggy.location} />
            </Head>
            {route("home")}
            <Newsletter />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
        </AppLayout>
    );
};

export default Home;
