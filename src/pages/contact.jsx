import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { MainLayout} from "../components/layouts/MainLayout"

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >    
      <MainLayout>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content='About page'></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-6xl font-bold text-center">Ir a <Link href={"/"} >Home</Link></h1>
      </main>
      </MainLayout>
    </main>
  )
}