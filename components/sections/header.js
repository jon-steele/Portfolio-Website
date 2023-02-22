import Link from 'next/link'
import { useState} from 'react';
import { FiMenu } from "react-icons/fi";

export function Header(){

  const [open, setOpen] = useState(false);

    return(
    <header className='h-16 fixed w-screen top-0 z-50 flex justify-between items-center p-4 bg-gray-700 text-slate-100'>
      <div className='flex items-center'>
        <Link className="p-4 text-xl md:text-3xl hover:text-gray-700 hover:bg-slate-100 mr-4" href='#home'>Jon Steele</Link>
        <a href='/images/Jon_Resume.pdf' target="_blank" className='bg-slate-100 text-gray-700 p-2 rounded-md'>Resume</a>
        <a href='mailto:mrjonsteele@gmail.com' target="_blank" className='bg-slate-100 text-gray-700 p-2 rounded-md mx-2' rel="noreferrer">Email</a>
      </div>

      <FiMenu className='lg:hidden block h-6 w-6 curson-pointer' onClick={() => setOpen(!open)} />

      <nav className={`${open ? "block" : "hidden"} bg-gray-700 fixed right-0 top-16 lg:static flex flex-col lg:block lg:flex-row`}>
        <Link className="p-4 text-3xl hover:text-gray-700 hover:bg-slate-100" href='#projects'>Projects</Link>
        <Link className="p-4 text-3xl hover:text-gray-700 hover:bg-slate-100" href='#skills'>Skills</Link>
        <Link className="p-4 text-3xl hover:text-gray-700 hover:bg-slate-100" href='#about'>About</Link>
        <Link className="p-4 text-3xl hover:text-gray-700 hover:bg-slate-100" href='#contact'>Contact</Link>
      </nav>
    </header>
    );
  }