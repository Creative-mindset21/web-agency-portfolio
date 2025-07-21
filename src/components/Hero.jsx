import { NavLink, Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Branding from "./Branding"
import BrandingProjects from "./BrandingProjects"

const Hero = () => {
  return (
    <main className="bg-bg-color h-screen text-black">
        <section className=" flex flex-col pt-20 lg:pt-30   md:h-[70%] lg:h-screen text-center gap-5 justify-center items-center">
            <div className="flex flex-col lg:gap-6 w-full">
              <div className="flex flex-col md:gap-3 ">
                <span className="text-5xl md:text-[125px] lg:text-[160px]  font-bricolage font-bold md:text-left md:leading-24">Good Designs</span><br /> 
                <span className="text-5xl md:text-[125px] lg:text-[160px] font-bricolage font-bold md:text-right md:leading-24">Make Great</span><br />
                <span className="text-5xl md:text-[125px] lg:text-[160px] font-bricolage font-bold md:text-left md:leading-24">Business</span>
               
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <span className="text-xs md:text-[20px] tracking-widest lg:text-md font-montserrat">We design and develop for brands. We are skilled at making complex ideas plain and simple.</span> 
              </div>
              
            </div>

            <div className="wrapper flex flex-col md:flex-row jusfity-center gap-5 lg:items-center font-montserrat text-xs font-medium">
                <NavLink to="#"className="button w-auto border-2 border-solid">See All Projects</NavLink>
                <NavLink to="#"className="button bg-transparent border-2 border-solid w-auto">Book A Call</NavLink>
            </div>
        </section>
        <div className="mt-10 h-2 bg-black"></div>

        <About />
        <Projects />
        <Branding />
        <BrandingProjects />
    </main>
  )
}

export default Hero