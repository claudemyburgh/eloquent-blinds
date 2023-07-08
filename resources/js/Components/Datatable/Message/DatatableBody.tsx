import React from "react"
import { Link, usePage } from "@inertiajs/react"
import { PageProps } from "@/types"

interface MessageProps extends PageProps {
  messages: {
    data: {
      subject: string
      message: string
      read_at: string
      user: UserProp[]
    }
  }
}

interface UserProp {
  name: string
  email: string
  phone?: string
}

const DatatableBody = () => {
  const { messages } = usePage<MessageProps>().props

  return (
    <tbody className={`divide-y divide-gray-900`}>
      {messages.data &&
        (messages.data as unknown as any[]).map((message: any) => (
          <tr key={message.id} className={` ${message.read_at == null ? "even:bg-gray-900/50" : "even:bg-gray-900/50"}`}>
            <td className={`w-[50px] px-3.5 py-4 text-sm text-gray-500 hidden md:flex`} scope="col">
              {message.id}
            </td>
            <td className={`w-[40px] px-3.5 py-4 text-sm text-gray-500 text-center`} scope="col">
              {message.read_at !== null ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/30 text-green-50">Read</span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/30 text-rose-50">Unread</span>
              )}
            </td>
            <td className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500`} scope="col">
              {message.name}
            </td>
            <td className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500 `} scope="col">
              {message.email}
            </td>
            <td className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500`} scope="col">
              {message.phone}
            </td>
            <td className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500`} scope="col" colSpan={3}>
              {message.subject}
            </td>
            <td className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500`} scope="col">
              <Link href={route("dashboard.messages.show", message.id)} className={`px-4 py-1.5 rounded bg-gray-900/50 text-white text-xs uppercase`}>
                View
              </Link>
            </td>
          </tr>
        ))}
    </tbody>
  )
}

export default DatatableBody
