export default function About() {
    return(
        <div className="flex">
            <section className='w-screen text-4xl flex flex-col md:flex-row items-center justify-evenly'>
                
                <h className="text-center font-ds text-7xl animate">Who am I?</h>

                <div>
                    <div className="text-center font-nun text-2xl flex flex-col">
                        <p className="mb-16">I&apos;m a mountain biker,</p>
                        <p className="mb-16">a <a href="https://gowolfpack.ca/news/2017/4/21/wolfpack-mens-basketball-sign-second-recruit-for-2017-18-steele_26092" className="text-blue-400" target="_blank" rel="noreferrer">basketball player,</a></p>
                        <p className="mb-16">a <a href="https://open.spotify.com/artist/7bvMfA07It3yyukUvfLmEQ?si=D12ksNbQR8iVG86iz74XYA" className="text-blue-400" target="_blank" rel="noreferrer">musician,</a></p>
                        <p className="mb-16">but most importantly,</p>
                    </div>
                    <p className="text-center font-nun text-2xl">
                        I am a <em>Full Stack Developer</em>, available for hire.
                    </p>
                </div>

            </section>
        </div>
    );
}