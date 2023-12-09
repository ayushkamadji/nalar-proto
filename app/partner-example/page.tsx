"use client"

import Image from "next/image"
import Link from "next/link"
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
      background: "bg-white dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-200",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <div>
        <svg className="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </div>,
      next: () => <div>
        <svg className="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
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
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(
  { type, label, name, placeholder, required = false, value, onChange }: TextInputProps
): JSX.Element {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {onChange ?
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        /> :
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder}
          required={required} />
      }
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

type SelectInputProps = {
  label: string
  name: string
  options: string[]
}

function SelectInput({ label, name, options }: SelectInputProps) {
  return (
    <>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
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
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [nik, setNik] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  return (
    <main className="grid grid-cols-[1fr_2fr] bg-white text-black">
      <div className="bg-sky-500 pt-24 px-12">
        <div className="fixed top-[160px] left-[24px]">
          <Image className="mb-24" src="/wizz.png" width={200} height={200} alt="wizz-logo" />
          <p className="text-white font-semibold text-lg">Applying for loan has never been this easy.</p>
          <p className="text-white font-semibold text-lg break-normal">Apply with Wizz now, and your cash advance will be<br /> delivered in 15 minutes</p>
        </div>
        <div className="">
          <Image className="fixed bottom-0" src="/persona.png" alt="persona" width={250} height={200} />
          <Image className="fixed bottom-0 left-[280px]" src="/app.png" alt="app" width={180} height={200} />
          <Image className="fixed bottom-[200px] left-[260px]" src="/money.png" alt="money" width={150} height={200} />
          <Image className="fixed bottom-[200px] left-[280px]" src="/money.png" alt="money" width={150} height={200} />
          <Image className="fixed bottom-[200px] left-[300px]" src="/money.png" alt="money" width={150} height={200} />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center  gap-6">
        <section className="bg-white dark:bg-gray-900 w-full">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Apply for Loan</h2>
            <form action="/" method="GET">
              <fieldset className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
                <h2 className="text-lg">Personal Information</h2>
                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    label="Full Name"
                    name="fullname"
                    placeholder="Type full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Type email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    placeholder="Type phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    label="NIK"
                    name="nik"
                    placeholder="Type NIK"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
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
                <div className="w-full">
                  <Input
                    type="number"
                    label="Monthly Income"
                    name="monthly_income"
                    placeholder="Rp 1000000"
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    label="Gender"
                    name="gender"
                    options={["Male", "Female"]} />
                </div>

                <div className="w-full col-span-2">

                  <label
                    htmlFor="dropzone-file"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload Selfie
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
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
                  <SelectInput
                    label="Tenure"
                    name="tenure"
                    options={["3 months", "6 months", "9 months", "12 months"]} />
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
              <Link href={`/partner-example/submit?fullName=${fullName}&email=${email}&nik=${nik}&phone=${phone}`}>
                <button type="button" className="w-full items-center px-5 py-2.5 mt-4 sm:mt-8 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Submit Loan Application
                </button>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
