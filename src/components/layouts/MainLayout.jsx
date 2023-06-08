import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export const MainLayout = ({children}) => {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <Head>
      <title>Home page</title>
      <meta name="description" content='Home Page'></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar></Navbar>

    <main>

    <h1 className="text-6xl font-bold text-center">Ir a  about<Link href={"/about"} ></Link></h1>
    </main>


  </main>
  )
}
