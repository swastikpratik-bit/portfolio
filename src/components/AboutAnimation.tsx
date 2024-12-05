import CardWrapper from './cards/card-wrapper';

const AboutAnimation = () => {
  return (
 

       <CardWrapper>
         <div className='h-[70vh] font-playfair'>   
            {/* <TextGenerateEffect className='text-slate-300 p-4' words="A results-driven Full Stack Engineer with a strong foundation in Data Structures and Algorithms and extensive experience in Competitive Programming. Proficient in modern web technologies, including React, Node.js, MongoDB, PostgreSQL, and Next.js, with a proven ability to build scalable, efficient, and user-friendly web applications. Passionate about problem-solving and delivering innovative software solutions that drive business value. Adept at collaborating in cross-functional teams to achieve project goals efficiently." /> */}

          <p className='text-slate-300 p-4 about-text text-2xl'>
              A results-driven Full Stack Engineer with a strong foundation in Data Structures and Algorithms and extensive experience in Competitive Programming. Proficient in modern web technologies, including React, Node.js, MongoDB, PostgreSQL, and Next.js, with a proven ability to build scalable, efficient, and user-friendly web applications.
          </p>


        </div>
       </CardWrapper>
  )
}

export default AboutAnimation;
