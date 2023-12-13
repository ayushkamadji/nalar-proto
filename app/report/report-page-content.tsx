"use client"

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'

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
        </ul>
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
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{fullName}</span>
            </div>
          </li>
        </ol>
      </nav>
      {/* <button type="button" className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex gap-2 items-center">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4" />
        </svg>
        Download Raw Data
      </button> */}
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
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg> :
            <svg data-accordion-icon className="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
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
  phone: string
  nik: string
  data: FraudData
}

function ReportContent({ fullName, email, nik, phone, data }: ReportContentProps) {
  return (
    <div>
      <ReportCards data={data} />
      <div className="flex flex-col mt-6 gap-6">
        <Accordion title={{ label: "Fraud Assessment" }} initialStateActive>
          <FraudAssesmentContent fullName={fullName} email={email} nik={nik} phone={phone} data={data} />
        </Accordion>
        {/* <Accordion title={{ label: "Credit Assessment" }} initialStateActive>
          <CreditAssesmentContent fullName={fullName} email={email} />
        </Accordion> */}
      </div>
    </div>
  )
}

function ReportCards({ data }: { data: FraudData }) {
  const gradeColor = gradeColorMap[data.grade as keyof typeof gradeColorMap]
  const recommendationColor = data.prediction_result === "Fraud" ? "text-red-500" : "text-green-500"
  return (
    <div className="flex justify-start gap-6">
      <div className="p-4 min-w-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Fraud score</h5>
        <p className={cn(["font-semibold", gradeColor])}>{data.score}</p>
      </div>
      <div className="p-4 w-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Grade</h5>
        <p className={cn(["font-semibold", gradeColor])}>{data.grade}</p>
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Recommendation</h5>
        <p className={cn(["font-semibold", recommendationColor])}>
          {data.prediction_result === "Fraud" ? "Deny" : "Approve"}
        </p>
      </div>
    </div>
  )
}

type CreditAssesmentContentProps = {
  fullName: string
  email: string
}

function CreditAssesmentContent({ fullName, email }: CreditAssesmentContentProps) {
  return (
    <div className="block flex flex-col  rounded-lg shadow p-6 mt-6 bg-gray-100 dark:bg-gray-800" >
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="font-semibold">Name</h3>
              <p className="text-opacity-95">{fullName}</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">NIK</h3>
              <p className="text-opacity-95">327320190721009</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Date of birth/Age</h3>
              <p className="text-opacity-95">18 May 1992/31 Years Old</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Gender</h3>
              <p className="text-opacity-95">Male</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Longitude</h3>
              <p className="text-opacity-95">-7.74124</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Latitude</h3>
              <p className="text-opacity-95">110.40845</p>
            </div>
            <br />
            <div className="flex justify-between">
              <h3 className="font-semibold">Monthly Income Estimation</h3>
              <p className="text-opacity-95">Rp 4,000,000</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Average Monthly Spending</h3>
              <p className="text-opacity-95">Rp 1,567,225</p>
            </div>
            <br />
            <div className="flex justify-start items-center gap-12">
              <div className="flex flex-col items-start">
                <p className="font-bold">Total Score</p>
                <p className="font-semibold text-blue-400">880</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">Grade</p>
                <p className="font-semibold text-blue-400">D</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">Recommendation</p>
                <Badge color="green">Approve</Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-12">
            <select title="period" id="period" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>January 2023 - December 2023</option>
              <option>January 2022 - December 2022</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-start">
          <Image src="/nalar-graph1.png" width={800} height={400} alt="ewallet-graph" />
          <Image src="/nalar-graph2.png" width={200} height={400} alt="transaction-graph" />
          <Image src="/nalar-graph3.png" width={500} height={300} alt="products-graph" />
          <Image src="/nalar-graph4.png" width={500} height={300} alt="weekly-graph" />
        </div>
      </div>
    </div>
  )
}

type FraudAssesmentContentProps = {
  fullName: string
  email: string
  phone: string
  nik: string
  data: FraudData
}

const gradeColorMap = {
  "A": "text-green-600",
  "B": "text-green-600",
  "C": "text-green-600",
  "D": "text-yellow-600",
  "E": "text-yellow-600",
  "F": "text-red-600",
}

function FraudAssesmentContent({ fullName, email, phone, nik, data }: FraudAssesmentContentProps) {
  const name = fullName.split(" ")[0]
  const gradeTextStyle = gradeColorMap[data.grade as keyof typeof gradeColorMap]
  const recommendationBgStyle = data.prediction_result === "Fraud" ? "bg-red-500" : "bg-green-500"

  return (
    <div className="block flex flex-col  rounded-lg shadow p-6 mt-6 bg-gray-100 dark:bg-gray-800" >
      <div id="fraud-header" className="flex justify-start items-center gap-12">
        <div className="flex flex-col">
          <div className="font-semibold">{email}</div>
          <div className="text-sm text-opacity-95">Active 2 minutes ago</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
          </svg>
          <div className="font-semibold">{phone}</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.656 12.115a3 3 0 0 1 5.682-.015M13 5h3m-3 3h3m-3 3h3M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm6.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          <div className="font-semibold">{nik}</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          <div className="font-semibold">42 Devices</div>
        </div>
      </div>
      <div id="fraud-score" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Fraud Score</h3>
        <p className={cn(["text-lg font-semibold", gradeTextStyle])}>{data.score}</p>
      </div>
      <div id="fraud-grade" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Fraud Grade</h3>
        <p className={cn(["text-lg font-semibold", gradeTextStyle])}>{data.grade}</p>
      </div>
      <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Recommendation</h3>
        <p className={cn(["text-white text-center font-semibold rounded-md px-6 py-0.5", recommendationBgStyle])}>{data.prediction_result === "Fraud" ? "Deny" : "Approve"}</p>
      </div>
      <div id="fraud-indicators" className="flex flex-col gap-2 mt-6">
        <Accordion title={{ label: "Fraud Indicators", className: "text-xl text-black dark:text-white" }} initialStateActive>
          <div className="flex gap-2 flex-wrap mt-4">
            {data.fraud_indicator.map(([indicator, _]) => {
              return (
                <Badge key={indicator} color="red">{indicator}</Badge>
              )
            })}
            {/* <Badge color="red">Excessive Content Sharing</Badge>
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
            <Badge color="yellow">Reusable Phone Numbers</Badge> */}
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
      {/* <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Profile Authenticity Likeness</h3>
        <p className="text-white text-center font-semibold bg-yellow-500 rounded-md px-6 py-0.5">Weak</p>
      </div>
      <div id="fraud-recommendation" className="flex justify-between mt-6">
        <h3 className="text-lg font-semibold">Character Assesment</h3>
        <p className="text-white text-center font-semibold bg-green-500 rounded-md px-6 py-0.5">Decent</p>
      </div> */}
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

type FraudData = {
  name: string
  grade: string
  phone: string
  ktp: string
  score: number
  fraud_indicator: string[][]
  prediction_result: "Fraud" | "Non-Fraud"
}

export default function ReportPageContent({ data }: { data: FraudData }) {
  const searchParams = useSearchParams();
  const fullName = searchParams.get("fullName") || "Jese Leoss"
  const email = searchParams.get("email") || "jese.leoss3@gmail.com"
  const nik = searchParams.get("nik") || "327320190721009"
  const phone = searchParams.get("phone") || "08123456789"

  if (!data) {
    return (
      <div className="min-h-screen md:pl-[16rem] md:pt-16 w-full bg-white text-black">No data found for NIK and Phone (please use partner form)</div>
    )
  }

  return (
    <>
      <ReportSideBar fullName={fullName} email={email} />
      <BreadCrumbs fullName={fullName} />
      <main className="flex min-h-screen w-full flex-col items-center md:pl-[32rem] gap-6">
        <div className="p-6 w-full">
          <ReportContent fullName={fullName} email={email} nik={nik} phone={phone} data={data} />
        </div>
      </main>
    </>
  )
}
