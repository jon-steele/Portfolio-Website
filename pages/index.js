import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

import Home from '@/components/sections/home';
import About from '@/components/sections/about';
import Header from '@/components/sections/header';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Hobbies from '@/components/sections/hobbies';
import Projects from '@/components/sections/projects';


export default function Index() {
  return (
    <div className="overflow-hidden bg-gray-700">

    <Script src='/animations.js' />

      <Head>
        <title>Jon Steele</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='m-auto mt-16 font-ds bg-gray-700 text-slate-200 overflow-x-hidden max-w-6xl flex flex-col justify-center items-center w-screen'>
        
        <a className='anchor' id="home"></a>
        <Home className="bg-wave1 bg-cover bg-no-repeat bg-center text-gray-700 pt-32 flex flex-col gap-8 items-center justify-center text-center" />

        <a className='anchor' id="skills"></a>
        <Skills className="" />
        
        <a className='anchor' id="projects"></a>
        <Projects className="bg-cover bg-top bg-no-repeat py-16 px-0 pb-0 -mt-18 w-full bg-gray-700 text-slate-200" />

        <a className='anchor' id="about" ></a>
        <About className="bg-cover bg-bottom bg-no-repeat px-4 md:px-16 py-16 text-gray-700 bg-slate-200 flex flex-col gap-8 w-full" />

        <a className='anchor' id="hobbies"></a>
        <Hobbies className="bg-wave5 bg-cover bg-bottom bg-no-repeat px-4 md:px-16 py-16 flex flex-col gap-8" />

        <a className='anchor' id="contact"></a>
        <Contact className="py-16 bg-gray-700 flex flex-col md:flex-row justify-center items-center" />

      </main>
    </ div>
  )
}


