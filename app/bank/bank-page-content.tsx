"use client";

import { useState } from "react";

export default function BankPageContent() {
  const [showDummyResult, setShowDummyResult] = useState(false);
  const handleUpload = (e: any) => {
    e.preventDefault();
    setShowDummyResult(true);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center md:pl-[16rem] md:pt-16 gap-6 light">
      <div className="p-6 w-3/4">
        <form action="#">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input">Upload file</label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              name="file_input"
              type="file" />
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-blue-500 p-2 rounded text-xs mt-4 hover:bg-blue-500/80 focus:ring-4 focus:outline-none focus:ring-blue-300" type="submit" onClick={handleUpload}>Upload</button>
          </div>
        </form>
        {
          showDummyResult && (
            <div className="mt-24 flex justify-between">
              <p className="text-gray-900">Bank_analysis_result.xlsx</p>
              <button type="button" className="text-white bg-blue-500 hover:bg-blue-500/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Download
                <svg className="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4" />
                </svg>
              </button>
            </div>
          )
        }
      </div>
    </main>

  )
}
