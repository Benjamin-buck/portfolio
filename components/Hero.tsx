import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between max-xl:flex-col-reverse">
        <div className="w-[45%] mt-[120px] max-xl:mt-2 max-xl:w-auto max-xl:px-4 max-md:pt-2">
          <h2 className="text-5xl mt-12 font-lexend font-bold leading-[60px] max-md:text-3xl">
            Hi, Im <span className="gradient-text">Benjamin</span>, a junior
            React & Next.js <span className="gradient-text">full-stack</span>{" "}
            Developer.
          </h2>
          <p className="max-md:pt-5">
            I specialize in building clean, responsive, and intuitive web
            applications using modern front-end technologies like React,
            Next.js, and Tailwind CSS. Whether youre looking for a simple
            landing page or a complex interactive platform, I focus on
            delivering clean code, user-centric design, and seamless
            functionality.
          </p>
          <Link href="/portfolio">
            <button className="button-style mt-8">My Portfolio</button>
          </Link>
        </div>
        <div className="mt-[120px] max-md:mt-12 mx-4 max-xl:flex max-xl:justify-center">
          <Image
            src="/hero.png"
            width={660}
            height={382}
            alt="Code screenshot"
            className="rounded-md"
          />
        </div>
      </div>
      <h2 className="text-2xl mx-4 font-lexend font-bold mt-12">
        Technologies
      </h2>
      <div className="flex mx-4 text-6xl mt-4 gap-10 flex-wrap">
        <div className="flex gap-2 items-center">
          <FaReact />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">
            React
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <RiNextjsFill />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">
            Next.js
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <RiTailwindCssFill />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">
            Tailwind CSS
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <SiMysql />
        </div>
        <div className="flex gap-2 items-center">
          <BiLogoPostgresql />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">
            PostGres
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <TbBrandRedux />
          <h3 className="text-2xl font-semibold max-lg:hidden max-lg:gap-2">
            Redux
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
