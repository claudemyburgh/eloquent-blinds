import React from "react"
import AppLayout from "@/Layouts/AppLayout"

interface ErrorPageProps {
  status: number
}

const ErrorPage: React.FC<ErrorPageProps> = ({ status }) => {
  // @ts-expect-error
  const title: { [key: number]: string } = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden",
  }[status]
  // @ts-expect-error
  const description: { [key: number]: string } = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page.",
  }[status]

  //www.eloquentblinds.co.za/category/bam-boo-blinds
  //eloquentblinds.co.za/category/bam-boo-blinds

  return (
    <AppLayout>
      <div className="wrapper pt-32">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque deleniti et facere harum id laboriosam minima molestiae quam, qui, recusandae repellendus rerum saepe
        suscipit totam veniam voluptatibus. A, doloremque!
      </div>
    </AppLayout>
  )
}

export default ErrorPage
