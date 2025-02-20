"use client";
import Modal from "@/components/Modal";
import ProjectImages from "@/components/ProjectImages";
import { myProjects } from "@/constants/projects/myProjects";
import { CheckCheckIcon, ChevronLeft, ImageDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsRecord } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

const IndividualProjectPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    return setIsModalOpen(!isModalOpen);
  };

  const params = useParams();
  const project = getProjectById(params.id, myProjects);

  function getProjectById(params, projectsArray) {
    const id = parseInt(params);
    for (let i = 0; i < projectsArray.length; i++) {
      if (projectsArray[i].id === id) {
        console.log(projectsArray[i].id);
        return projectsArray[i];
      }
    }
    return null;
  }
  return (
    <div className="mx-4 mb-8">
      {isModalOpen && (
        <Modal
          title="Project Images"
          onClose={handleClick}
          isOpen={isModalOpen}
        >
          <div className="grid grid-cols-1 gap-3">
            {project.images.map((image) => (
              <div key={image} className="my-8 lg:px-[200px]">
                <h3 className="text-2xl font-bold  mb-2">{image.label}</h3>
                <Image
                  src={image.image}
                  height={1200}
                  width={1200}
                  className="w-full rounded-lg shadow-md"
                  alt="Website Image"
                />
              </div>
            ))}
          </div>
        </Modal>
      )}
      <div className=" mt-5">
        <p
          className="flex gap-2 items-center cursor-pointer hover:text-blue"
          onClick={() => router.back()}
        >
          <ChevronLeft /> Back
        </p>
      </div>
      <div className="mt-5">
        <ProjectImages
          image1={project?.images[0].image}
          image2={project?.images[1].image}
          image3={project?.images[2].image}
          image4={project?.images[3].image}
          image5={project?.images[4].image}
          handleClick={handleClick}
        />

        <div className="flex gap-2 my-5">
          {project.repo && (
            <Link href={project?.repo}>
              <button className="px-5 py-2 flex hover:bg-gray-700  items-center bg-black rounded-md text-white">
                <DiGithubBadge size={30} />{" "}
                <span className="md:block hidden">Github Repo</span>
              </button>
            </Link>
          )}

          <Link href={project?.liveLink}>
            <button className="px-5 flex gap-2 items-center hover:bg-gray-700 py-2 bg-black rounded-md text-white">
              <BsRecord size={30} />{" "}
              <span className="md:block hidden">Live Demo</span>
            </button>
          </Link>

          <button
            onClick={handleClick}
            className="px-5 flex gap-2 py-2 items-center hover:bg-gray-700 bg-black rounded-md text-white"
          >
            <ImageDownIcon size={30} />{" "}
            <span className="md:block hidden">Image Gallery</span>
          </button>
        </div>
        <div className="border-t pt-4 flex gap-3 max-md:flex-col">
          <div className="w-[70%] max-lg:w-full">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <div className="mt-3">
              <p className="text-justify lg:max-w-[80%] text-lg max-lg:max-w-auto">
                {project?.description}
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold mt-6 border-b pb-2">
                Features
              </h2>
              {project.features.map((feature) => (
                <div key={feature.heading} className="mt-4">
                  <h2 className="text-lg font-bold">{feature.heading}</h2>
                  {feature.content.map((bullet) => (
                    <div key={bullet} className="flex gap-2 items-center">
                      <p>
                        <CheckCheckIcon />
                      </p>
                      <p key={bullet} className="pl-3 py-1 text-lg">
                        {bullet}
                      </p>
                    </div>
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
                <li key={tech} className="flex gap-2 items-center mt-2">
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
