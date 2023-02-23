import SkillHeader from '@/components/skills/skill-header.js';

export default function Skills() {
  return(
    <div className='flex flex-col md:flex-row items-center w-screen'>
      <section className='w-full h-full text-center p-4'>
        
        <h className="text-4xl text-slate-100 bg-gray-700 rounded-md mb-32 p-2 animate">Languges</h>

        <SkillHeader title="Java & C++"/>
        <SkillHeader title="Html & Css"/>
        <SkillHeader title="JavaScript"/>
        <SkillHeader title="Php"/>

      </section>
      <section className='w-full h-full text-center p-4'>
        
        <h className="text-4xl text-slate-100 bg-gray-700 rounded-md p-2 animate">Frameworks</h>

        <SkillHeader title="Laravel"/>
        <SkillHeader title="React"/>
        <SkillHeader title="Next"/>
        <SkillHeader title="Express"/>

      </section>
      <section className='w-full h-full text-center p-4'>
        
        <h className="text-4xl text-slate-100 bg-gray-700 rounded-md p-2 animate">Tools</h>

        <SkillHeader title="Git"/>
        <SkillHeader title="Node"/>
        <SkillHeader title="Tailwind"/>
        <SkillHeader title="MySQL"/>

      </section>
    </div>
  );
}