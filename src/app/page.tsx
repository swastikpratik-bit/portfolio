import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import { Projects } from "@/components/projects";
import { LampDemo } from "@/components/ui/Lamp";

export default function Home() {

  return (
    <div className="bg-slate-900 text-slate-300">

      {/* <!-- Welcome Section --> */}
      <div className="">
      <LampDemo/>
      </div>

      {/* <!-- Hero Section --> */}
      <LandingPage />
      

      {/* <!-- About Section --> */}
      <About />


      {/* <!-- Projects Section --> */}
      <Projects/>
     
      {/* <!-- Contact Section --> */}
      <section className="py-16 px-6 bg-slate-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full mb-4 px-4 py-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded" />
          <textarea placeholder="Message" className="w-full mb-4 px-4 py-2 border rounded"></textarea>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </section>

      {/* <!-- Footer --> */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p>&copy; 2024 Swastik Pratik. All rights reserved.</p>
      </footer>
    </div>
  );
}
