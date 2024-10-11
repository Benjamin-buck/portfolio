import { heroHeading } from "@/constants/hero";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";



const Hero = () => {
  return (
    <section>
      <div className=" flex justify-between">
        <div className="w-[45%] pt-[200px]  max-xl:w-auto max-xl:px-4">
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
        <div className="pt-[160px]">
          <Image
            src="/texteditor.png"
            width={660}
            height={382}
            alt="Code screenshot"
            className="rounded-md max-xl:hidden shadow-black shadow-sm"
          />
        </div>
      </div>
      <h2 className="text-2xl font-lexend font-bold mt-12">
            Technologies
      </h2>
      <div className="flex text-6xl mt-4 gap-10 flex-wrap">
        <div className="flex gap-2 items-center">
          <FaReact />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">React</h3>
        </div>
        <div className="flex gap-2 items-center">
          <RiNextjsFill />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">Next.js</h3>
        </div>
        <div className="flex gap-2 items-center">
          <RiTailwindCssFill />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">Tailwind CSS</h3>
        </div>
        <div className="flex gap-2 items-center">
          <SiMysql />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">MySQL</h3>
        </div>
        <div className="flex gap-2 items-center">
          <TbBrandRedux />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">Redux</h3>
        </div>

        
        
        
        
        

      </div>
    </section>
  );
};

export default Hero;
