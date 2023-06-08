import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>About Page</title>
        <meta name="description" content='About page'></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main>
        <h1 className="text-6xl font-bold text-center">Ir a <Link href={"/"} >Home</Link></h1>
      </main>


    </main>
  )
}
