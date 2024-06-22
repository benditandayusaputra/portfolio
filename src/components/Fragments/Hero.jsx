import React from "react";
import Button from "../Elements/Button.jsx";

const Hero = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center">
      <div className="md:order-2 mt-6 md:mt-0 md:py-6 px-4 w-[250px] lg:w-auto md:w-[50%] lg:pl-15 md:pl-10 pl-4 text-center">
        <img
          src="/me-shadow-dark.png"
          alt="Bendi Tandayu Saputra"
          className="rounded-lg md:w-80 lg:w-[370px] opacity-80 filter grayscale-[30%]"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
      <div
        className="text-center mt-5 md:text-right md:max-w-lg md:py-6 pr-4 lg:pl-4 lg:pr-15 md:pr-10 md:pl-10 pl-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="text-lg mb-2 lg:text-2xl">
          Hi, I'm Bendi Tandayu Saputra
        </div>
        <div className="text-2xl md:text-3xl lg:text-[2.5rem] leading-tight">
          I'M A <b>WEB/APP</b>
          <br className="hidden md:block" /> <b>DEVELOPER</b>
        </div>
        <p className="mt-2 mb-8">
          I'm a Web Developer, and I'm always open{" "}
          <br className="hidden md:block" /> to learning <b>new technologies</b>
          .
        </p>
        <Button outline>VIEW MY PROJECTS</Button>
      </div>
    </div>
  );
};

export default Hero;
