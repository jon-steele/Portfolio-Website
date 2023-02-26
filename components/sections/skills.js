import SkillHeader from '@/components/skills/skill-header.js';

export default function Skills(props) {
  return(
    <div className={`${props}`}>

      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          
          <h1 className="text-4xl text-slate-100 bg-gray-700 rounded-md animate">Languges</h1>

          <SkillHeader title="Java & C++"/>
          <SkillHeader title="Html & Css"/>
          <SkillHeader title="JavaScript"/>
          <SkillHeader title="Php"/>

        </div>
        <div className='flex flex-col justify-center items-center'>
          
          <h1 className="text-4xl text-slate-100 bg-gray-700 rounded-md animate">Frameworks</h1>

          <SkillHeader title="Laravel"/>
          <SkillHeader title="React"/>
          <SkillHeader title="Next"/>
          <SkillHeader title="Express"/>

        </div>
        <div className='flex flex-col justify-center items-center'>
          
          <h1 className="text-4xl text-slate-100 bg-gray-700 rounded-md animate">Tools</h1>

          <SkillHeader title="Git"/>
          <SkillHeader title="Node"/>
          <SkillHeader title="Tailwind"/>
          <SkillHeader title="MySQL"/>

        </div>
      </div>
    </div>
  );
}