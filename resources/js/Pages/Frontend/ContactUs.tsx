import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import ContactForm from "@/Components/ContactForm";

const ContactUs = () => {
    const { ziggy } = usePage<any>().props;

    return (
        <AppLayout>
            <Head title="ContactUs">
                <link rel="canonical" href={ziggy.location} />
            </Head>

            <div className="relative">
                <div className="wrapper pt-24 ">
                    <ContactForm />
                </div>
            </div>
        </AppLayout>
    );
};

export default ContactUs;
