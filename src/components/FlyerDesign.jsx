import { images } from "../data/main.js";
import Header from "./Header.jsx";

const FlyerDesign = () => {
  return (
    <>
      <Header />
      <section className="wrapper my-30 max-w-[95%]">
        <ul className="images">
          {images.map((image, index) => (
            <li
              key={index}
              className="lg:opacity-80 hover:opacity-100 transition-all"
            >
              <img src={image.img} alt="Flyer Design Images" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FlyerDesign;
