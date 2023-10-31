import Link from 'next/link'
import React from 'react'

function ReportSideBar() {
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
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese avatar" />
                <span className="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
              </div>
              Jese Leos
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="bonnie avatar" />
                <span className="absolute top-0 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
              </div>
              Bonnie Green
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph avatar" />
                <span className="absolute top-0 left-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-gray-800"></span>
              </div>
              Joseph McFall
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white">
              <div className="relative mr-2.5">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Lana avatar" />
                <span className="absolute top-0 left-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white dark:border-gray-800"></span>
              </div>
              Lana Byrd
            </a>
          </li>
        </ul>
        <ul className="space-y-2 pt-5 mt-5 mb-4">
          <li>
            <Link href="/report/new" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg className="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
              </svg>
              <span className="ml-3">Add customer</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
export default function ReportPage() {
  return (
    <>
      <ReportSideBar />
      <main className="flex min-h-screen flex-col items-center justify-center md:pl-[32rem] md:pt-16 gap-6">
        Hello world
      </main>
    </>
  )
}
