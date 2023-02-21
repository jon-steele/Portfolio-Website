import Link from 'next/link'

export function Header(){
    return(
    <header className='flex justify-between p-4 bg-gray-700 text-slate-100'>
      <h1>Jon Steele</h1>
      <nav>
        <Link className="p-4" href='.'>About</Link>
        <Link className="p-4" href='/skills'>Skills</Link>
        <Link className="p-4" href='/projects'>Projects</Link>
        <Link className="p-4" href='/about'>Contact</Link>
      </nav>
    </header>
    );
  }