import { TextGenerateEffect } from './ui/text-generate-effect'

const AboutAnimation = () => {
  return (
 

        <div className='h-screen'>
            <h2 className="max-w-[90rem] pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
                About
            </h2>
   
            <TextGenerateEffect className='text-slate-300 p-4' words="A results-driven Full Stack Engineer with a strong foundation in Data Structures and Algorithms and extensive experience in Competitive Programming. Proficient in modern web technologies, including React, Node.js, MongoDB, PostgreSQL, and Next.js, with a proven ability to build scalable, efficient, and user-friendly web applications. Passionate about problem-solving and delivering innovative software solutions that drive business value. Adept at collaborating in cross-functional teams to achieve project goals efficiently." />
        </div>
  )
}

export default AboutAnimation;
