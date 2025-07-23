import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import video1 from "../assets/videos-website/video1.mp4";
import image1 from "../assets/videos-website/image3.png";
import videoFile from "../assets/animation.mp4";

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
    <div className=" h-auto lg:min-h-screen text-black relative inset-0 -z-10  w-full bg-bg-color [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FAFC98_100%)] overflow-hidden">
      

      <section className=" flex flex-col pt-20 h-auto lg:pt-0 lg:px-10 lg:min-h-screen text-center gap-5 justify-center items-center wrapper lg:max-w-[90%]">
        <div className="flex flex-col lg:gap-6 w-full relative">
          <div className="flex flex-col md:gap-3 text-left md:pt-10 lg:overflow-hidden relative">
            <span
              ref={textItem1}
              className="text-[3.2rem] md:text-[7rem] lg:text-[6.7rem] xl:text-[9rem] 2xl:text-[13rem] font-bricolage leading-10 mt-3 font-bold lg:text-left lg:leading-40 flex items-center gap-4"
            >
              Great Designs{" "}
              <a href="#about" className="hidden lg:inline-block lg:right-0 lg:absolute">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-40 xl:w-70 hover:scale-110 transition-all"
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </a>
            </span>
            <br />

            <span
              ref={textItem3}
              className="text-[4rem] md:text-[7rem] md:mt-6 xl:pr-30 lg:text-[7rem] xl:text-[9rem] font-bricolage leading-10 font-bold lg:text-right lg:leading-24 text-yellow-400 flex items-center gap-30 2xl:text-[13rem] xl:pt-28 2xl:pt-48"
            >
              <a href="#about" className="hidden lg:inline-block lg:left-0 lg:absolute">
                <img
                  src={image1}
                  alt=""
                  className="w-70 xl:w-100  hover:scale-110 transition-all"
                />
              </a>
              <span className="lg:right-0 lg:absolute">
              Lead to
              </span>
            </span>
            <br />

            <span
              ref={textItem2}
              className="text-[4rem] md:text-[7rem] md:mt-6 lg:text-[6.9rem] xl:text-[9rem] font-bricolage leading-10 font-bold lg:text-left lg:leading-40 2xl:text-[13rem] xl:pt-28 2xl:pt-48"
            >
              Success
            </span>
          </div>
          <div className="flex flex-col md:flex-row text-left mt-5 md:mt-15 lg:absolute bottom-0 right-0 ">
            <span className="text-base max-w-100 md:text-[1.25rem] tracking-widest lg:text-md font-montserrat">
              We design and develop for brands, simplifying complex ideas into
              clear, straightforward solutions.
            </span>
          </div>
        </div>

        <div className="wrapper flex flex-col lg:flex-row md:justify-start justify-center gap-5 lg:items-center font-montserrat text-xs font-medium w-full z-10">
          <a
            href="#about"
            className="button w-full border-2 border-solid lg:hidden"
          >
            See All Projects
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=447988537395&text=Hello%2C+%2ACreativeStudios%2A+I+am+Coming+From+Your+Website%2C+I+Need+A+Design.+&type=phone_number&app_absent=0"
            className="button bg-transparent border-2 border-solid w-auto lg:hidden"
          >
            Contact Us
          </a>
        </div>
      </section>
      <div className="mt-20 h-2 bg-gray-300"></div>
    </div>
  );
};

export default Hero;
