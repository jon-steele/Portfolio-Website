export default function Home({className}){
    return(
      <div className={className}>
        
        <h1 className='animate text-4xl md:text-6xl underline-offset-2'>I am a <u><em>Full Stack Developer</em></u>.</h1>

        <h1 className='text-2xl font-nun underline-offset-2 text-left'>In my work, I value:</h1>
        
        <p className='flex items-center font-nun text-lg bg-gray-700 text-slate-100 rounded-md tracking-wide'>
          quality, &nbsp;functionality, &nbsp;& simplicity.
        </p>

      </div>
    );
  }