import AboutAnimation from '@/components/AboutAnimation'
import MapCard from '@/components/cards/map-card'
import MyTechCard from '@/components/cards/tech-card'
import BlurFade from '@/components/magic-ui/blur-fade'
import React from 'react'

const About = () => {
  return (
    
      <div className="container mx-auto justify-around flex flex-col sm:flex-row">
        <div className="w-full lg:w-[60%]">
          <AboutAnimation/>
        </div>
        <div className="flex flex-col my-2 w-full lg:w-[30%] ">
            <BlurFade delay={0.35} className='w-full h-full lg:w-[70%] lg:my-10 cursor-grab'>
                <MyTechCard />
            </BlurFade>
            <BlurFade delay={0.35} className='w-full my-2 lg:w-[70%]'>
                <MapCard/>
            </BlurFade>
        </div>
      </div>
    
  )
}

export default About
