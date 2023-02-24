import Head from 'next/head';
import Script from 'next/script';

import Layout from '@/components/layout.js';

import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';

export default function Index() {
  return (
    <div className='clearfix'>
      <Layout>

        <Head>
          <title>Jon Steele</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <Script src='/animations.js' />

        {/* HOME */}
        <section className='h-screen bg-wave1 bg-bottom bg-no-repeat bg-cover'>
          <a id="home" className='block relative invisible -top-48'></a>
          <Home className="clearfix" />
        </section>

        {/* PROJECTS */}
        <section className='projects-height-custom bg-gray-700 text-slate-100 bg-wave2 bg-bottom bg-no-repeat bg-cover -mt-12'>
          <a id="projects" className='block relative invisible -top-20'></a>
          <Projects className="clearfix" />
        </section>

        {/* SKILLS */}
        <section className='skills-height-custom bg-wave3 bg-bottom bg-no-repeat bg-cover'>
          <a id="skills" className='block relative invisible -top-80'></a>
          <Skills className="clearfix" />
        </section>

        {/* ABOUT */}
        <section  className='about-height-custom lg:60vh bg-gray-700 text-slate-100 bg-wave4 bg-bottom bg-no-repeat bg-cover -mt-52'>
          <a id="about" className='block relative invisible -top-96'></a>
          <About className="clearfix" />
        </section>

        {/* CONTACT */}
        <section className='contact-height-custom'>
          <a id="contact" className='block relative invisible -top-12' ></a>
          <Contact className="clearfix" />
        </section>
      </Layout>

    </div>
  )
}


