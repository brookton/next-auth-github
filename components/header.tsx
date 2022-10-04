import { Popover } from '@headlessui/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Head from 'next/head'

export default function Header() {
  const { data: session, status } = useSession()
  if (session) {
  }
  if (!session) {
  }
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white dark:bg-gray-600 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            Home
          </Link>
        </div>
        <div className="">
          <a
            href="/one"
            className="pr-2  no-underline text-grey-darkest hover:text-blue-dark ml-2">
            One
          </a>
          <a
            href="/two"
            className="pr-2 no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Two
          </a>
          <a
            href="/three"
            className=" no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Three
          </a>
        </div>
      </nav>
    </>
  )
}
