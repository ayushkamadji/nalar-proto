import Image from 'next/image'
import ApplicationShell from './application-shell'

export default function Home() {
  return (
    <ApplicationShell>
      <main className="flex min-h-screen flex-col items-center justify-center md:pl-64 md:pt-16 gap-6">

        <img
          src="/logo.png"
          className="h-24"
          alt="Nalar Logo"
        />
        <h1 className="text-black dark:text-white">Welcome to your Nalar dashboard!</h1>
      </main>
    </ApplicationShell>
  )
}
