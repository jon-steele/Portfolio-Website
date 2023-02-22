import Email from '@/components/socials/email.js';
import Github from '@/components/socials/github.js';
import Linkedin from '@/components/socials/linkedin.js';

export default function Contact() {
  return (
    <div className="font-nun text-2xl flex flex-col justify-center items-center">
      <h1 className='font-ds text-4xl mb-16'>Contact me:</h1>
      <div className='flex'>
        <Email />
        <Github />
        <Linkedin />
      </div>
    </div>
  )
}