import React from "react";
import { brandingData } from "../data/main.js";
import { NavLink } from "react-router-dom";

const BrandingProjects = () => {
  return (
    <section className="bg-black">
      <div className="content-wrapper pb-10">
        <ul className="branding-cards mb-5">
          {brandingData.map((item) => (
            <li className="card" key={item.id}>
              <img src={item.imgSrc} alt={`Image of ${item.name}`} />
              <p className="mt-2 font-bold text-nav-color text-xs md:text-base">
                {item.name.toUpperCase()}
              </p>
            </li>
          ))}
        </ul>
        <NavLink
          to="#"
          className="py-2 px-6 bg-transparent text-white flex justify-center rounded-md border-2 border-solid lg:hidden"
        >
          Book A Call
        </NavLink>
      </div>
    </section>
  );
};

export default BrandingProjects;
