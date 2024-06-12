import React from "react";

const Hero = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center">
      <div className="md:order-2 mt-6 md:mt-0 md:py-6 px-4 w-[200px] lg:w-auto md:w-[400px] lg:pl-15 md:pl-10 pl-4">
        <img
          src="/me.png"
          alt="Bendi Tandayu Saputra"
          className="rounded-lg md:w-60 lg:w-80 opacity-80 filter grayscale-[30%]"
        />
      </div>
      <div className="text-center mt-5 md:text-left md:max-w-lg md:py-6 pr-4 lg:pl-4 lg:pr-15 md:pr-10 pl-4">
        <h1 className="text-lg mb-2">Hi, I'm Bendi Tandayu Saputra</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          I'M A <span className="text-sky-400">WEB/APP</span>
          <br className="hidden md:block" />{" "}
          <span className="text-sky-400">DEVELOPER</span>
        </h2>
        <p className="mt-2 mb-8">
          I'm a Web Developer, and I'm always open{" "}
          <br className="hidden md:block" /> to learning{" "}
          <span className="text-sky-400">new technologies</span>.
        </p>
        <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:border-sky-400 hover:text-sky-400">
          VIEW MY PROJECTS
        </button>
      </div>
    </div>
  );
};

export default Hero;
