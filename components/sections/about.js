export default function About(props) {
    return(
        <div className={`flex ${props}`}>
            <section className='text-4xl flex flex-col justify-evenly items-center'>
                
                <h className="text-center font-ds text-7xl animate m-8">How can I help?</h>

                <p className="text-left w-9/12 font-nun text-xl md:text-2xl lg:text-3xl leading-10 !important font-normal break-words m-8 text-gray-700 bg-slate-100 rounded-md p-8">
                    
                    In my studies, I excel in my algorithms & data structures courses, achieving a <em className="font-bold">3.93 GPA </em> 
                    in my last three semesters and landing my name on the <em className="font-bold">Dean&apos;s List. </em>
                    I have strong foundational knowledge in programming languages, design models, and time complexity.
                    In 2020, I was awarded <em className="font-bold">Employee of the Year</em> at my previous job as a lifeguard.
                    In my spare time, I enjoy learning about new technologies, and recently added React, Next, and Tailwind into my skillset.
                    Technology is something that excites me, as I see the impact it can have on our lives.
                    If you think you can use my skills, please reach out to me via <a href="mailto:mrjonsteele@gmail.com">
                    email,</a> or call me at <a href="tel:+6049976356"><em className="font-bold">604-997-6356</em>.</a>

                </p>

            </section>
        </div>
    );
}