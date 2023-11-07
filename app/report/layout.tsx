import React from 'react'
import ApplicationShell from '../application-shell'


type ReportLayoutProps = {
  children: React.ReactNode
}

export default function ReportLayout({ children }: ReportLayoutProps) {
  return (
    <ApplicationShell>
      {children}
    </ApplicationShell>
  )
}
