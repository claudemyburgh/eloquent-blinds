import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useDatatable } from "@/Components/Datatable";

const DatatablePagination = () => {
    const { messages } = usePage<any>().props;

    const { limit } = useDatatable();

    return (
        <>
            {messages.links.length > 3 && (
                <nav
                    className="relative z-0 my-4 md:my-6 flex justify-center rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    {(messages.links as unknown as any[]).map((link, index) => (
                        <Link
                            key={index.toString()}
                            preserveScroll={false}
                            method={`get`}
                            href={link.url || ""}
                            disabled={link.active || !link.url}
                            as={`button`}
                            data={{ limit }}
                            className={`z-10 relative inline-flex items-center px-4 py-2 hover:bg-gray-900/10 text-sm font-medium border border-gray-700 disabled:cursor-not-allowed
            ${link.active ? " bg-primary-500" : " bg-gray-800"}
            `}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </nav>
            )}
        </>
    );
};

export default DatatablePagination;
