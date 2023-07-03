export default function Hobbies({className}){
  return(
    <div className={className}>
      <div className="w-full flex flex-col">
        
        
        <h className="text-center font-ds text-4xl md:text-6xl mx-auto mb-4">Hobbies</h>

        <p className="text-left font-nun text-xl md:text-2xl lg:text-3xl leading-10 !important font-normal break-words">
          In my spare time, I love to play guitar, sing, and produce music on my computer with Ableton. I have released 
          14 songs to Spotify and Apple Music, and have written 170 songs. I play basketball with friends in local leagues, and previously
          <a className="text-blue-500" href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092" target="_blank" rel="noreferrer"> played for Thompson Rivers University.</a>  
          
        </p>

      </div>
      
    </div>
  );
}