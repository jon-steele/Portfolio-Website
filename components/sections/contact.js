import Email from '@/components/socials/email.js';
import Github from '@/components/socials/github.js';
import Linkedin from '@/components/socials/linkedin.js';

export default function Contact(props) {
  return (
    <div className={`font-nun text-2xl flex flex-col justify-center items-center ${props}`}>

      <div className='flex'>
        <Email />
        <Github />
        <Linkedin />
      </div>
      
    </div>
  )
}