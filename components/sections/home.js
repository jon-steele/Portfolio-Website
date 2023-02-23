export default function Home(){
    return(
      <main className='h-full flex justify-center content-center items-center flex-col leading-loose'>
        
        <h1 className='animate text-4xl md:text-6xl underline-offset-2 mb-16'>I am a <u><em>Full Stack Developer</em></u>.</h1>

        <div className='flex'>
          <h1 className='text-2xl underline-offset-2 text-left mr-4 p-3'>In my work, I value:</h1>
          <p className='flex items-center font-nun text-lg bg-gray-700 text-slate-100 rounded-md tracking-wide p-4'>
            quality, &nbsp;functionality, &nbsp;& simplicity.
          </p>
        </div>

      </main>
    );
  }