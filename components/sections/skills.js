import SkillHeader from '@/components/skills/skill-header.js';

export default function Skills({className}) {
  return(
    <div className={className}>
        
      <div className='flex flex-col justify-center items-center'>
        
        <h1 className="px-4 py-2 text-4xl mb-4 text-slate-200 bg-gray-700 rounded-md animate">Languges</h1>

        <SkillHeader title="Java"/>
        <SkillHeader title="C++"/>
        <SkillHeader title="PHP"/>
        <SkillHeader title="HTML"/>
        <SkillHeader title="CSS"/>
        <SkillHeader title="JavaScript"/>

      </div>
      <div className='flex flex-col justify-center items-center'>
        
        <h1 className="px-4 py-2 text-4xl mb-4 text-slate-200 bg-gray-700 rounded-md animate">Frameworks</h1>

        <SkillHeader title="React"/>
        <SkillHeader title="Next"/>
        <SkillHeader title="Laravel"/>
        <SkillHeader title="Spring"/>
        <SkillHeader title="Express"/>

      </div>
      <div className='flex flex-col justify-center items-center'>
        
        <h1 className="px-4 py-2 text-4xl mb-4 text-slate-200 bg-gray-700 rounded-md animate">Tools</h1>

        <SkillHeader title="Git"/>
        <SkillHeader title="AWS"/>
        <SkillHeader title="Node"/>
        <SkillHeader title="Linux"/>
        <SkillHeader title="MySQL"/>

      </div>
    </div>
  );
}