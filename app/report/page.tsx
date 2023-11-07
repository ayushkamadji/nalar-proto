"use client"

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

function ReportSideBar({ fullName, email }: { fullName: string, email: string }) {
  return (
    <aside id="sidebar-users" className="fixed top-0 left-64 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="https://flowbite.com" className="flex items-center pl-2 mb-5">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="pt-5 pl-2 mt-5 mb-4 text-sm font-medium text-gray-500 uppercase border-gray-200 dark:text-gray-400 dark:border-gray-700">
          Customers
        </div>
        <ul className="pl-2 space-y-4 dark:border-gray-700">
          <li>
            <a href={`/report?fullName=${fullName}&email=${email}`} className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
              </div>
              {fullName}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
              </div>
              Bonnie Green
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
              </div>
              Joseph McFall
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
              </div>
              Lana Byrd
            </a>
          </li>
        </ul>
        {/* <ul className="space-y-2 pt-5 mt-5 mb-4">
          <li>
            <Link href="/report/new" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg className="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
              </svg>
              <span className="ml-3">Add customer</span>
            </Link>
          </li>
        </ul> */}
      </div>
    </aside>
  )
}

function BreadCrumbs({ fullName }: { fullName: string }) {
  return (
    <div className="flex justify-between items-start md:pl-[32rem] md:pt-16">
      <nav className="flex items-center justify-start gap-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 pl-4 pt-4">
          <li>
            <div className="flex items-center">
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Report</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{fullName}</span>
            </div>
          </li>
        </ol>
      </nav>
      <button type="button" className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex gap-2 items-center">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4" />
        </svg>
        Download Raw Data
      </button>
    </div >

  )
}

type AccordionProps = {
  title: { label: string, className?: string }
  initialStateActive?: boolean
  children: React.ReactNode
}

function Accordion({ title, initialStateActive, children }: AccordionProps) {
  const [active, setActive] = useState(initialStateActive || false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      className={cn([
        "w-full",
        active && "text-gray-900 dark:text-white",
        !active && "text-gray-500 dark:text-gray-400",
      ])} >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full font-medium text-left text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:opacity-95"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
          onClick={toggleActive}>
          <span className={cn(["text-lg font-semibold", title.className])}>{title.label}</span>
          {active ?
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg> :
            <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>}
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className={cn([
          !active && "hidden"
        ])}
        aria-labelledby="accordion-flush-heading-1">
        {children}
      </div>
    </div>

  )
}

type ReportContentProps = {
  fullName: string
  email: string
}

function ReportContent({ fullName, email }: ReportContentProps) {
  return (
    <div>
      <ReportCards />
      <div className="flex flex-col mt-6 gap-6">
        <Accordion title={{ label: "Fraud Assessment" }} initialStateActive>
          <FraudAssesmentContent fullName={fullName} email={email} />
        </Accordion>
        <Accordion title={{ label: "Credit Assessment" }} initialStateActive={false}>
          <></>
        </Accordion>
      </div>
    </div>
  )
}

function ReportCards() {
  return (
    <div className="flex justify-start gap-6">
      <div className="p-4 min-w-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Total score</h5>
        <p className="font-semibold text-blue-400 ">420</p>
      </div>
      <div className="p-4 w-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Grade</h5>
        <p className="font-semibold text-blue-400 ">D</p>
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Recommendation</h5>
        <p className="font-semibold text-red-400 ">Reject</p>
      </div>
    </div>
  )
}

type FraudAssesmentContentProps = {
  fullName: string
  email: string
}

function FraudAssesmentContent({ fullName, email }: FraudAssesmentContentProps) {
  const name = fullName.split(" ")[0]
  return (
    <div className="block flex flex-col  rounded-lg shadow p-6 mt-6 bg-gray-100 dark:bg-gray-800" >
      <div id="fraud-header" className="flex justify-start items-center gap-12">
        <div className="flex flex-col">
          <div className="font-semibold">{email}</div>
          <div className="text-sm text-opacity-95">Active 2 minutes ago</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full">
            <i className="rounded-full block fib fi-id fis w-8 h-8 shadow" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">Indonesia</div>
            <div className="text-sm text-opacity-95">DKI Jakarta, Jakarta</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          <div className="font-semibold">42 Devices</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
            </g>
          </svg>
          <div className="font-semibold">-7.74124, 110.40845</div>
        </div>
      </div>
      <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Profile Authenticity Likeness</h3>
        <p className="text-white text-center font-semibold bg-yellow-500 rounded-md px-6 py-0.5">Weak</p>
      </div>
      <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Character Assesment</h3>
        <p className="text-white text-center font-semibold bg-green-500 rounded-md px-6 py-0.5">Decent</p>
      </div>
      <div id="fraud-indicators" className="flex flex-col gap-2 mt-6">
        <Accordion title={{ label: "Fraud Indicators", className: "text-xl text-black dark:text-white" }} initialStateActive>
          <div className="flex gap-2 flex-wrap mt-4">
            <Badge color="red">Excessive Content Sharing</Badge>
            <Badge color="green">Impossible Travel</Badge>
            <Badge color="red">Suspicious IP</Badge>
            <Badge color="green">Users per Device (12)</Badge>
            <Badge color="default">Repetitive Email Pattern</Badge>
            <Badge color="indigo">Abuse-reported IP</Badge>
            <Badge color="default">Users per IP (31)</Badge>
            <Badge color="red">Bot Behavior IP</Badge>
            <Badge color="green">Verifications per IP (48)</Badge>
            <Badge color="yellow">Blocked Phone Numbers</Badge>
            <Badge color="default">New Country</Badge>
            <Badge color="red">Credential Stuffing</Badge>
            <Badge color="green">New Device</Badge>
            <Badge color="default">Datacenter IP</Badge>
            <Badge color="pink">Frequent Device Toggling</Badge>
            <Badge color="purple">Proxy IP</Badge>
            <Badge color="pink">SIM Card Age &lt; 3</Badge>
            <Badge color="yellow">Reusable Phone Numbers</Badge>
          </div>
        </Accordion>
      </div>
      <div id="fraud-summary" className="flex flex-col gap-2 mt-6">
        <Accordion title={{ label: "Summary", className: "text-xl text-black dark:text-white" }} initialStateActive>
          <p className="whitespace-pre-line mt-4">
            Our investigation has identified suspicious patterns of frequent device switching associated with {name}&apos;s online accounts. Key observations include multiple failed login attempts from different devices within a short time period, unexplained geographical discrepancies in the locations of devices used for accessing their accounts, abrupt changes in device usage behvaior for their profiles. Suspicious bot-like behavior has been detected on {name}&apos;s online accounts, including reptitive and automated actions. We also recognized unusual patterns of API access have been detected, suggesting potential misuse of unauthorized access to his personal information. Key observations which include a significant increase in API calls from specific online accounts or applications, irregular data transafer volumes via API, particularly in the context of personal data access, deviations from normal API usage patterns, which may indicate misuse or fraudulent activity. The usage of SIM card of less than 3 months also indicates that {name} signed up new number for specific lending purpose.
          </p>
        </Accordion>
      </div>
      <div id="fraud-score" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Fraud Score</h3>
        <p className="text-lg font-semibold text-yellow-600">250</p>
      </div>
      <div id="fraud-grade" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Fraud Grade</h3>
        <p className="text-lg font-semibold text-yellow-600">E</p>
      </div>
      <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Recommendation</h3>
        <p className="text-white text-center font-semibold bg-red-500 rounded-md px-6 py-0.5">Deny</p>
      </div>
    </div >
  )
}

const badgeVariants = cva(
  "inline-block text-sm font-medium mr-2 px-2.5 py-0.5 rounded",
  {
    variants: {
      color: {
        default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
        red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
        purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      }
    },
    defaultVariants: {
      color: "default"
    }
  }
)

type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: React.ReactNode
}

function Badge({ children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color: props.color }))}>{children}</span>
  )
}


export default function ReportPage() {
  const searchParams = useSearchParams();
  const fullName = searchParams.get("fullName") || "Jese Leoss"
  const email = searchParams.get("email") || "jese.leoss3@gmail.com"

  return (
    <>
      <ReportSideBar fullName={fullName} email={email} />
      <BreadCrumbs fullName={fullName} />
      <main className="flex min-h-screen w-full flex-col items-center md:pl-[32rem] gap-6">
        <div className="p-6 w-full">
          <ReportContent fullName={fullName} email={email} />
        </div>
      </main>
    </>
  )
}
