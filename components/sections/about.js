export default function About() {
    return(
        <div className="flex">
            <section className='w-screen text-4xl flex flex-col md:flex-row items-center justify-evenly'>
                
                <h className="text-center font-ds text-7xl">Who am I?</h>

                <p className="text-center font-nun text-2xl">
                    <br></br>
                    I'm a mountain biker,
                    <br></br>
                    <br></br>
                    a <a href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092" className="text-blue-400" target="_blank" rel="noreferrer">basketball player,</a>
                    <br></br>
                    <br></br>
                    a <a href="https://open.spotify.com/artist/7bvMfA07It3yyukUvfLmEQ?si=D12ksNbQR8iVG86iz74XYA" className="text-blue-400" target="_blank" rel="noreferrer">musician,</a>
                    <br></br>
                    <br></br>
                    but most importantly,
                    <br></br>
                    <br></br>
                    <br></br>
                    I am a <u><em>Full Stack Developer</em></u>, available for hire.
                </p>
            </section>
        </div>
    );
}