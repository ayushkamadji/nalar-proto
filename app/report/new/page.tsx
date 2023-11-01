"use client"

import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"

type DatePickerProps = {
  label: string,
  name: string
}

function DatePicker(
  { label, name }: DatePickerProps
): JSX.Element {
  const options = {
    title: label,
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <div>
        <svg className="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </div>,
      next: () => <div>
        <svg className="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </div>,
    },
    datepickerClassNames: "top-12",
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
  }

  const [show, setShow] = useState<boolean>(false)
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </>
  )
}


type TextInputProps = {
  type: "text" | "email" | "number" | "password" | "tel"
  label: string
  name: string
  placeholder: string
  required?: boolean
}

function Input(
  { type, label, name, placeholder, required = false }: TextInputProps
): JSX.Element {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

function Textarea() {
  return (
    <>
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
      <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
    </>
  )
}

type RangeStepperProps = {
  label: string
  name: string
  min: number
  max: number
  step: number
  initialValue: number,
  units: string
}

function RangeStepper(
  { label, name, min, max, step, initialValue, units }: RangeStepperProps
) {
  const [value, setValue] = useState<number>(initialValue || 0)

  return (
    <>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input id={name} type="range" min={min} max={max} value={value} step={step} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => setValue(+e.target.value)} />
      <p className="text-sm text-gray-400">{value} {units}</p>
    </>
  )
}

export default function NewReportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:pl-64 md:pt-16 gap-6">
      <section className="bg-white dark:bg-gray-900 w-full">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Generate report for new customer</h2>
          <form action="/report" method="GET">
            <fieldset className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
              <h2 className="text-lg">Customer Information</h2>
              <div className="sm:col-span-2">
                <Input
                  type="text"
                  label="Full Name"
                  name="fullname"
                  placeholder="Type full name"
                />
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Type email"
                />
              </div>
              <div className="w-full">
                <Input
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  placeholder="Type phone number"
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  type="text"
                  label="NIK"
                  name="nik"
                  placeholder="Type NIK"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  label="Place of Birth"
                  name="pob"
                  placeholder="Type place of birth"
                />
              </div>
              <div className="w-full relative">
                <DatePicker label="Date of Birth" name="dob" />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  label="Occupation"
                  name="occupation"
                  placeholder="Type occupation"
                />
              </div>
            </fieldset>
            <fieldset className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
              <h2 className="text-lg">Loan Information</h2>
              <div className="sm:col-span-2">
                <Input
                  type="number"
                  label="Amount"
                  name="loan_amount"
                  placeholder="Rp 1000000"
                />
              </div>
              <div className="sm:col-span-2">
                <RangeStepper
                  label="Tenure"
                  name="tenure"
                  min={3}
                  max={12}
                  step={3}
                  initialValue={6}
                  units="months"
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  type="text"
                  label="Purpose"
                  name="loan_purpose"
                  placeholder="Type purpose of loan"
                />
              </div>
            </fieldset>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-8 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Generate report
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
