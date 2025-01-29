import ProjectImages from "@/components/ProjectImages";
import { Nexdev } from "@/constants/projects/Nexdev";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  const project = Nexdev;
  return (
    <div className="mx-4 mb-8">
      <ProjectImages
        image1="/nexdev.png"
        image2="/nexdev-1.png"
        image3="/nexdev.png"
        image4="/nexdev.png"
        image5="/nexdev.png"
      />
      <div className="flex gap-2 my-5">
        <Link href="https://nexdev-silk.vercel.app/">
          <button className="px-5 py-2 rounded-md text-white bg-blue">
            Live Demo
          </button>
        </Link>
        <Link href="https://github.com/Benjamin-buck/nexdev">
          <button className="px-5 py-2 rounded-md text-white bg-black">
            GitHub Repository
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

          {/* Features */}
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

          {/* Roles */}
          <div className="my-8">
            <h2 className="text-2xl font-semibold mt-6 border-b pb-2">Roles</h2>
            {project.roles &&
              project.roles.map((role) => (
                <div key={role.title} className="my-3">
                  <h4 className="font-bold">{role.title}</h4>
                  <p>{role.description}</p>
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

export default page;
