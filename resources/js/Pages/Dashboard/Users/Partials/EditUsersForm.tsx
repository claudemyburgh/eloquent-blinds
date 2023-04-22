import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    InputError,
    InputLabel,
    SaveSubmitButton,
    TextInput,
} from "@/Components/Form";
import { PageProps } from "@/types";
import { slugIt } from "@/lib/helpers";

interface UsersProps {
    user: {
        name: string;
        email: string;
        password: string;
    };
}

const EditUsersForm = () => {
    const { user } = usePage<UsersProps & PageProps>().props;

    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name || "",
            email: user.email || "",
            password: user.password || "",
        });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        put(route("dashboard.users.update", user), {
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
    }

    return (
        <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>
            <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    value={data.name}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                    id="email"
                    value={slugIt(data.email)}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                    id="password"
                    value={slugIt(data.password)}
                    onChange={handleFormInput}
                    type="password"
                    className="mt-1 block w-full"
                />
                <InputError message={errors.password} className="mt-2" />
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

export default EditUsersForm;
