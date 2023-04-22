import React from "react";
import { Panel } from "@/Components/Panel";
import {
    InputError,
    InputLabel,
    SaveSubmitButton,
    Textarea,
} from "@/Components/Form";
import { useForm, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useRecoilState } from "recoil";
import { ModelClose } from "@/lib/model-recoil";

const EmailClient = ({ user, subject, parent, ...propsAll }: any) => {
    const { auth } = usePage<PageProps>().props;
    const [isOpen, setIsOpen] = useRecoilState<boolean>(ModelClose);

    const {
        data,
        setData,
        processing,
        recentlySuccessful,
        errors,
        clearErrors,
        reset,
        post,
    } = useForm({
        name: user.name,
        email: user.email,
        parent_id: parent,
        subject,
        message: "",
        user_id: auth.user.id,
        from: {
            name: auth.user.name,
            email: auth.user.email,
        },
    });

    function handleInputUpdate(e: any) {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    function handleMessageFormInput(e: any) {
        e.preventDefault();
        clearErrors();
        post(route("dashboard.email.send"), {
            onSuccess: () => {
                reset();
                setIsOpen(false);
            },
            preserveScroll: true,
        });
    }

    return (
        <Panel {...propsAll}>
            <form className={`space-y-6`} onSubmit={handleMessageFormInput}>
                <div>
                    <InputLabel htmlFor="message" value="Message" />
                    <Textarea
                        id="message"
                        name="message"
                        value={data.message}
                        onChange={handleInputUpdate}
                        className="mt-1 block w-full min-h-[300px] disabled:opacity-50"
                    />
                    <InputError message={errors.message} className="mt-2" />
                </div>
                <SaveSubmitButton
                    type={`submit`}
                    processing={processing}
                    recentlySuccessful={recentlySuccessful}
                    buttonText={`Send email`}
                />
            </form>
        </Panel>
    );
};

export default EmailClient;
