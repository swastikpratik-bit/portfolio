'use client'
import Paragraph from '@/components/AboutWords'
import MapCard from '@/components/cards/map-card'
import MyTechCard from '@/components/cards/tech-card'
import BlurFade from '@/components/magic-ui/blur-fade'

const About = () => {
  return (
    
    <div className=''>

      <h1 className="text-5xl mt-[6vh] mb-[4vh] lg:text-7xl text-center font-aboutFont md:text-5xl font-bold text-cyan-500 ">
        About
      </h1>
      <div className="container mx-auto justify-between flex flex-col sm:flex-row">
        <div className="w-full lg:w-[60%] ">
      
            <Paragraph paragraph="A results-driven Full Stack Engineer with a strong foundation in Data Structures and Algorithms and extensive experience in Competitive Programming. Proficient in modern web technologies,  with a proven ability to build scalable, efficient, and user-friendly web applications." />
        </div>
        <div className="flex flex-col my-2 w-full lg:w-[30%] ">
            <BlurFade delay={0.35} className='w-full h-full lg:w-[70%] cursor-grab'>
                <MyTechCard />
            </BlurFade>
            <BlurFade delay={0.35} className='w-full my-2 lg:w-[70%] cursor-grab'>
                <MapCard/>
            </BlurFade>
        </div>
      </div>
    </div>
  )
}

export default About
