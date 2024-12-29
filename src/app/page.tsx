import LandingPage from "@/components/LandingPage";
import { Projects } from "@/components/projects";
import { LampDemo } from "@/components/ui/Lamp";
import About from "@/pages/About";


export default function Home() {

  return (
    <div className="bg-slate-900 text-slate-300 ">

      {/* <!-- Welcome Section --> */}
      <div className="">
        <LampDemo/>
      </div>

      {/* <!-- Hero Section --> */}
      <div >
        <h1 className="text-5xl m-[4vh] text-center font-aboutFont font-bold text-cyan-500 lg:text-7xl ">
          Home
        </h1>
        <LandingPage />
      </div>

      
      {/* <!-- About Section --> */}
      
        <About/>
     


      {/* <!-- Projects Section --> */}
      
      <div className="lg:max-w-[80vw] lg:mx-auto">
        <Projects/>
      </div>
   
     

      {/* <!-- Contact Section --> */}
      

      {/* <!-- Footer --> */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p> Thanks for scrolling through! </p>
      </footer>
    </div>
  );
}
