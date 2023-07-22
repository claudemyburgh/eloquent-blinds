import React, { ReactNode } from "react"
import { colorStyles, StyleProps } from "@/lib/colors"

interface PanelProps extends StyleProps {
  children?: ReactNode
  className?: string
}

interface PanelHeaderProps extends PanelProps {
  heading: string
  paragraph?: string
}

const Panel = ({ children, className, styles = "default" }: PanelProps) => {
  return (
    <div className={`p-4 sm:p-8 relative overflow-hidden shadow-md shadow-gray-950/10 dark:shadow-gray-950 rounded-global ${colorStyles[styles]} ${className}`}>
      {styles !== "default" && (
        <div aria-hidden={true} className={`bg-white/10 rotate-12 scale-150 h-full w-full absolute -top-2/3 pointer-events-none inset-x-0 rounded-[120%]`}></div>
      )}
      {children}
    </div>
  )
}

Panel.Header = ({ heading, paragraph, className, children }: PanelHeaderProps) => (
  <header>
    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{heading}</h2>
    {paragraph && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{paragraph}</p>}
    {children}
  </header>
)
export default Panel
