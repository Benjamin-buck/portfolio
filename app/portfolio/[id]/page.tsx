"use client";
import ProjectImages from "@/components/ProjectImages";
import { myProjects } from "@/constants/projects/myProjects";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const IndividualProjectPage = () => {
  const params = useParams<{ id: string }>();
  const project = myProjects[parseInt(params.id) - 1];
  console.log(params);
  return (
    <div className="mx-4 mb-8">
      <div className="mt-10">
        <ProjectImages
          image1={project.images[0]}
          image2={project.images[1]}
          image3={project.images[2]}
          image4={project.images[3]}
          image5={project.images[0]}
        />

        <div className="flex gap-2 my-5">
          <Link href={project.repo}>
            <button className="px-5 py-2 bg-black rounded-md text-white">
              Github Repo
            </button>
          </Link>
          <Link href={project.liveLink}>
            <button className="px-5 py-2 bg-black rounded-md text-white">
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
                <div className="mt-4">
                  <h2 className="text-lg font-bold">{feature.heading}</h2>
                  {feature.content.map((bullet) => (
                    <p className="pl-3 py-1">- {bullet}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="border flex-1 rounded-md border-gray-200 p-4">
            <h2 className="font-bold text-xl">Project details</h2>
            <p className="font-bold">Status: {project.status}</p>
            <p className="font-bold">Technology:</p>

            <ul>
              {project.projectDetails.technology.map((tech) => (
                <li className="flex gap-2 items-center mt-2">
                  <BiCheckCircle /> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjectPage;
