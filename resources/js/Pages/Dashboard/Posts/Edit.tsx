import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Panel } from "@/Components/Panel";
import EditPostsForm from "@/Pages/Dashboard/Posts/Partials/EditPostsForm";
import { ImageUpload } from "@/Components/Upload";
import LiveLabel from "@/Components/LiveLabel";

const Edit = ({ auth, post }: any) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Post Edit
                    </h2>
                    <LiveLabel live={post.live} size={"md"} />
                </>
            }
        >
            <Head title="Dashboard Post Edit" />
            <div className="py-12">
                <div className="wrapper text-white ">
                    <Panel>
                        <ImageUpload
                            model={post}
                            namedRoute={"dashboard.posts.upload"}
                        />
                        <EditPostsForm />
                    </Panel>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
