import React from 'react'


type ReportLayoutProps = {
  children: React.ReactNode
}

export default function ReportLayout({ children }: ReportLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
