import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Panel } from "@/Components/Panel";
import EditCategoryForm from "@/Pages/Dashboard/Categories/Partials/EditCategoryForm";
import LiveLabel from "@/Components/LiveLabel";
import { ImageUpload } from "@/Components/Upload";

const Edit = ({ auth, category }: any) => {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Category Edit
                    </h2>
                    <LiveLabel live={category.live} size={"md"} />
                </>
            }
            user={auth.user}
        >
            <Head title="Dashboard Category Edit" />
            <div className="py-12">
                <div className="wrapper text-white">
                    <Panel className={`col-span-4`}>
                        <ImageUpload
                            model={category}
                            namedRoute={"dashboard.categories.upload"}
                        />
                        <EditCategoryForm />
                    </Panel>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
