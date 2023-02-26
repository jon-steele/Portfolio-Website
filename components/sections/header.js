import Link from 'next/link'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";

export default function Header(){

  const [open, setOpen] = useState(false);

    return(
    <header className='h-16 font-ds fixed w-screen top-0 z-50 flex justify-between items-center p-4 bg-gray-700 text-slate-100'>
      
      {/* Title, Email & Resume */}
      <div className='flex items-center'>
        <Link className="px-4 h-16 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out mx-2" href='#home'>Jon Steele</Link>
        <a href='/images/Jon_Resume.pdf' target="_blank" className='bg-slate-100 text-gray-700 p-2 rounded-md mx-2 '>Resume</a>
        <a href='mailto:mrjonsteele@gmail.com' target="_blank" className='bg-slate-100 text-gray-700 p-2 rounded-md mx-2' rel="noreferrer">Email</a>
      </div>

      {/* FiMenu represents the hamburger menu. It remains hidden, unless the screen size is less than 1024 pixels*/}
      <FiMenu className='lg:hidden block h-6 w-6 curson-pointer' onClick={() => setOpen(!open)} />

      {/* Navigation links */}
      <nav className={`${open ? "block" : "hidden"} bg-gray-700 fixed right-0 top-16 lg:static flex flex-col lg:block lg:flex-row`}>
        <Link className="p-4 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out" href='#projects'>Projects</Link>
        <Link className="p-4 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out" href='#skills'>Skills</Link>
        <Link className="p-4 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out" href='#about'>About</Link>
        <Link className="p-4 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out" href='#hobbies'>Hobbies</Link>
        <Link className="p-4 text-2xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 transition duration-500 ease-in-out" href='#contact'>Links</Link>
      </nav>

    </header>
    );
  }