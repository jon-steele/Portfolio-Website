import SkillHeader from '@/components/skills/skill-header.js';

export default function Skills() {
  return(
    <div className='flex flex-col justify-center items-center content-center w-screen leading-loose px-12 md:px-36 lg:px-48'>
      <section className='w-full text-left p-4'>
        <h className="text-4xl">Languges</h>
        <SkillHeader title="Java"/>
        <SkillHeader title="c++"/>
        <SkillHeader title="html & css"/>
        <SkillHeader title="JavaScript"/>
        <SkillHeader title="php"/>
      </section>
      <section className=' bg-gray-700 text-slate-200 w-full text-right p-4'>
        <h className="text-4xl">Frameworks</h>
        <SkillHeader title="Laravel"/>
        <SkillHeader title="Node"/>
        <SkillHeader title="React & Next"/>
        <SkillHeader title="Express"/>
      </section>
      <section className='w-full text-left p-4'>
        <h className="text-4xl">Other Tools</h>
        <SkillHeader title="Git"/>
        <SkillHeader title="Tailwind"/>
        <SkillHeader title="MySQL"/>
        <SkillHeader title="VsCode"/>
      </section>
    </div>
  );
}