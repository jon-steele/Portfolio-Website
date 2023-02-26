import Image from 'next/image';''
import vocipng from '@/public/images/voci1.png';
import budgetpng from '@/public/images/budget.png';

export default function Projects(props) {
  return (
    <div className={`flex flex-col items-center ${props}`}>

      <h1 className='text-4xl text-center'>My Projects</h1>

      {/* Container which holds all projects */}
      <div className='flex flex-col md:flex-row justify-around'>

        {/* Project one */}
        <div className='flex flex-col items-left'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-4xl text-center'>Voice operated flashcards</h1>
            <ul className='font-nun font-medium font-lg bg-slate-100 text-gray-700 list-disc list-inside rounded-md'>
              <li>Voice recognition</li>
              <li>Text to speech</li>
              <li>User accounts</li>
              <li>Email verification</li>
              <li>Security protection</li>
              <li>Database integration</li>
            </ul>
            <p className='font-nun mt-12 text-center'>
              PHP | JavaScript | MySQL | Laravel | HTML | CSS | Tailwind
            </p>
          </div>
          <div className='relative p-4'>
          <a href='https://www.voci.app' target="_blank" rel="noreferrer"><Image className='' src={vocipng} alt='image of voci' /></a>
            <div className='flex justify-evenly mt-4'>
              <a href='https://www.voci.app' target="_blank" rel="noreferrer"><h1 className='bg-slate-100 text-gray-700 rounded-md'>www.voci.app</h1></a>
              <a href='https://github.com/jon-steele/voci' target="_blank" rel="noreferrer"><h1 className='bg-slate-100 text-gray-700 rounded-md'>Source Code</h1></a>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className='flex flex-col items-left'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-4xl text-center'>Finance projection</h1>
            <ul className='font-nun font-medium font-lg bg-slate-100 text-gray-700 list-disc list-inside rounded-md'>
              <li>Compound interest calculator</li>
              <li>Income tax calculator</li>
              <li>Finance projection up to 30 years</li>
            </ul>
            <p className='font-nun text-center'>
              Java | Java Swing
            </p>
          </div>
          <div className='relative p-4'>
            <Image className='' src={budgetpng} alt='image of budget app' />
            <div className='flex justify-evenly'>
              <h1 className='bg-slate-100 text-gray-700 rounded-md'>Try It!</h1>
              <h1 className='bg-slate-100 text-gray-700 rounded-md'>Source Code</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}