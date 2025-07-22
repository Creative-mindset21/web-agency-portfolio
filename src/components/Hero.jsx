import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);

  let textItem1 = useRef();
  let textItem2 = useRef();
  let textItem3 = useRef();
  let textItem4 = useRef();

  useGSAP(() => {
    gsap.from(textItem1.current, {
      x: 1100,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);
  useGSAP(() => {
    gsap.from(textItem2.current, {
      x: -1100,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);
  useGSAP(() => {
    gsap.from(textItem3.current, {
      duration: 2,
      opacity: 0,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="bg-bg-color h-auto lg:min-h-screen text-black relative overflow-hidden">
      <section className=" flex flex-col pt-20 lg:pt-0 lg:px-10 h-screen text-center gap-5 justify-center items-center wrapper lg:max-w-[90%]">
        <div className="flex flex-col lg:gap-6 w-full relative">
          <div className="flex flex-col md:gap-3 text-left md:pt-10 lg:overflow-hidden">
            <span
              ref={textItem1}
              className="text-[3.4rem] md:text-[7rem] lg:text-[9.5rem] xl:text-[13rem] font-bricolage leading-10 mt-3 font-bold lg:text-left lg:leading-40"
            >
              Good Designs
            </span>
            <br />

            <span
              ref={textItem3}
              className="text-[4rem] md:text-[7rem] md:mt-6 xl:pr-30 lg:text-[9.5rem] xl:text-[13rem] font-bricolage leading-10 font-bold lg:text-right lg:leading-24 text-yellow-400"
            >
              Make Great
            </span>
            <br />

            <span
              ref={textItem2}
              className="text-[4rem] md:text-[7rem] md:mt-6 lg:text-[9.5rem] xl:text-[13rem] font-bricolage leading-10 font-bold lg:text-left lg:leading-40"
            >
              Business
            </span>
          </div>
          <div className="flex flex-col md:flex-row text-left mt-5 md:mt-15 lg:absolute bottom-0 right-0 ">
            <span className="text-base max-w-100 md:text-[1.25rem] tracking-widest lg:text-md font-montserrat">
              We design and develop for brands. We are skilled at making complex
              ideas plain and simple.
            </span>
          </div>
        </div>

        <div className="wrapper flex flex-col md:flex-row justify-center gap-5 lg:items-center font-montserrat text-xs font-medium w-full">
          <NavLink
            to="#"
            className="button w-full border-2 border-solid md:hidden"
          >
            See All Projects
          </NavLink>
          <NavLink
            to="#"
            className="button bg-transparent border-2 border-solid w-auto md:hidden"
          >
            Book A Call
          </NavLink>
        </div>
      </section>
      <div className="mt-20 h-2 bg-black"></div>
    </div>
  );
};

export default Hero;
