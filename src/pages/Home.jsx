import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Branding from "../components/Branding";
import BrandingProjects from "../components/BrandingProjects";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import TextScroll from "../components/TextScroll";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Branding />
      <BrandingProjects />
      <TextScroll />
      <Testimonials />
    </>
  );
}

export default Home;
