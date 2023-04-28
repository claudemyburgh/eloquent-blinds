import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    InputError,
    InputLabel,
    SaveSubmitButton,
    SelectInput,
    Textarea,
    TextInput,
} from "@/Components/Form";
import { PageProps } from "@/types";

import { slugIt } from "@/lib/helpers";
import CharCounter from "@/Components/Form/CharCounter";

interface PostProps {
    post: {
        title: string;
        user_id: number;
        slug: string;
        description: string;
        body: string;
        live: string;
    };
}

interface CountProps {
    slug: number;
    description: number;
    body: number;
}

const EditPostsForm = () => {
    const { post, auth } = usePage<PostProps & PageProps>().props;

    const [count, setCount] = useState<CountProps>({
        description: post.description?.length,
        body: post.body?.length,
        slug: post.slug?.length,
    });

    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            title: post.title || "",
            user_id: auth.user.id,
            slug: post.slug || "",
            description: post.description || "",
            body: post.body || "",
            live: post.live,
        });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        put(route("dashboard.posts.update", post), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    function handleFormInput(e: any) {
        e.preventDefault();
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
        setCount({
            ...count,
            [e.target.id]: e.target.value.length,
        });
    }

    return (
        <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>
            <div>
                <InputLabel htmlFor="title" value="Title" />
                <TextInput
                    id="title"
                    value={data.title}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />
                <InputError message={errors.title} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="slug" value="Slug" />
                <TextInput
                    id="slug"
                    value={slugIt(data.slug)}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />
                <CharCounter count={count.slug} max={255} />
                <InputError message={errors.slug} className="mt-4" />
            </div>
            <div>
                <InputLabel htmlFor="description" value="Description" />
                <Textarea
                    id="description"
                    value={data.description}
                    onChange={handleFormInput}
                    className="mt-1 block w-full min-h-[100px]"
                />
                <CharCounter count={count.description || 0} max={255} />
                <InputError message={errors.description} className="mt-4" />
            </div>
            <div>
                <InputLabel htmlFor="body" value="Body" />
                <Textarea
                    id="body"
                    value={data.body}
                    onChange={handleFormInput}
                    className="mt-1 block w-full min-h-[200px]"
                />
                <CharCounter count={count.body || 0} max={2500} />
                <InputError message={errors.body} className="mt-4" />
            </div>
            <div>
                <InputLabel htmlFor="live" value="Live" />
                <div className={`flex justify-between items-center`}>
                    <SelectInput
                        id={`live`}
                        name={`live`}
                        value={data.live}
                        onChange={handleFormInput}
                    >
                        <option value="1">Live</option>
                        <option value="0">Not Live</option>
                    </SelectInput>

                    <div>
                        {post.live ? (
                            <div className="bg-green-100 inline-flex space-x-1 items-center justify-center text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-3 h-3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Live</span>
                            </div>
                        ) : (
                            <div className="bg-red-100 inline-flex space-x-1 items-center justify-center text-red-800 text-xs font-medium  px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-3 h-3"
                                >
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>

                                <span>Not Live</span>
                            </div>
                        )}
                    </div>
                </div>
                <InputError message={errors.live} className="mt-2" />
            </div>
            <div className={`flex items-center justify-between`}>
                <SaveSubmitButton
                    processing={processing}
                    recentlySuccessful={recentlySuccessful}
                />
            </div>
        </form>
    );
};

export default EditPostsForm;
