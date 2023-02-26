import Image from 'next/image';''
import vocipng from '@/public/images/voci1.png';
import budgetpng from '@/public/images/budget.png';

export default function Projects({className}) {
  return (
    <section className={className}>

      <h1 className='text-center font-ds text-4xl md:text-6xl mx-auto mb-8'>My Projects</h1>

      {/* Container which holds all projects */}
      <div className='flex flex-col md:flex-row justify-around gap-8'>

        {/* Project one */}
        <div className='flex flex-col items-left my-16'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-3xl text-center text-gray-200'>Voice operated flashcards</h1>
            <ul className='p-2 my-2 font-nun font-medium font-lg bg-slate-200 text-gray-700 list-disc list-inside rounded-md'>
              <li>Voice recognition</li>
              <li>Text to speech</li>
              <li>User accounts</li>
              <li>Email verification</li>
              <li>Security protection</li>
              <li>Database integration</li>
            </ul>
            <p className='font-nun text-center'>
              PHP | JavaScript | MySQL | Laravel | HTML | CSS | Tailwind
            </p>
          </div>
          <div className='p-4'>
          <a href='https://www.voci.app' target="_blank" rel="noreferrer"><Image className='' src={vocipng} alt='image of voci' /></a>
            <div className='flex justify-evenly mt-4'>
              <a href='https://www.voci.app' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 mr-2'>www.voci.app</h1></a>
              <a href='https://github.com/jon-steele/voci' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 ml-2'>Source</h1></a>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className='flex flex-col items-left my-16'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-3xl text-center text-gray-200'>Finance projection</h1>
            <ul className='p-2 my-2 font-nun font-medium font-lg bg-slate-200 text-gray-700 list-disc list-inside rounded-md'>
              <li>Compound interest calculator</li>
              <li>Income tax calculator</li>
              <li>Finance projection up to 30 years</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p className='font-nun text-center'>
              Java | Java Swing
            </p>
          </div>
          <div className='p-4'>
            <Image className='' src={vocipng} alt='image of budget app' />
            <div className='flex justify-evenly mt-4'>
              <a href='https://www.voci.app' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 mr-2'>www.voci.app</h1></a>
              <a href='https://github.com/jon-steele/voci' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 ml-2'>Source</h1></a>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}