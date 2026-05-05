"use client";

import Modal from "@/components/Modal";
import ProjectImages from "@/components/ProjectImages";
import { myProjects } from "@/constants/projects/myProjects";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

const statusStyle = (status) => {
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

const IndividualProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = parseInt(params.id);
  const project = myProjects.find((p) => p.id === id) ?? null;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-2xl font-lexend font-bold mb-2">Project not found</h1>
        <p className="text-gray-500 mb-6">That project doesn&apos;t exist or may have been removed.</p>
        <Link href="/portfolio">
          <button className="button-style">Back to Portfolio</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-0 mb-16">
      {/* Image gallery modal */}
      {isModalOpen && (
        <Modal
          title={`${project.title} — Image Gallery`}
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        >
          <div className="flex flex-col gap-10">
            {project.images.map((img) => (
              <div key={img.image}>
                <p className="text-sm font-semibold text-gray-500 mb-2">{img.label}</p>
                <Image
                  src={img.image}
                  height={1200}
                  width={1200}
                  className="w-full rounded-xl shadow-md object-cover"
                  alt={img.label}
                />
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mt-6 mb-5 flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
      >
        <ChevronLeft size={16} /> Back to Portfolio
      </button>

      {/* Image gallery grid */}
      <ProjectImages
        images={project.images}
        handleClick={() => setIsModalOpen(true)}
      />

      {/* Title row */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-lexend font-bold">{project.title}</h1>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyle(project.status)}`}
        >
          {project.status}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:border-gray-500 hover:bg-gray-50 transition-all duration-150">
              <FaGithub size={16} /> GitHub Repo
            </button>
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors duration-150">
              <FaExternalLinkAlt size={13} /> Live Demo
            </button>
          </a>
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors duration-150"
        >
          <BsImages size={16} /> View Gallery
        </button>
      </div>

      {/* Main content */}
      <div className="mt-8 flex gap-8 max-md:flex-col">
        {/* Left — description + features */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>

          <div className="mt-10">
            <h2 className="text-xl font-lexend font-bold mb-5">Features</h2>
            <div className="flex flex-col gap-7">
              {project.features.map((feature) => (
                <div key={feature.heading}>
                  <h3 className="font-semibold text-base mb-3">{feature.heading}</h3>
                  <ul className="flex flex-col gap-2">
                    {feature.content.map((bullet) => (
                      <li key={bullet} className="flex gap-3 items-start text-gray-600 text-sm leading-relaxed">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={14} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — project details card */}
        <div className="w-full md:w-[260px] shrink-0">
          <div className="sticky top-6 border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h2 className="font-lexend font-bold text-base mb-4">Project Details</h2>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Status</p>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusStyle(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {project.projectDetails.technology.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.liveLink || project.repo) && (
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={12} /> Live Site
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    <FaGithub size={14} /> GitHub Repo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjectPage;
