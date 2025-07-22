import React from "react";

const Connect = () => {
  return (
    <section className="">
      <div className="wrapper flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-20 gap-6">
        <div>
          <h2 className="text-5xl md:text-8xl lg:text-7xl xl:text-9xl font-medium text-black border-b-2 pb-8 border-gray-300 md:border-0">
            Let's Work <br />
            <span className="text-yellow-400">Together</span>
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-3xl">Say Connect</h2>
          <h3 className="text-2xl md:text-3xl">creativestudios210@gmail.com</h3>
          <p className="max-w-[30rem]">
            We are not just a Design Agency, we are originally branded to
            deliver high end quality designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;
