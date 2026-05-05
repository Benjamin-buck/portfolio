import { details, education, experience, projects, skills, summary } from "@/constants/resume";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import PrintButton from "@/components/PrintButton";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="text-xs font-bold uppercase tracking-widest gradient-text shrink-0">
      {children}
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-cyan-200 to-transparent" />
  </div>
);

const ResumePage = () => {
  return (
    <div className="mt-8 mb-16 mx-auto max-w-4xl">
      <div className="no-print flex justify-end mb-4">
        <PrintButton />
      </div>
      <div id="resume-card" className="resume-card bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="px-10 pt-10 pb-8 border-b border-gray-100">
          <div className="flex justify-between items-start gap-8 max-md:flex-col">
            <div>
              <h1 className="text-4xl font-lexend font-bold text-gray-900 leading-tight">
                {details.name}
              </h1>
              <p className="text-base font-semibold gradient-text mt-1">
                {details.title}
              </p>
              <p className="text-sm text-gray-400 mt-0.5">{details.pronouns}</p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-1.5 text-sm text-gray-600 shrink-0">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400 shrink-0" size={12} />
                {details.location}
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-gray-400 shrink-0" size={12} />
                {details.phone}
              </span>
              <a href={`mailto:${details.email}`} className="flex items-center gap-2 hover:text-black transition-colors">
                <FaEnvelope className="text-gray-400 shrink-0" size={12} />
                {details.email}
              </a>
              {details.links.map(({ label, href }) => {
                const Icon = label === "LinkedIn" ? FaLinkedin : label === "GitHub" ? FaGithub : FaGlobe;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-black transition-colors"
                  >
                    <Icon className="text-gray-400 shrink-0" size={12} />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-10 py-8 flex flex-col gap-10">

          {/* Summary */}
          <section>
            <SectionHeading>Summary</SectionHeading>
            <p className="text-gray-600 leading-relaxed text-sm">{summary}</p>
          </section>

          {/* Work Experience */}
          <section>
            <SectionHeading>Work Experience</SectionHeading>
            <div className="flex flex-col gap-8">
              {experience.map((job) => (
                <div key={job.employer}>
                  {/* Employer row */}
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                    <h3 className="font-lexend font-bold text-base text-gray-900">
                      {job.employer}
                      <span className="font-normal text-gray-400 text-sm ml-2">• {job.location}</span>
                    </h3>
                    <span className="text-xs font-semibold text-gray-400 shrink-0">{job.duration}</span>
                  </div>

                  {/* Company description */}
                  {job.description && (
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-2xl">
                      {job.description}
                    </p>
                  )}

                  {/* Roles */}
                  <div className="flex flex-col gap-5 pl-4 border-l-2 border-gray-100">
                    {job.roles.map((role) => (
                      <div key={role.title}>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <p className="font-semibold text-sm text-gray-800">{role.title}</p>
                          {role.type && (
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                              {role.type}
                            </span>
                          )}
                        </div>
                        {role.summary && (
                          <p className="text-xs text-gray-500 leading-relaxed mb-2">{role.summary}</p>
                        )}
                        {role.bullets.length > 0 && (
                          <ul className="flex flex-col gap-1.5">
                            {role.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2.5 items-start text-xs text-gray-600 leading-relaxed">
                                <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" size={11} />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <SectionHeading>Projects</SectionHeading>
            <div className="flex flex-col gap-5">
              {projects.map((project) => (
                <div key={project.title} className="flex justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <h3 className="font-semibold text-sm text-gray-900">{project.title}</h3>
                      <span className="text-xs text-gray-400">{project.client}</span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-500 hover:text-cyan-600 transition-colors"
                          aria-label="Visit project"
                        >
                          <FaExternalLinkAlt size={10} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{project.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 shrink-0 pt-0.5">{project.duration}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionHeading>Education</SectionHeading>
            {education.map((item) => (
              <div key={item.degree}>
                <a
                  href={item.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-gray-900 hover:text-black transition-colors"
                >
                  {item.degree}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">{item.school}</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 max-w-2xl">{item.description}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <SectionHeading>Skills</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1 rounded-full hover:border-cyan-300 hover:bg-cyan-50 transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Portfolio link */}
          <section>
            <SectionHeading>Portfolio</SectionHeading>
            <p className="text-sm text-gray-600">
              All my latest projects are available and updated{" "}
              <Link href="/portfolio" className="gradient-text font-semibold hover:underline">
                here
              </Link>
              .
            </p>
          </section>

          <p className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
            References available upon request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
