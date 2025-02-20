"use client";

import { portfolio } from "@/constants/portfolio";
import { myProjects } from "@/constants/projects/myProjects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxEnter } from "react-icons/rx";

const Portfolio = () => {
  const portfolioCount = myProjects.length;
  const [view, setView] = useState("Grid");
  return (
    <main className="mb-8">
      <div className="mt-12 mx-8 md:mx-0 border border-orange-300 rounded-[5px] mb-5 bg-orange-100 px-6 py-3 text-orange-700">
        <p className="font-bold">Site Under Maintenance:</p>
        <p>
          I&apos;m currently updating my portfolio to include more recent
          projects. Check back soon to see the latest additions!
        </p>
      </div>
      <div className="mt-5 flex justify-between items-center pb-5 max-sm:mx-8 max-sm:flex-col max-sm:items-start max-sm: gap-2">
        <div>
          <h1 className="text-3xl font-lexend font-semibold">
            {portfolio.title} - {portfolioCount} project
          </h1>
          <p>{portfolio.description}</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-3 lg:flex hidden border rounded-lg gap-4 w-full mb-3">
        <div className="flex gap-4">
          <p
            className={`p-3 cursor-pointer font-bold rounded-lg ${
              view === "Grid" ? "bg-blue text-white" : "bg-gray-100 text-black"
            }`}
            onClick={() => setView("Grid")}
          >
            Grid View
          </p>
          <p
            className={`p-3 cursor-pointer font-bold rounded-lg ${
              view === "List" ? "bg-blue text-white" : "bg-gray-100 text-black"
            }`}
            onClick={() => setView("List")}
          >
            List View
          </p>
        </div>
      </div>

      {/* Grid View */}
      {view === "Grid" && (
        <div className="grid grid-cols-12 gap-6 mx-8 md:mx-0">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="col-span-12 lg:col-span-4 xl:col-span-3 relative"
            >
              <Image
                src={project.thumbnail}
                width={500}
                height={500}
                alt="Image"
                className="w-full h-[220px] lg:h-[200px] rounded-t-[10px] border border-gray-100 object-cover"
              />
              <div className="absolute top-0 left-0  w-full lg:h-[200px] h-[220px]">
                <p
                  className={`w-fit px-4 py-[3px] rounded m-4 text-sm ${
                    project.status === "In Progress"
                      ? "bg-orange-300 text-orange-800"
                      : "bg-green-300"
                  }`}
                >
                  {project.status}
                </p>
              </div>

              <div className="border-b border-gray-100 shadow-sm border-l border-r rounded-b-[10px] px-4 py-2">
                <h3 className="text-lg font-semibold font-lexend">
                  {project.title}
                </h3>

                <p className="text-gray-500 line-clamp-3">
                  {project.description}
                </p>
                <Link href={`/portfolio/${project.id}`}>
                  <button className="text-white bg-black rounded-[5px] my-2 w-full hover:bg-gray-800 py-2 flex gap-2 justify-center items-center">
                    <RxEnter className="text-xl" /> View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "List" && (
        <div className="flex flex-col gap-4">
          {myProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <div className="border w-full flex rounded-lg">
                <Image
                  src={project.thumbnail}
                  width={400}
                  height={400}
                  alt="Image"
                  className=" object-cover rounded-lg w-[300px]"
                />
                <div className="p-4">
                  <h2 className="font-lexend text-xl font-bold">
                    {project.title}
                  </h2>
                  <p
                    className={`w-fit px-4 py-[3px]  my-3 rounded text-sm ${
                      project.status === "In Progress"
                        ? "bg-orange-300 text-orange-800"
                        : "bg-green-300"
                    }`}
                  >
                    {project.status}
                  </p>
                  <p className="line-clamp-3">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Portfolio;
