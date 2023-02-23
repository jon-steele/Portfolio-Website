import Image from 'next/image';''
import vocipng from '@/public/images/voci.png';
import budgetpng from '@/public/images/budget.png';

export default function Projects(props) {
  return (
    <div className={`flex flex-col items-center ${props}`}>

      <h1 className='text-4xl text-center mb-4'>My favourite projects</h1>

      {/* Container which holds all projects */}
      <div className='flex flex-col md:flex-row justify-around'>

        {/* Project one */}
        <div className='flex items-left p-4'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-ds text-4xl mb-6'>Voice operated flashcards</h1>
            <ul className='font-nun font-medium font-lg bg-slate-100 text-gray-700 list-disc list-inside p-4 rounded-md'>
              <li>Voice recognition</li>
              <li>Text to speech</li>
              <li>User accounts</li>
              <li>Email verification</li>
              <li>Security protection</li>
              <li>Database integration</li>
            </ul>
            <p className='font-nun mt-12'>
              PHP | JavaScript | MySQL | Laravel | HTML | CSS | Tailwind
            </p>
          </div>
          <div className='relative p-4'>
            <Image className='w-96' src={vocipng} alt='image of voci' />
            <div className='flex justify-evenly mt-4'>
              <h1 className='bg-slate-100 text-gray-700 rounded-md p-2'>Try It!</h1>
              <h1 className='bg-slate-100 text-gray-700 rounded-md p-2'>Source Code</h1>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className='flex items-left p-4'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-ds text-4xl mb-6'>Finance projection</h1>
            <ul className='font-nun font-medium font-lg bg-slate-100 text-gray-700 list-disc list-inside p-4 rounded-md'>
              <li>Compound interest calculator</li>
              <li>Income tax calculator</li>
              <li>Finance projection up to 30 years</li>
            </ul>
            <p className='font-nun mt-12'>
              Java | Java Swing
            </p>
          </div>
          <div className='relative p-4'>
            <Image className='w-96' src={budgetpng} alt='image of budget app' />
            <div className='flex justify-evenly mt-4'>
              <h1 className='bg-slate-100 text-gray-700 rounded-md p-2'>Try It!</h1>
              <h1 className='bg-slate-100 text-gray-700 rounded-md p-2'>Source Code</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}