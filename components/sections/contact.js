import Email from '@/components/socials/email.js';
import Github from '@/components/socials/github.js';
import Linkedin from '@/components/socials/linkedin.js';

export default function Contact({className}) {
  return (
    <div className={className}>

      <Email />
      <Github />
      <Linkedin />
      
    </div>
  )
}