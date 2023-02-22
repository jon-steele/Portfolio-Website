import Link from 'next/link'

export function Header(){
    return(
    <header className='h-16 fixed w-screen top-0 z-50 flex justify-between items-center p-4 bg-gray-700 text-slate-100'>
        <Link className="p-4 text-4xl" href='#home'>Jon Steele</Link>
      <nav>
        <Link className="p-4 text-3xl" href='#projects'>Projects</Link>
        <Link className="p-4 text-3xl" href='#skills'>Skills</Link>
        <Link className="p-4 text-3xl" href='#about'>About</Link>
        <Link className="p-4 text-3xl" href='#contact'>Contact</Link>
      </nav>
    </header>
    );
  }