import React, { useState } from "react"
import { Head, Link, useForm } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Panel } from "@/Components/Panel"
import { formatDistance, parseISO } from "date-fns"
import { SecondaryButton } from "@/Components/Buttons"
import EmailClient from "@/Pages/Dashboard/Messages/Partials/EmailClient"
import Modal from "@/Components/Modal"
import { useRecoilState } from "recoil"
import { ModelClose } from "@/lib/model-recoil"
import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown"

const Show = ({ auth, message }: any) => {
  const date = new Date()

  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const [isOpen, setIsOpen] = useRecoilState<boolean>(ModelClose)

  const { data, setData, reset, patch, errors, clearErrors, processing } = useForm<{
    read_at: null
  }>({
    read_at: null,
  })

  function closeModal() {
    setIsOpen(false)
    reset()
    clearErrors()
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleMarkedAsRead() {
    setData({
      ...data,
      read_at: null,
    })
    patch(route("dashboard.messages.update", message.id), {
      onSuccess: () => {
        setIsDisabled(true)
      },
    })
  }

  return (
    <AuthenticatedLayout
      header={
        <>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Messages</h2>
          <Link as={`button`} className={`text-white border border-gray-500 px-4 uppercase text-xs py-2 rounded-lg`} href={route("dashboard.messages.index")}>
            Back
          </Link>
        </>
      }
      user={auth.user}
    >
      <Head title={`Dashboard Messages Show`} />

      <div className="py-12">
        <div className="wrapper ">
          <Panel>
            <Panel.Header heading={message.subject} paragraph={`Message from ${message.user.name}`} />
            <div className="flex justify-between items-center">
              <ul className="md:flex md:space-x-4 my-4 text-white">
                <li>{message.user.name}</li>
                <li>{message.user.email}</li>
                <li>{message.user.phone}</li>
              </ul>
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-800`}>
                  Send{" "}
                  {formatDistance(parseISO(message.created_at), date, {
                    includeSeconds: true,
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>

            <div className={`my-4 text-gray-200`}>{message.message}</div>
            <div className="space-x-4 pt-4">
              <SecondaryButton className={`btn btn-secondary text-white`} onClick={openModal}>
                Replay
              </SecondaryButton>
            </div>
          </Panel>

          {message.children &&
            (message.children as unknown as any[]).map((child) => (
              <Panel styles={`default`} className={`my-4`} key={child.id}>
                <Panel.Header heading={child.subject} paragraph={`Message from ${child.user.name}`} />
                <span className={`inline-flex items-center my-4 px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-800`}>
                  Send{" "}
                  {formatDistance(parseISO(child.created_at), date, {
                    includeSeconds: true,
                    addSuffix: true,
                  })}
                </span>
                <ReactMarkdown className={`prose dark:prose-invert my-8 `} children={child.message} remarkPlugins={[remarkGfm]} />
                <div className={`my-4 text-gray-200`}>{child.message}</div>
              </Panel>
            ))}

          <Modal show={isOpen} onClose={closeModal} maxWidth={`2xl`} closeable={true}>
            <EmailClient parent={message.id} subject={message.subject} user={message.user} />
          </Modal>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show
