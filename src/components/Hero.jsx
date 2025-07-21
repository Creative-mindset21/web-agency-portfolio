import { NavLink, Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Branding from "./Branding"
import BrandingProjects from "./BrandingProjects"

const Hero = () => {
  return (
    <main className="bg-bg-color h-screen text-black">
        <section className="wrapper flex items-center flex-col pt-20 lg:pt-30 w-[85%] lg:max-w-[55%] text-center gap-10">
            <h1 className="text-5xl lg:text-7xl font-[500] leading-[1.2]">Good Designs Make Great Business</h1>
            <h2 className="text-lg lg:text-2xl">
                We design and develop for brands. We are skilled at making complex ideas plain and simple.
            </h2>

            <div className="flex flex-wrap jusfity-center gap-5 lg:items-center">
                <NavLink to="#"className="button w-full lg:w-auto">See All Projects</NavLink>
                <NavLink to="#"className="button bg-transparent border-2 border-solid w-full lg:w-auto">Book A Call</NavLink>
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