import React from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  let htext = useRef();
  let ptext = useRef();
  let infoItems = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-box-1",
        start: "top bottom",
        end: "top 50%",

        ease: "power2.inOut",
      },
    });

    tl.from(htext.current, {
      duration: 2,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 0.5,
    });
    tl.from(ptext.current, {
      duration: 1.4,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 0.5,
    });
  });
  useGSAP(() => {
    gsap.from(infoItems.current, {
      scrollTrigger: {
        trigger: ".section-box-1",
        start: "top 70%",
        end: "top 50%",

        ease: "power2.inOut",
      },
      y: 100,
      duration: 0.7,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 2,
    });
  });
  return (
    <section className="section-box-1 wrapper py-10 lg:pt-20" id="about">
      <div className="flex flex-col justify-center md:flex-row md:items-start md:justify-between">
        <div className="lg:max-w-[34rem] flex flex-col gap-10 md:gap-5 font-montserrat">
          <h2
            ref={htext}
            className="text-5xl md:text-7xl font-medium lg:text-6.5xl"
          >
            More Than Just a Website.
          </h2>
          <p ref={ptext} className="text-lg leading-snug lg:text-[1.3rem]">
            We create websites that resonate with all emotions.
            <br />
            We specialize in making brands{" "}
            <span className="font-bold">stand out</span> significantly from the
            competition.
          </p>

          <div className="flex gap-5 text-xs font-medium">
            {/* <NavLink
              to="#"
              className="button rounded-full hidden md:inline-block"
            >
              See All Projects
            </NavLink> */}
            <a
              href="https://api.whatsapp.com/send/?phone=447988537395&text=Hello%2C+%2ACreativeStudios%2A+I+am+Coming+From+Your+Website%2C+I+Need+A+Design.+&type=phone_number&app_absent=0"
              className="button bg-black text-white text-base rounded-[5px] w-full text-center md:w-auto"
              target="_blank"
            >
              I NEED A WEBSITE
            </a>
          </div>
        </div>

        <div
          ref={infoItems}
          className="grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:text-right mt-10"
        >
          <div>
            <h3>EXPERIENCE</h3>
            <h4>Since 2020</h4>
          </div>

          <div>
            <h3>COVERED</h3>
            <h4>12+ Countries</h4>
          </div>

          <div>
            <h3>PROJECTS</h3>
            <h4>40+ Websites</h4>
          </div>

          <div>
            <h3>TEAM</h3>
            <h4>5 Members</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
