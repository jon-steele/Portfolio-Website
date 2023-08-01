import Image from 'next/image';''
import vocipng from '@/public/images/voci1.png';
import budgetpng from '@/public/images/budget.png';
import waypointpng from '@/public/images/waypoint.png';

export default function Projects({className}) {
  return (
    <section className={className}>

      <h1 className='text-center font-ds text-4xl md:text-6xl mx-auto mb-8'>Projects</h1>

      {/* Container which holds all projects */}
      <div className='flex flex-col md:flex-row justify-around gap-8 p-8'>

        {/* Project one */}
        <div className='flex flex-col items-left my-16 w-full'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-3xl text-center text-gray-200'>Voice Operated Flashcards</h1>
            <ul className='p-2 my-2 font-nun font-medium font-lg bg-slate-200 text-gray-700 list-disc list-inside rounded-md'>
              <li>Employed software design patterns, including object-oriented programming, and the Model-View-Controller architecture, to implement the website’s functionality using PHP and the Laravel framework, ensuring a modular and maintainable codebase.</li>
              <li>Identified the need for manual and automated testing and implemented tests to ensure the functionality and reliability of the website.</li>
              <li>Utilized Amazon Web Services to host the project, demonstrating proficiency in deploying and managing web applications from the Linux terminal with Bash.</li>
            </ul>
            <p className='font-nun text-center'>
              PHP | Laravel | MySQL | HTML | Tailwind | Docker | AWS
            </p>
          </div>
          <div className='p-4'>
          <a href='https://voci.ca' target="_blank" rel="noreferrer"></a>
            <Image src={vocipng} alt='Voci.ca' className='rounded-md' />
            <div className='flex justify-evenly mt-4'>
              <a href='https://voci.ca' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 mr-2'>voci.ca</h1></a>
              <a href='https://github.com/vociapp/voci' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 ml-2'>Source</h1></a>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className='flex flex-col items-left my-16 w-full'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-3xl text-center text-gray-200'>Finance Projection</h1>
            <ul className='p-2 my-2 font-nun font-medium font-lg bg-slate-200 text-gray-700 list-disc list-inside rounded-md'>
              <li>Successfully planned, developed, and meticulously tested the robust application using a meticulously crafted object-oriented design methodology.</li>
              <li>Skillfully implemented a wide range of advanced features, including efficient expense tracking, accurate income tax estimation, and precise compound interest calculations, catering to the complex financial needs of users.</li>
              <li>Demonstrated exceptional proficiency in utilizing Java and the Java Swing library to meticulously develop, optimize, and seamlessly integrate both the core methods and the intuitive user interface, ensuring a seamless user experience.</li>
            </ul>
            <p className='font-nun text-center'>
              Java | Java Swing
            </p>
          </div>
          <div className='p-4'>
          <Image src={budgetpng} alt='Budget Projection' className='rounded-md' />
          <div className='flex justify-evenly mt-4'>
              <a href='/Budget.jar' download target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 mr-2'>Download</h1></a>
              <a href='https://github.com/jon-steele/Budget-Projection' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 ml-2'>Source</h1></a>
            </div>
          </div>
        </div>

        {/* Project three */}
        <div className='flex flex-col items-left my-16 w-full'>
          <div className='flex flex-col justify-top'>
            <h1 className='font-nun text-3xl text-center text-gray-200'>Waypoint Aquatics Website</h1>
            <ul className='p-2 my-2 font-nun font-medium font-lg bg-slate-200 text-gray-700 list-disc list-inside rounded-md'>
              <li>Collaborated with the client in friendly and constructive meetings to gather and understand her business website requirements.</li>
              <li>Provided valuable recommendations to the client regarding suitable web technologies, best practices, and potential precautions to enhance the website’s longevity, performance, and security.</li>
              <li>Implemented clients requirements using a tech stack consisting of HTML, CSS, Java, and Spring on an Apache Linux server, ensuring the website’s functionality and design aligned with the client’s vision.</li>
              <li>Developed and executed manual and automated tests to thoroughly verify both the back-end and front-end functionality, ensuring a high level of quality and reliability for the website.</li>
            </ul>
            <p className='font-nun text-center'>
              HTML | CSS | Spring | Java | Docker | AWS
            </p>
          </div>
          <div className='p-4'>
            <Image src={waypointpng} alt='waypoint site' className='rounded-md' />
            <div className='flex justify-evenly mt-4'>
              <a href='https://waypoint.jonsteele.services' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 mr-2'>Site</h1></a>
              <a href='https://github.com/jon-steele/WaypointAquatics' target="_blank" rel="noreferrer"><h1 className='bg-slate-200 text-gray-700 rounded-md p-2 ml-2'>Source</h1></a>
            </div>
          </div>
        </div>

      </div>

    <div className="h-32 w-full bg-wave3 bg-cover bg-bottom"></div>
    </section>
  )
}