import React, { FC } from "react"

const DevBanner: FC<{ on: boolean }> = ({ on = false }) => {
  return (
    on && (
      <div className={`fixed  z-[1000] bottom-12 inset-x-0`}>
        <div className="wrapper relative font-bold text-2xl text-rose-950 text-center bg-rose-500 p-8 rounded-lg">
          The website is in development, but feel free to contact us for any inquiries.
        </div>
      </div>
    )
  )
}

export default DevBanner
