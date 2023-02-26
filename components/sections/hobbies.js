export default function Hobbies(props){
    return(
      <main className={`flex justify-center content-center items-center flex-col leading-loose ${props}`}>
        
        <h1 className='animate text-4xl md:text-6xl underline-offset-2'>Hobbies and Recreation</h1>
        <p className="font-nun text-3xl">In my spare time, I love to play guitar, sing, and produce music on my computer with Ableton. I have released 
          14 songs to Spotify and Apple Music, and have written 170 songs. I play basketball with friends in local leagues, and previously
          <a className="text-blue-500" href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092" target="_blank" rel="noreferrer"> played for Thompson Rivers University.</a>  
          
        </p>

      </main>
    );
  }