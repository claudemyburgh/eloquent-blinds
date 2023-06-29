import React, { FC } from "react"

const DevBanner: FC<{ on: boolean }> = ({ on = false }) => {
  return (
    on && (
      <div className={`fixed z-[1000] bottom-4 inset-x-0`}>
        <div className="wrapper relative font-bold text-lg text-rose-950 text-center bg-rose-500 p-2 rounded-lg">
          The website is in development, but feel free to contact us for any inquiries.
        </div>
      </div>
    )
  )
}

export default DevBanner
