import React from "react";
import { Panel } from "@/Components/Panel";
import { useForm } from "@inertiajs/react";
import { InputError, InputLabel, TextInput } from "@/Components/Form/index";
import { PrimaryButton } from "@/Components/Buttons";
import toast from "react-hot-toast";
import { ToastItem } from "@/Components/Notifications";

const Newsletter = () => {
    const { data, setData, errors, reset, clearErrors, post } = useForm({
        email: "",
    });

    function handleNewsletterSubmit(e: any) {
        e.preventDefault();
        clearErrors();
        post(route("newsletter"), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.custom((t) => (
                    <ToastItem
                        t={t}
                        type={`success`}
                        title={`Success`}
                        message={`Successfully registered newsletter`}
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
    }

    function handleInputChange(e: any) {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Panel styles={"primary"}>
            <div className="py-12">
                <div className="lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">
                            Sign up for our newsletter
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-primary-100">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui Lorem cupidatat commodo. Elit sunt
                            amet fugiat.
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                        <form
                            className="sm:flex"
                            onSubmit={handleNewsletterSubmit}
                        >
                            <InputLabel htmlFor="email" className="sr-only">
                                Email address
                            </InputLabel>
                            <div className={`mr-4 flex-1 `}>
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="dark:bg-white dark:text-gray-900 w-full"
                                />
                                <InputError
                                    className={`mt-2`}
                                    message={errors.email}
                                />
                            </div>
                            <div>
                                <PrimaryButton
                                    type="submit"
                                    className={`min-h-[40px]`}
                                >
                                    Subscribe
                                </PrimaryButton>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-primary-100">
                            We care about the protection of your data. Read our{" "}
                            <a
                                href="#"
                                className="text-white font-medium underline"
                            >
                                Privacy Policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Panel>
    );
};

export default Newsletter;
