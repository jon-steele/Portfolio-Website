import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Header } from './components/header.js'

export default function Home() {
  return (
    <div className='h-screen bg-slate-100 text-gray-700 font-ds'>
      <Head>
        <title>Jon's Website</title>
      </Head>

      <Header />

      <Body />

    </div>
  )
}

export function Body(){
  return(
    <main className='h-full flex justify-center content-center items-center'>
      <p>Welcome to my website.</p>
    </main>
  );
}
