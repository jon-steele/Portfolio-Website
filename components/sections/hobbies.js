import Image from 'next/image';

export default function Hobbies({className}){
  return(
    <div className={className}>
      <div className="w-full flex flex-col">
        
        
        <h className="text-center font-ds text-4xl md:text-6xl mx-auto mb-4">Hobbies</h>

        <p className="text-left font-nun text-xl md:text-2xl lg:text-3xl leading-10 !important font-normal break-words">
          In my spare time, I play basketball with friends in local leagues, and previously
          <a className="text-blue-500" href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092" target="_blank" rel="noreferrer"> played for Thompson Rivers University. </a>  
          I have a German Shorthaired Pointer named Gigi that I take with me when I go mountain biking, hiking, and camping.
          Additionally, I love writing songs, playing guitar, piano, and bass, and have music available on 
          <a className="text-blue-500" href="https://open.spotify.com/artist/7bvMfA07It3yyukUvfLmEQ?si=S9iJ0yiSTTaXh6P6SK3ncw" target="_blank" rel="noreferrer"> 
          Spotify 
          </a>
          and 
          <a className="text-blue-500" href="https://music.apple.com/ca/artist/jon-steele/1584182764" target="_blank" rel="noreferrer"> 
          Apple Music
          </a>
        </p>

        <div className="flex flex-row justify-center mt-8 gap-8">
          <Image src='/gigi.png' alt="Gigi" className="rounded-md" layout='responsive' width={300} height={300} />        </div>


      </div>
      
    </div>
  );
}