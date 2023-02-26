import Link from 'next/link'
import { useState} from 'react';
import { FiMenu } from "react-icons/fi";

export default function Header({className}){

  const [open, setOpen] = useState(false);

    return(
    <header className={className}>
      
      {/* Title, Email & Resume */}
      <div className='flex items-center h-16'>
        <Link className="p-4 text-xl md:text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#home'>Jon Steele</Link>
        <a href='/images/Jon_Resume.pdf' target="_blank" className='mx-2 p-2 bg-slate-200 text-gray-700 rounded-md'>Resume</a>
        <a href='mailto:mrjonsteele@gmail.com' target="_blank" className='mx-2 p-2 bg-slate-200 text-gray-700 rounded-md' rel="noreferrer">Email</a>
      </div>

      {/* FiMenu represents the hamburger menu. It remains hidden, unless the screen size is less than 1024 pixels*/}
      <FiMenu className='lg:hidden block h-6 w-6 curson-pointer' onClick={() => setOpen(!open)} />

      {/* Navigation links */}
      <nav className={`${open ? "block" : "hidden"} bg-gray-700 fixed right-0 top-16 lg:static flex flex-col lg:block lg:flex-row align-center justify-center`}>
        <Link className="p-4 text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#skills'>Skills</Link>
        <Link className="p-4 h-16 text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#projects'>Projects</Link>
        <Link className="p-4 h-16 text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#about'>About</Link>
        <Link className="p-4 h-16 text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#hobbies'>Hobbies</Link>
        <Link className="p-4 h-16 text-3xl hover:text-gray-700 hover:bg-slate-200 transition duration-500 ease-in-out" href='#contact'>Links</Link>
      </nav>

    </header>
    );
  }