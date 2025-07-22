import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  "Creative Studios",
  "Website Design",
  "Logo Design",
  "Branding",
];

const GsapInfiniteSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate content to make the scroll seamless
    const content = slider.innerHTML;
    slider.innerHTML += content;

    // Get total width of all items
    const totalWidth = slider.scrollWidth / 2;

    slider.addEventListener("mouseenter", () => gsap.to(slider, { timeScale: 0 }));
    slider.addEventListener("mouseleave", () => gsap.to(slider, { timeScale: 1 }));

    // GSAP infinite scroll animation
    gsap.fromTo(
      slider,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 80,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-white py-4">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-12 whitespace-nowrap text-4xl md:text-7xl font-bold text-black/80 font-bricolage"
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-max">
            {item}
          </div>
        ))}
      </div>

      {/* Left Fade */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-34 bg-gradient-to-r from-gray-100 to-transparent z-10" /> */}

      {/* Right Fade */}
      {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-34 bg-gradient-to-l from-gray-100 to-transparent z-10" /> */}
    </div>
  );
};

export default GsapInfiniteSlider;
