import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"
import { PageProps } from "@/types"
import React from "react"
import Card from "@/Components/Dashboard/Stats/Card"
import ChartLine from "@/Components/Charts/ChartLine"
import { primary, secondary } from "@/lib/colors"

const d = {
  labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],

  datasets: [
    {
      label: "My First dataset",
      pointRadius: 4,
      borderWidth: 3,
      fill: true,
      borderJoinStyle: "round",
      tension: 0.4,
      backgroundColor: "rgba(14,165,233, 0.25)",
      borderColor: primary["500"],
      data: [0, 4, 2, 6.5, 3, 4.7, 0],
      showLine: true,
    },
    {
      label: "My Second dataset",
      pointRadius: 4,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(245,158,11,.25)",
      borderColor: secondary["500"],
      data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2],
      showLine: true,
    },
  ],
}

const opt = {
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
}

interface UserCountProps {
  users: number
  emails: {
    unread: number
  }
  messages: {
    data: number[]
    labels: string[]
  }
}

export default function Dashboard({ auth, users, emails, messages }: PageProps & UserCountProps) {
  const data = {
    labels: messages.labels,
    datasets: [
      {
        label: "Messages stats",
        data: messages.data,
        borderWidth: 2,
        tension: 0.4,
        pointBorderWidth: 10,
        pointBorderHeight: 10,
        borderColor: ["rgba(14,165,233,1)", "rgba(245,158,11,1)"],
        fill: true,
        backgroundColor: ["rgba(14,165,233, 0.15)", "rgba(245,158,11,.15)"],
        hoverOffset: 3,
      },
    ],
  }

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}>
      <Head title={`Dashboard`} />

      <div className="py-12">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 my-8">
          <Link href={route("dashboard.messages.index")}>
            <Card name="Unread Messages" count={emails.unread} styles={emails.unread > 0 ? "rose" : "primary"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16">
                <path
                  fillRule="evenodd"
                  d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                  clipRule="evenodd"
                />
              </svg>
            </Card>
          </Link>

          <Link href={route("dashboard.users.index")}>
            <Card name="users" count={users} styles={`yellow`} icon={`message`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </Card>
          </Link>
        </div>

        <div className="wrapper grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 my-8">
          <ChartLine className={`col-span-2`} type={`bar`} data={data} />
        </div>
        <div className="wrapper">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 space-x-4">
            <Link className={`btn btn-secondary`} href={route("dashboard.sitemap")} method="post" as={`button`} type={`button`}>
              Sitemap
            </Link>
            <Link className={`btn btn-secondary`} href={route("dashboard.cache")} method="post" as={`button`} type={`button`}>
              Clear Cache
            </Link>
            <Link
              className={`btn btn-secondary`}
              href={`https://www.google.com/ping?sitemap=https://www.eloquentblinds.co.za/sitemap.xml`}
              method="post"
              as={`button`}
              type={`button`}
            >
              Ping Google Sitemap
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
