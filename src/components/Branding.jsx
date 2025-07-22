import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Branding = () => {
  let htext = useRef();
  let ptext = useRef();
  let infoItems = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-box",
        start: "top 70%",
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
  });

  useGSAP(() => {
    gsap.from(ptext.current, {
      scrollTrigger: {
        trigger: ".section-box",
        start: "top 70%",
        end: "top 50%",

        ease: "power2.inOut",
      },

      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 2,
    });
  });
  useGSAP(() => {
    gsap.from(infoItems.current, {
      scrollTrigger: {
        trigger: ".section-box",
        start: "top 70%",
        end: "top 50%",

        ease: "power2.inOut",
      },
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 2,
    });
  });

  return (
    <section
      className=" section-box bg-black text-gray-50 font-montserrat"
      id="branding"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between wrapper py-10 mt-10 lg:pt-20">
        <div className="lg:max-w-[30rem] xl:max-w-[35rem] flex flex-col gap-10 md:gap-5">
          <h2
            ref={htext}
            className="text-5xl md:text-7xl font-medium lg:text-[4rem] xl:text-[5rem]"
          >
            These Brands Shine Bright.
          </h2>
          <p ref={ptext} className="text-lg leading-snug lg:text-[1.3rem]">
            We Design Experiences. We Build Brands from the Ground Up. Our
            visual concepts help your customers align with your pricing.
          </p>

          <div className="flex gap-5 font-medium">
            <NavLink
              to="/flyers"
              className="button rounded-lg hidden md:inline-block text-black"
            >
              See All Projects
            </NavLink>
            <a
              href="https://api.whatsapp.com/send/?phone=447988537395&text=Hello%2C+%2ACreativeStudios%2A+I+am+Coming+From+Your+Website%2C+I+Need+A+Design.+&type=phone_number&app_absent=0"
              className="button bg-white text-black rounded-lg w-full text-center md:w-auto"
              target="_blank"
            >
              I NEED A DESIGN
            </a>
          </div>
        </div>

        <div
          ref={infoItems}
          className="grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:text-right mt-10 brand"
        >
          <div>
            <h3>EXPERIENCE</h3>
            <h4>Since 2015</h4>
          </div>

          <div>
            <h3>COVERED</h3>
            <h4>20+ Countries</h4>
          </div>

          <div>
            <h3>PROJECTS</h3>
            <h4>250+ Brands</h4>
          </div>

          <div>
            <h3>LOGOS</h3>
            <h4>800+ Logos</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
