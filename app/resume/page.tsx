import {
  details,
  education,
  experience,
  objective,
  technicalSkills,
} from "@/constants/resume";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 mx-[14rem] max-xl:mx-4 border py-6 px-10">
      <h1 className="text-4xl font-lexend font-bold">{details.name}</h1>
      <p>{details.address}</p>
      <p>{details.phone}</p>
      <p>{details.email}</p>
      <div className="flex gap-3 text-blue underline">
        {details.links.map(({ label, href }) => (
          <Link href={href} key={label}>
            {label}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{objective.title}</h2>
        <p>{objective.description}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{technicalSkills.title}</h2>
        {technicalSkills.skills.map(({ label, description }) => (
          <p key={label}>
            <span className="font-bold">{label}:</span> {description}
          </p>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
        {experience.jobs.map(
          ({ employer, location, team, role, duration, responsibilities }) => (
            <div key={role} className="mb-6">
              <h5 className="font-bold">
                {employer} - {location}
              </h5>
              <p>
                <span className="underline">{team}</span>: {role}
              </p>
              <p>{duration}</p>
              <ul>
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} className="list-disc ml-[50px]">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      {/* Projects / Portfolio Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Projects / Portfolio</h2>
        <p>
          All my latest projects are available and updated{" "}
          <Link href="/portfolio" className="text-blue underline">
            here.
          </Link>
        </p>
      </div>

      {/* Education Section */}
      <div className="my-5">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {education.map((item) => (
          <div key={item.program}>
            <h5 className="font-bold">
              {item.type} -{" "}
              <Link className="text-blue underline" href={item.programUrl}>
                {item.program}
              </Link>{" "}
              - {item.school}
            </h5>
            <p>{item.description}</p>
            <ul>
              {item.coursesCompleted.map((item) => (
                <li key={item} className="list-disc ml-[50px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
