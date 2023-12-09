"use client"

import Image from "next/image"
import Link from 'next/link'
import { useSearchParams } from "next/navigation"

export default function PartnerSubmitPage() {
  const searchParams = useSearchParams();
  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const nik = searchParams.get("nik");
  const phone = searchParams.get("phone");

  return (
    <main className="grid grid-cols-[1fr_2fr] bg-white text-black">
      <div className="bg-sky-500 pt-24 px-12">
        <div>
          <Image className="mb-24" src="/wizz.png" width={200} height={200} alt="wizz-logo" />
          <p className="text-white font-semibold text-lg">Applying for loan has never been this easy.</p>
          <p className="text-white font-semibold text-lg">Apply with Wizz now, and your cash advance will be delivered in 15 minutes</p>
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
        <Image src="/success.png" width={160} height={160} alt="success" />
        <h3 className="text-2xl font-semibold">Successfully submitted!</h3>
        <p className="text-sm text-gray-400">Thank you for your submission.</p>
        <a href="/" className="text-sky-500 font-semibold hover:text-sky-500/80">Back to home</a>
      </div>
      <div className="fixed right-6 bottom-6">
        <Link href={`/report?fullName=${fullName}&email=${email}&nik=${nik}&phone=${phone}`}>
          <button type="button" className="flex shadow-xl items-center justify-center text-white bg-pink-700 rounded-full hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 px-3 py-2 focus:outline-none dark:focus:ring-pink-800">
            <span className="text-xs">DEMO: Go to nalar.ai Report Demo</span>
          </button>
        </Link>
      </div>
    </main>
  )
}
