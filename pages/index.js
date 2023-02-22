import Head from 'next/head';
import Layout from '@/components/layout.js';
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Projects from '@/components/sections/Projects'

export default function Index() {
  return (
    <div>
      <Layout>

        <Head>
          <title>Jon Steele</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        {/* HOME */}
        <section className='h-screen bg-wave1 bg-bottom bg-no-repeat bg-cover'>
          <a id="home" className='block relative invisible -top-48'></a>
          <Home />
        </section>

        {/* PROJECTS */}
        <section className='h-120vh md:h-50vh bg-gray-700 text-slate-100 bg-wave2 bg-bottom bg-no-repeat bg-cover -mt-24'>
          <a id="projects" className='block relative invisible -top-20'></a>
          <Projects />
        </section>

        {/* SKILLS */}
        <section className='h-custom bg-wave3 bg-bottom bg-no-repeat bg-cover -mt-36 md:-my-24'>
          <a id="skills" className='block relative invisible -top-80'></a>
          <Skills />
        </section>

        {/* ABOUT */}
        <section  className='h-screen bg-gray-700 text-slate-100 bg-wave4 bg-bottom bg-no-repeat bg-cover -pt-24'>
          <a id="about" className='block relative invisible -top-96'></a>
          <About />
        </section>

        {/* CONTACT */}
        <section className='h-60vh'>
          <a id="contact" className='block relative invisible -top-12' ></a>
          <Contact />
        </section>
      </Layout>

    </div>
  )
}


