import { MainLayout} from "../components/layouts/MainLayout"
import Head from 'next/head'
import Link from 'next/link'



export default function HomePage() {
  return (
   <MainLayout >
    <Head>
      <title>Home page</title>
      <meta name="description" content='Home Page'></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <h1 className="text-6xl font-bold text-center">Ir a  about<Link href={"/"} >Home</Link></h1>
    </main>
   </MainLayout>
  )
}
