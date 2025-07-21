import { NavLink, Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Branding from "./Branding"
import BrandingProjects from "./BrandingProjects"
import Testimonials from "./Testimonials"

const Hero = () => {
  return (
    <main className="bg-bg-color h-auto min-h-screen text-black">
        <section className=" flex flex-col pt-20 lg:pt-30 lg:px-10 md:h-[70%] lg:h-screen text-center gap-5 justify-center items-center wrapper">
            <div className="flex flex-col lg:gap-6 w-full relative">
              <div className="flex flex-col md:gap-3 text-left md:pt-10">
                <span className="text-5xl md:text-[7rem] lg:text-[9.5rem] font-bricolage leading-10 mt-3 font-bold lg:text-left lg:leading-24">Good Designs</span><br /> 

                <span className="text-5xl md:text-[7rem] md:mt-6 lg:text-[9.5rem] font-bricolage leading-10 font-bold lg:text-right lg:leading-24">Make Great</span><br />

                <span className="text-5xl md:text-[7rem] md:mt-6 lg:text-[9.5rem] font-bricolage leading-10  font-bold lg:text-left lg:leading-24">Business</span>
               
              </div>
              <div className="flex flex-col md:flex-row text-left mt-5 md:mt-15 lg:absolute bottom-0 right-0">
                <span className="text-sm max-w-100 md:text-[1.25rem] tracking-widest lg:text-md font-montserrat">We design and develop for brands. We are skilled at making complex ideas plain and simple.</span> 
              </div>
              
            </div>

            <div className="wrapper flex flex-col md:flex-row jusfity-center gap-5 lg:items-center font-montserrat text-xs font-medium w-full">
                <NavLink to="#"className="button w-full border-2 border-solid md:hidden">See All Projects</NavLink>
                <NavLink to="#"className="button bg-transparent border-2 border-solid w-auto md:hidden">Book A Call</NavLink>
            </div>
        </section>
        <div className="mt-20 h-2 bg-black"></div>

        <About />
        <Projects />
        <Branding />
        <BrandingProjects />
        <Testimonials />
    </main>
  )
}

export default Hero