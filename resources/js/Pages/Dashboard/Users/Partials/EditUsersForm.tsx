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
import toast from "react-hot-toast";
import { ToastItem } from "@/Components/Notifications";

interface UsersProps {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    };
}

const EditUsersForm = () => {
    const { user } = usePage<UsersProps & PageProps>().props;

    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            first_name: user.first_name || "",
            last_name: user.last_name || "",
            email: user.email || "",
            password: user.password || "",
        });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        put(route("dashboard.users.update", user), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                toast.custom((t) => (
                    <ToastItem
                        t={t}
                        type={`success`}
                        title={`Success`}
                        message={`User successfully updated`}
                        icon={`check`}
                    />
                ));
            },
            onError: () => {
                toast.custom((t) => (
                    <ToastItem
                        t={t}
                        type={`error`}
                        title={`Error`}
                        message={`Something went wrong`}
                        icon={`cross`}
                    />
                ));
            },
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
                <InputLabel htmlFor="first_name" value="First Name" />
                <TextInput
                    id="first_name"
                    value={data.first_name}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />

                <InputError message={errors.first_name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="last_name" value="Last Name" />
                <TextInput
                    id="last_name"
                    value={data.last_name}
                    onChange={handleFormInput}
                    type="text"
                    className="mt-1 block w-full"
                />

                <InputError message={errors.last_name} className="mt-2" />
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
