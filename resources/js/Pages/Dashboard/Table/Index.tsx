import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DatatableComponent from "@/Components/Datatable/DatatableComponent";
import { PageProps } from "@/types";
import { DatatableProps } from "@/types/datatable";
import "@/lib/prototypes";

const Posts = ({
    auth,
    data,
    categories_all,
}: PageProps & DatatableProps<any> & any) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight capitalize">
                    {data.meta.name}
                </h2>
            }
        >
            <Head title={`Dashboard ${data.meta.name.capitalize()}`} />
            <div className="py-12">
                <div className="wrapper text-white">
                    <DatatableComponent
                        data={data}
                        categories_all={categories_all}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Posts;
