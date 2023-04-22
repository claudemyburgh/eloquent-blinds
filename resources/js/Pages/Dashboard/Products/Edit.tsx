import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Panel } from "@/Components/Panel";
import LiveLabel from "@/Components/LiveLabel";
import { ImageUpload } from "@/Components/Upload";
import EditProductForm from "@/Pages/Dashboard/Products/Partials/EditProductForm";

const Edit = ({ auth, product }: any) => {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Product Edit
                    </h2>
                    <LiveLabel live={product.live} size={"md"} />
                </>
            }
            user={auth.user}
        >
            <Head title="Dashboard Product Edit" />
            <div className="py-12">
                <div className="wrapper text-white">
                    <Panel className={`col-span-4`}>
                        <ImageUpload
                            model={product}
                            namedRoute={"dashboard.products.upload"}
                        />
                        <EditProductForm />
                    </Panel>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
