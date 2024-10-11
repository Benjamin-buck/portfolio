import {
  details,
  experience,
  objective,
  technicalSkills,
} from "@/constants/resume";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 mx-[14rem] border py-6 px-10">
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
        <h2 className="text-xl font-bold">{experience.title}</h2>
      </div>
    </div>
  );
};

export default page;
