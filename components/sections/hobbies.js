export default function Hobbies(props){
    return(
      <main className={`h-full flex justify-center content-center items-center flex-col leading-loose ${props}`}>
        
        <h1 className='animate text-4xl md:text-6xl underline-offset-2 mb-16'>Hobbies and Recreation</h1>
        <p className="font-nun md:w-2/3 text-3xl">In my spare time, I love to play guitar, sing, and produce music on my computer with Ableton. I have released 
          14 songs to spotify and apple music, and have written hundreds of songs. In my past, I was <a className="text-blue-500" href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092">a university basketball </a>  
          player, and still get out to play ball at least once a week at my local gym, or at UFV intramurals.
        </p>

      </main>
    );
  }