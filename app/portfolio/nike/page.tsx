import { Nike } from "@/constants/projects/Nike";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const NikePage = () => {
  const project = Nike;
  return (
    <div className="mx-4 mb-8">
      <div className="w-full my-5 overflow-hidden gap-2">
        <Image
          src="/nike-1.png"
          className="w-auto rounded-md overflow-hidden max-xl:col-span-2 col-span-1 shadow-sm max-h-[900px]"
          width={1198}
          height={400}
          alt="Github 1"
        />
      </div>
      <div className="flex gap-2 my-5">
        <Link href={project.github} target="_blank">
          <button className="px-5 py-2 bg-black rounded-md text-white">
            Github Repo
          </button>
        </Link>
        <Link href={project.demo} target="_blank">
          <button className="px-5 py-2 bg-black rounded-md text-white bg-blue">
            Live Demo
          </button>
        </Link>
      </div>
      <div className="border-t pt-4 flex gap-3 max-md:flex-col">
        <div className="w-[70%] max-lg:w-full">
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <div className="mt-3">
            <p className="max-w-[80%] max-lg:max-w-auto">
              {project.description}
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mt-6 border-b pb-2">
              Features
            </h2>
            {project.features.map((feature) => (
              <div className="mt-4" key={feature.label}>
                <h3 className="font-semibold text-lg">{feature.label}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border flex-1 rounded-md border-gray-200 p-4">
          <h2 className="font-bold text-xl">Project details</h2>
          <p className="font-bold">Technology:</p>
          <ul className="flex flex-col mt-2">
            {project.technology.map((tech) => (
              <li key={tech} className="flex gap-2 ml-3 items-center my-1">
                <FaCheckCircle className="text-green-500" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NikePage;
