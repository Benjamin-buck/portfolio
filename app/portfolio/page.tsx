"use client";

import { myProjects } from "@/constants/projects/myProjects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaThLarge, FaList, FaLock } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";

const statusStyle = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "Done":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "On Going":
      return "bg-blue-50 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-gray-600 border-gray-200";
  }
};

const Portfolio = () => {
  const router = useRouter();
  const [view, setView] = useState<"Grid" | "List">("Grid");

  return (
    <main className="mb-12">
      {/* Maintenance notice */}
      <div className="mt-8 mx-8 md:mx-0 border border-gray-200 rounded-lg mb-8 bg-gray-50 px-5 py-3 flex gap-3 items-start">
        <span className="text-gray-400 text-sm mt-0.5">🔧</span>
        <div>
          <p className="font-semibold text-gray-600 text-sm">Currently updating</p>
          <p className="text-gray-400 text-sm">
            I&apos;m adding more recent projects — check back soon!
          </p>
        </div>
      </div>

      {/* Page header + toggle */}
      <div className="flex justify-between items-end mb-2 max-sm:mx-8 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <div>
          <h1 className="text-3xl font-lexend font-bold">My Portfolio</h1>
          <p className="text-gray-500 mt-1 text-sm">
            {myProjects.length} project{myProjects.length !== 1 ? "s" : ""} — take a look at some of my recent work.
          </p>
        </div>

        {/* Segmented view toggle */}
        <div className="lg:flex hidden items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setView("Grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-150 ${
              view === "Grid"
                ? "bg-white shadow-sm text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            <FaThLarge className="text-xs" /> Grid
          </button>
          <button
            onClick={() => setView("List")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-150 ${
              view === "List"
                ? "bg-white shadow-sm text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            <FaList className="text-xs" /> List
          </button>
        </div>
      </div>

      {/* Grid View */}
      {view === "Grid" && (
        <div className="grid grid-cols-12 gap-5 mt-6 mx-8 md:mx-0">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="col-span-12 lg:col-span-4 xl:col-span-3 group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 bg-white flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-[200px]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status + lock badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border backdrop-blur-sm bg-white/80 ${statusStyle(project.status)}`}
                  >
                    {project.status}
                  </span>
                  {project.isPasswordProtected && (
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm bg-white/80 text-gray-500 border-gray-200">
                      <FaLock className="text-[9px]" /> Private
                    </span>
                  )}
                </div>
                {/* Quick links */}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live site"
                      className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-black transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Repository"
                      className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-black transition-colors"
                    >
                      <FaGithub className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 px-4 py-3">
                <h3 className="text-base font-semibold font-lexend mb-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {project.projectDetails.technology.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.projectDetails.technology.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                      +{project.projectDetails.technology.length - 3} more
                    </span>
                  )}
                </div>

                <Link href={`/portfolio/${project.id}`}>
                  <button className="w-full py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors duration-150 flex items-center justify-center gap-2">
                    <RxEnter /> View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === "List" && (
        <div className="flex flex-col gap-3 mt-6">
          {myProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/portfolio/${project.id}`)}
              className="flex rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 bg-white overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative w-[200px] shrink-0 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  width={400}
                  height={300}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="font-lexend text-lg font-bold">{project.title}</h2>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle(project.status)}`}
                    >
                      {project.status}
                    </span>
                    {project.isPasswordProtected && (
                      <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-gray-200 text-gray-500">
                        <FaLock className="text-[9px]" /> Private
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.projectDetails.technology.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action icons */}
              <div
                className="flex flex-col justify-center items-center gap-2 px-5"
                onClick={(e) => e.stopPropagation()}
              >
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-gray-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Repository"
                    className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-gray-400 transition-colors"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Portfolio;
