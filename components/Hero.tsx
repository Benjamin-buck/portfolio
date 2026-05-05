import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const techs = [
  { icon: <FaReact />, label: "React" },
  { icon: <RiNextjsFill />, label: "Next.js" },
  { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
  { icon: <TbBrandRedux />, label: "Redux" },
];

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between max-xl:flex-col-reverse">
        <div className="w-[45%] mt-[120px] max-xl:mt-2 max-xl:w-auto max-xl:px-4 max-md:pt-2">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </span>
          <h2 className="text-5xl mt-4 font-lexend font-bold leading-[60px] max-md:text-3xl">
            Hi, I&apos;m <span className="gradient-text">Benjamin</span>, a
            Senior UI/UX <span className="gradient-text">Developer</span>.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-md:pt-5">
            6+ years building polished, accessible web applications — from
            pixel-perfect interfaces to full-stack product features.
          </p>
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            <Link href="/portfolio">
              <button className="button-style">My Portfolio</button>
            </Link>
            <a
              href="https://github.com/Benjamin-buck"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-3xl text-gray-700 hover:text-black transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-alan-buck-466514134/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
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

      <h2 className="text-2xl mx-4 font-lexend font-bold mt-16">
        Technologies
      </h2>
      <div className="flex mx-4 mt-4 gap-3 flex-wrap">
        {techs.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 hover:border-cyan-400 hover:bg-cyan-50 transition-colors duration-200 cursor-default"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-sm font-semibold text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
