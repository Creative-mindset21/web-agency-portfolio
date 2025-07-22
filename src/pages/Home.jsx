import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Branding from "../components/Branding";
import BrandingProjects from "../components/BrandingProjects";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import GsapInfiniteSlider from "../components/InfiniteSlider";
import Connect from "../components/Connect";
import Contact from "../components/Contact";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Branding />
      <BrandingProjects />
      <GsapInfiniteSlider />
      <Testimonials />
      <Connect />
      <Contact />
    </>
  );
}

export default Home;
