import Head from 'next/head';
import Script from 'next/script';

import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Header from '@/components/sections/header';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Hobbies from '@/components/sections/Hobbies';
import Projects from '@/components/sections/Projects';


export default function Index() {
  return (
    < >
      <Head>
        <title>Jon Steele</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header className='h-16 top-0 flex justify-between items-center p-4 bg-gray-700 text-slate-100 font-ds' />
      <main className='bg-slate-100 text-gray-700 font-ds antialiased overflow-scroll'>

        <Script src='/animations.js' />

        {/* HOME */}
        <section className='snap-start wave1 bg-bottom bg-no-repeat bg-cover'>
          <a id="home" className='block relative invisible'></a>
          <Home className="clearfix" />
        </section>

        {/* PROJECTS */}
        <section className='snap-start projects-size-custom bg-gray-700 text-slate-100 bg-wave2 bg-bottom bg-no-repeat bg-cover'>
          <a id="projects" className='block relative invisible'></a>
          <Projects className="clearfix" />
        </section>

        {/* SKILLS */}
        <section className='snap-start skills-size-custom bg-wave3 bg-bottom bg-no-repeat bg-cover'>
          <a id="skills" className='block relative invisible'></a>
          <Skills className="clearfix" />
        </section>

        {/* ABOUT */}
        <section  className='snap-start about-size-custom bg-gray-700 text-slate-100 bg-wave4 bg-bottom bg-no-repeat bg-cover'>
          <a id="about" className='block relative invisible -top-96'></a>
          <About className="clearfix" />
        </section>

        {/* HOBBIES */}
        <section className='snap-start hobbies-size-custom'>
          <a id="hobbies" className='block relative invisible' ></a>
          <Hobbies className="clearfix" />
        </section>

        {/* CONTACT */}
        <section className='contact-size-custom'>
          <a id="contact" className='block relative invisible' ></a>
          <Contact className="clearfix" />
        </section>
      </main>
    </ >
  )
}


