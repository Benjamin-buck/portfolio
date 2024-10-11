import { heroHeading } from "@/constants/hero";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex justify-between">
      <div className="w-[45%] py-[200px]  max-xl:w-auto max-xl:px-4">
        <h2 className="text-5xl font-lexend font-bold leading-[60px] max-md:text-3xl">
          Hi, I'm <span className="gradient-text">Benjamin</span>, a junior
          React & Next.js Developer.
        </h2>
        <p className="max-md:pt-5">
          I specialize in building clean, responsive, and intuitive web
          applications using modern front-end technologies like React, Next.js,
          and Tailwind CSS. Whether you're looking for a simple landing page or
          a complex interactive platform, I focus on delivering clean code,
          user-centric design, and seamless functionality.
        </p>
        <button className="button-style mt-8">My Portfolio</button>
      </div>
      <div className="py-[160px]">
        <Image
          src="/texteditor.png"
          width={660}
          height={382}
          alt="Code screenshot"
          className="rounded-md max-xl:hidden shadow-black shadow-sm"
        />
      </div>
    </div>
  );
};

export default Hero;
