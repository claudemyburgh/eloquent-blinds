import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Newsletter from "@/Components/Form/Newsletter";
import ContactForm from "@/Components/ContactForm";
import { Toaster } from "react-hot-toast";

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
            {/*{route("home")}*/}
            <div className="w-1/2">
                <ContactForm />
            </div>

            <Newsletter />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
        </AppLayout>
    );
};

export default Home;
