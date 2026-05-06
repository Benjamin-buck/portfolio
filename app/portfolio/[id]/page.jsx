"use client";

import Modal from "@/components/Modal";
import ProjectImages from "@/components/ProjectImages";
import { myProjects } from "@/constants/projects/myProjects";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLock } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { verifyProjectPassword } from "@/app/actions/verifyProjectPassword";

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
  const [passwordInput, setPasswordInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

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

  if (project.isPasswordProtected && !isUnlocked) {
    const handleUnlock = async (e) => {
      e.preventDefault();
      setIsVerifying(true);
      const correct = await verifyProjectPassword(project.id, passwordInput);
      setIsVerifying(false);
      if (correct) {
        setIsUnlocked(true);
        setPasswordError(false);
      } else {
        setPasswordError(true);
        setPasswordInput("");
      }
    };

    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5">
          <FaLock className="text-gray-500 text-xl" />
        </div>
        <h1 className="text-2xl font-lexend font-bold mb-2">Password Protected</h1>
        <p className="text-gray-500 mb-8 max-w-sm text-sm leading-relaxed">
          This project contains confidential client information. Enter the password to view the full project details.
        </p>
        <form onSubmit={handleUnlock} className="w-full max-w-xs flex flex-col gap-3">
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
              setPasswordError(false);
            }}
            placeholder="Enter password"
            autoFocus
            className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
              passwordError
                ? "border-red-300 bg-red-50 focus:border-red-400"
                : "border-gray-200 focus:border-gray-400"
            }`}
          />
          {passwordError && (
            <p className="text-red-500 text-xs text-left">Incorrect password. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={isVerifying}
            className="w-full py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isVerifying ? "Verifying..." : "Unlock Project"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors mt-1"
          >
            Go back
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-0 mb-16">
      {/* Image gallery modal */}
      {isModalOpen && project.images?.length && (
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
      {project.images?.length && (
        <ProjectImages
          images={project.images}
          handleClick={() => setIsModalOpen(true)}
        />
      )}

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
        {project.images?.length && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors duration-150"
          >
            <BsImages size={16} /> View Gallery
          </button>
        )}
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

            {(project.startDate || project.endDate) && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Timeline</p>
                <p className="text-sm text-gray-700">
                  {project.startDate ?? "—"} {project.endDate ? `→ ${project.endDate}` : project.startDate ? "→ Present" : ""}
                </p>
              </div>
            )}

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
