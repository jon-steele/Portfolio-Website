import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Header from '@/components/sections/header';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Hobbies from '@/components/sections/Hobbies';
import Projects from '@/components/sections/Projects';


export default function Index() {
  return (
    <div className="overflow-hidden">

    <Script src='/animations.js' />

      <Head>
        <title>Jon Steele</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='mt-16 font-ds text-gray-700 bg-slate-200 overflow-y-auto overflow-x-hidden'>

        <Home className="pt-32 flex flex-col gap-8 items-center justify-center text-center" />

        <div className='bg-wave1 bg-cover bg-bottom bg-no-repeat bg-slate-200 wave'></div>

        <Projects className="py-16 px-8 -mt-18 bg-gray-700 text-slate-200" />

        <div className='bg-wave2 bg-cover bg-bottom bg-no-repeat bg-gray-700 wave'></div>

        <Skills className="py-16 flex flex-col md:flex-row justify-evenly items-center gap-36" />

        <div className='bg-wave3 bg-cover bg-bottom bg-no-repeat bg-slate-200 wave'></div>

        <About className="px-4 md:px-16 py-16 bg-gray-700 text-slate-200 flex flex-col gap-8" />

        <div className='bg-wave4 bg-cover bg-bottom bg-no-repeat bg-gray-700 wave'></div>

        <Hobbies className="px-4 md:px-16 py-16 flex flex-col gap-8" />

        <div className='bg-wave5 bg-cover bg-bottom bg-no-repeat bg-slate-200 wave'></div>

        <Contact className="py-16 bg-gray-700 flex flex-col md:flex-row justify-center items-center" />

      </main>
    </ div>
  )
}


