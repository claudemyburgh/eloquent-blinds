import React from "react"
import { Panel } from "@/Components/Panel"
import QRCode from "qrcode.react"

const VCard = () => {
  // Format the vCard data as a string
  const vCardData = `
    BEGIN:VCARD
    VERSION:3.0
    N:"Claude";"Myburgh"
    FN:"Claude Myburgh
    EMAIL:claude@eloquentblinds.co.za
    TEL:"0817198302
    END:VCARD
  `

  return (
    <Panel className={`max-w-3xl mx-auto my-24`}>
      <h1 className={`text-3xl font-semibold text-gray-700`}>vCard</h1>
      <QRCode size={500} width={500} height={500} className={` aspect-square`} value={vCardData} />
    </Panel>
  )
}

export default VCard
