import React from 'react'
import About from "../components/About"
import Projects from "../components/Projects"
import Branding from "../components/Branding"
import BrandingProjects from "../components/BrandingProjects"
import Testimonials from "../components/Testimonials"
import Hero from '../components/Hero'

function Home() {
  return (
    <>
        <Hero/>
        <About />
        <Projects />
        <Branding />
        <BrandingProjects />
        <Testimonials />
    </>
  );
}

export default Home;
