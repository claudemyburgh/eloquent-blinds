import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Panel } from "@/Components/Panel";
import { ImageUpload } from "@/Components/Upload";
import EditUsersForm from "@/Pages/Dashboard/Users/Partials/EditUsersForm";

const Edit = ({ auth, user }: any) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        User Edit
                    </h2>
                </>
            }
        >
            <Head title="Dashboard User Edit" />
            <div className="py-12">
                <div className="wrapper text-white ">
                    <div className="grid grid-cols-6 gap-8">
                        <Panel className={`col-span-6`}>
                            <ImageUpload
                                model={user}
                                namedRoute={"dashboard.users.upload"}
                            />
                            <EditUsersForm />
                        </Panel>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
