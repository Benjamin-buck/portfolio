import prisma from "@/prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { BsRecordCircle } from "react-icons/bs";
import { PiGithubLogoBold } from "react-icons/pi";

const IndividualProjectPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!project) notFound();
  return (
    <div>
      <div className="w-full border my-5 rounded-lg shadow-sm overflow-hidden">
        <Image src="/banner.png" height={400} width={1980} alt="Banner" />
      </div>
      <div className="flex gap-2 ">
        <button className="bg-black text-white pl-3 pr-6 py-2 font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-gray-500">
          <PiGithubLogoBold />
          GitHub Repo
        </button>
        <button className="bg-blue text-white pl-3 pr-6 py-2 font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-gray-500">
          <PiGithubLogoBold />
          <BsRecordCircle /> Live Demo
        </button>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default IndividualProjectPage;
