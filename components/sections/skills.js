import SkillHeader from "@/components/skills/skill-header.js";

export default function Skills({ className }) {
  return (
    <div className="w-full">
      <div className={className}>
        <h1 className="text-center font-ds text-4xl md:text-6xl mx-auto mb-8">
          Skills & Experience
        </h1>

        <div className="box-border py-16 flex items-center flex-col justify-center">
          <div className="box-border p-16 flex flex-col justify-center">
            <h2 className="text-4xl mb-4 mt-4">Back End Web Development</h2>
            <ul className="list-disc">
              <li className="font-nun text-xl box-border p-2">
                Solid algorithm knowledge and 5 years of experience in
                object-oriented programming.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Strong proficiency in web frameworks such as Laravel and Spring
                for implementing web services.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Expertise in designing, setting up, and querying relational
                database systems.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Exceptional debugging, troubleshooting, and analytical skills.
              </li>
            </ul>

            <h2 className="text-4xl mb-4 mt-4">Front End Web Development</h2>
            <ul className="list-disc">
              <li className="font-nun text-xl box-border p-2">
                Extensive experience using HTML, CSS, Tailwind, and JavaScript to
                develop user interfaces.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Proficiency in responsive web design techniques, ensuring optimal
                user experience across platforms.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Proficient in creating straightforward and user-friendly
                interfaces, considering user experience.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Familiarity and hands-on experience with React and React Hooks.
              </li>
            </ul>

            <h2 className="text-4xl mb-4 mt-4">Interpersonal Skills</h2>
            <ul className="list-disc">
              <li className="font-nun text-xl box-border p-2">
                Effective communication and collaboration abilities with clients,
                developers, and team members.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Excellent problem-solving skills and meticulous attention to
                detail.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Quick and independent learner of new technologies.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Dependable, responsible, and highly motivated to exceed
                expectations.
              </li>
            </ul>

            <h2 className="text-4xl mb-4 mt-4">Server Management</h2>
            <ul className="list-disc">
              <li className="font-nun text-xl box-border p-2">
                Proficient in configuring websites, databases, and services on
                Linux systems using Bash.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Strong understanding and experience using Docker to host services
                in a Linux environment.
              </li>
              <li className="font-nun text-xl box-border p-2">
                Extensive experience with AWS for hosting websites, including EC2,
                Route 53, Load Balancers, and more.
              </li>
            </ul>
          </div>

          <div className=" box-border p-16 flex flex-col justify-evenly md:flex-row md:justify-evenly items-start gap-24">
            <div className="flex flex-col justify-center items-left">
              <h2 className="text-4xl mb-4 mt-4">Languages</h2>

              <ul className="list-disc">
                <li className="font-nun text-xl box-border p-2">Java & C++</li>
                <li className="font-nun text-xl box-border p-2">PHP</li>
                <li className="font-nun text-xl box-border p-2">HTML</li>
                <li className="font-nun text-xl box-border p-2">CSS</li>
                <li className="font-nun text-xl box-border p-2">JavaScript</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-left">
              <h2 className="text-4xl mb-4 mt-4">Frameworks</h2>
              <ul className="list-disc">
                <li className="font-nun text-xl box-border p-2">Laravel</li>
                <li className="font-nun text-xl box-border p-2">React</li>
                <li className="font-nun text-xl box-border p-2">Spring</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-left">
              <h2 className="text-4xl mb-4 mt-4">Server Tools</h2>
              <ul className="list-disc">
                <li className="font-nun text-xl box-border p-2">Docker</li>
                <li className="font-nun text-xl box-border p-2">Linux</li>
                <li className="font-nun text-xl box-border p-2">Bash</li>
                <li className="font-nun text-xl box-border p-2">Apache</li>
                <li className="font-nun text-xl box-border p-2">AWS</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <div className="h-32 w-full bg-wave3 bg-cover bg-bottom"></div>
    </div>
  );
}
