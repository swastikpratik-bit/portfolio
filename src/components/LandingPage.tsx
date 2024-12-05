import CodeDisplay from '../components/codeShow';
import AboutCard from './cards/about-card';
import IconCard from './cards/icon-card';
import ResumeCard from './cards/resume-card';
import BlurFade from './magic-ui/blur-fade';

const LandingPage = () => {
  return (
    <div className='main-section flex flex-col lg:flex-row justify-center ' id='main'>
        <div className='flex flex-col lg:gap-12 gap-5 w-[90%] lg:w-[30%]'>
          <BlurFade delay={0.1} className=''>
            <AboutCard/>
          </BlurFade>
          <BlurFade delay={0.18} className=''>
            <ResumeCard />
          </BlurFade>
        </div>
        <div className="flex mx-10 flex-col gap-4 w-[90%] mt-6 lg:mt-0 lg:w-[10%]">
          <BlurFade delay={0.26} className=''>
            <IconCard title="Linkedin" link="https://www.linkedin.com/in/swatikpratiksingh/" />
          </BlurFade>
          <BlurFade delay={0.26} className=''>
          <IconCard title="Github" link="https://github.com/swastikpratik-bit" />
          </BlurFade>
          <BlurFade delay={0.30}>
						<IconCard title="Email" link="mailto:swastiksingh368@gmail.com" />
					</BlurFade>
        </div>  
      
      <CodeDisplay />  
    </div>
  )
}

export default LandingPage;