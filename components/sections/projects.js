import Image from 'next/image';''
import vocipng from '@/public/images/voci.png';
import budgetpng from '@/public/images/budget.png';

export default function Projects() {
  return (
    <div>

      <h1 className='text-4xl ml-16 mb-12'>Projects</h1>

      <div className='flex flex-col md:flex-row justify-around'>

        <div className='flex items-center p-4'>
          <div>
            <h1 className='font-ds text-4xl mb-6'>Voice Operated Flashcards</h1>
            <h1 className='font-nun text-2xl mb-4'>Noteable Features:</h1>
            <ul className='font-nun'>
              <li>Voice recognition API integration</li>
              <li>User accounts</li>
              <li>Email verification</li>
              <li>XSS and Sql Injection Protection</li>
              <li>Database Integration</li>
            </ul>
            <p className='font-nun mt-12'>
              PHP | MySQL | Laravel | HTML | CSS | Tailwind
            </p>
          </div>
          <div className='relative p-4'>
            <Image className='w-96' src={vocipng} alt='image of voci' />
            <div className='flex justify-evenly mt-4'>
              <h1>Try It!</h1>
              <h1>Source Code</h1>
            </div>
          </div>
        </div>

        <div className='flex items-center p-4'>
          <div>
            <h1 className='font-ds text-4xl mb-6'>Finance Projection</h1>
            <h1 className='font-nun text-2xl mb-4'>Noteable Features:</h1>
            <ul className='font-nun'>
              <li>Compound interest calculator</li>
              <li>Income tax API integration</li>
              <li>Finance projection up to 30 years</li>
            </ul>
            <p className='font-nun mt-12'>
              Java | Java Swing
            </p>
          </div>
          <div className='relative p-4'>
            <Image className='w-96' src={budgetpng} alt='image of budget app' />
            <div className='flex justify-evenly mt-4'>
              <h1>Try It!</h1>
              <h1>Source Code</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}