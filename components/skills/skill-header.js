// SkillHeader is used in the "skills" section, and is a component used to display each different skill.
export default function SkillHeader(props){
    return(
        <div>
            <h2 className="font-nun text-2xl font-semibold p-2">{props.title}</h2>
        </div>
    );
}