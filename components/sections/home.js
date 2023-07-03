export default function Home({className}){
    return(
      <section className={className}>

        <div className="h-24"></div>
        
        <h1 className='animate text-4xl md:text-6xl underline-offset-2'>I am a <u><em>Full Stack Developer</em></u>.</h1>

        <h1 className='text-2xl font-nun underline-offset-2 text-left p-8'>
          I am a Dean’s List Computing Science major with a deep understanding of computer science concepts and a strong interest in web development.  Eager to begin my career in software, I am motivated to exceed expectations and learn from team members while sharing my passion for software development.        </h1>

        <div className="h-48"></div>
      </section>
    );
  }