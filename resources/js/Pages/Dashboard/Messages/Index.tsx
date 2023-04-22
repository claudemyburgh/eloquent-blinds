import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    DatatableBody,
    DatatableHead,
    DatatablePagination,
    MessageTable,
} from "@/Components/Datatable/Message";
import { Datatable } from "@/Components/Datatable";

const Index = ({ auth, messages }: any) => {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Messages
                    </h2>
                </>
            }
            user={auth.user}
        >
            <Head title={`Dashboard Messages `} />
            <div className="py-12">
                <div className="wrapper text-white ">
                    {messages.data.length > 0 ? (
                        <MessageTable>
                            <Datatable>
                                <DatatableHead />
                                <DatatableBody />
                            </Datatable>
                            <DatatablePagination />
                        </MessageTable>
                    ) : (
                        <div className={`py-20 text-xl text-center`}>
                            There is no message at this time.
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
