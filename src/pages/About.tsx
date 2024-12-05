import AboutAnimation from '@/components/AboutAnimation'
import MapCard from '@/components/cards/map-card'
import MyTechCard from '@/components/cards/tech-card'
import BlurFade from '@/components/magic-ui/blur-fade'

const About = () => {
  return (
    
    <div className=''>

      <BlurFade delay={0.35} className='max-w-[90rem] pl-4 my-10 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-cyan-500 font-sans '>
        About
      </BlurFade>
      <div className="container mx-auto justify-around flex flex-col sm:flex-row">
        <div className="w-full lg:w-[60%]">
          <AboutAnimation/>
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
