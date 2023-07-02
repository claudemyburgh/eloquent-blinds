import React, { FC, useState } from "react"
import { Panel } from "@/Components/Panel"
import { InputError, InputLabel, SaveSubmitButton, Textarea, TextInput } from "@/Components/Form"
import { useForm, usePage } from "@inertiajs/react"
import axios from "axios"
import { PageProps } from "@/types"
import toast from "react-hot-toast"
import { Banner, ToastItem } from "@/Components/Notifications"
import { twMerge } from "tailwind-merge"
import confetti from "canvas-confetti"

interface ContactsProps {
  data: {
    label: string
    value: string
  }
}

interface SubjectProp {
  subject?: string
  className?: string
}

const ContactForm: FC<SubjectProp> = ({ subject: productSubject = "", className }) => {
  const { flash } = usePage<PageProps>().props

  const [contacts, setContacts] = useState<ContactsProps>()

  async function getUsers() {
    const { data } = await axios.get(route("dashboard.contacts"))
    setContacts(data)
  }

  // useEffect(() => {
  //     (async function () {
  //         await getUsers();
  //     })();
  // }, []);

  function handleInput(e: any) {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmitForm(e: any): void {
    e.preventDefault()
    clearErrors()
    post(route("contact.form"), {
      onSuccess: () => {
        reset()
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Message successfully send`} icon={`check`} />)
        confetti({
          particleCount: 200,
          spread: 220,
          origin: { y: 0.4 },
          gravity: 2,
          colors: ["#5eead4", "#2dd4bf", "#0284c7", "#22d3ee"],
        })
      },
      onError: () => {
        toast.custom((t) => <ToastItem t={t} icon={`cross`} type={`error`} title={`Error`} message={`Something went wrong`} />)
      },
      preserveState: true,
      preserveScroll: true,
    })
  }

  const { data, setData, processing, recentlySuccessful, errors, clearErrors, reset, post, get } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    subject: `${productSubject?.length !== 0 ? "Please give me a quote for " + productSubject : ""}  `,
  })

  return (
    <Panel className={twMerge(`my-4 md:my-6 lg:my-8 space-y-4`, className)} styles={`default`}>
      <Panel.Header heading={`${productSubject?.length === 0 ? "Contact Us" : "Get Quote for " + productSubject}`} />
      {flash && <Banner message={flash} />}
      <form onSubmit={handleSubmitForm} noValidate method={`POST`} className={"space-y-2"}>
        <div className="grid grid-co  ls-1 md:grid-cols-2 gap-x-6 gap-y-2">
          <div className={`col-span-2 md:col-span-1`}>
            <InputLabel htmlFor={`first_name`} value={`First Name`} />
            <TextInput name={`first_name`} id={`first_name`} value={data.first_name} onChange={handleInput} className={`w-full mt-2`} />
            <InputError className={`mt-2`} message={errors.first_name} />
          </div>

          <div className={`col-span-2 md:col-span-1`}>
            <InputLabel htmlFor={`last_name`} value={`Last Name`} />
            <TextInput name={`last_name`} id={`last_name`} value={data.last_name} onChange={handleInput} className={`w-full mt-2`} />
            <InputError className={`mt-2`} message={errors.last_name} />
          </div>

          <div className={`col-span-2 md:col-span-1`}>
            <InputLabel htmlFor={`email`} value={`Email`} />
            <TextInput name={`email`} id={`email`} type={`email`} value={data.email} onChange={handleInput} className={`w-full mt-2`} />
            <InputError className={`mt-2`} message={errors.email} />
          </div>

          <div className={`col-span-2 md:col-span-1`}>
            <InputLabel htmlFor={`phone`} value={`Phone`} />
            <TextInput name={`phone`} id={`phone`} type={`tel`} value={data.phone} onChange={handleInput} className={`w-full mt-2`} />
            <InputError className={`mt-2`} message={errors.phone} />
          </div>
          <div className={`col-span-2`}>
            <InputLabel htmlFor={`subject`} value={`Subject`} />
            <TextInput
              name={`subject`}
              id={`subject`}
              type={`text`}
              disabled={productSubject?.length !== 0}
              value={data.subject}
              onChange={handleInput}
              className={`w-full mt-2`}
            />
            <InputError className={`mt-2`} message={errors.subject} />
          </div>
        </div>
        <div>
          <InputLabel htmlFor={`message`} value={`Message`} />
          <Textarea name={`message`} id={`message`} onChange={handleInput} value={data.message} className={`w-full mt-2 min-h-[175px]`} />
          <InputError className={`mt-2`} message={errors.message} />
        </div>

        <div>
          <SaveSubmitButton type={`submit`} processing={processing} recentlySuccessful={recentlySuccessful} buttonText={`Send email`} />
        </div>
      </form>
    </Panel>
  )
}

export default ContactForm
