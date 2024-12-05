import LandingPage from "@/components/LandingPage";
import BlurFade from "@/components/magic-ui/blur-fade";
import { Projects } from "@/components/projects";
import { LampDemo } from "@/components/ui/Lamp";
import About from "@/pages/About";


export default function Home() {

  return (
    <div className="bg-slate-900 text-slate-300">

      {/* <!-- Welcome Section --> */}
      <div className="">
        <LampDemo/>
      </div>

      {/* <!-- Hero Section --> */}
      <div>
        <BlurFade delay={0.1} className='max-w-[90rem] pl-4 my-10 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-cyan-500 font-sans '>
          Home
        </BlurFade>
        <LandingPage />
      </div>

      
      {/* <!-- About Section --> */}
      <About/>


      {/* <!-- Projects Section --> */}
      <Projects/>
     

      {/* <!-- Contact Section --> */}
      

      {/* <!-- Footer --> */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p> Thanks for scrolling through! </p>
      </footer>
    </div>
  );
}
