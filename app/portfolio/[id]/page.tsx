import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

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
      <h1>{project.title}</h1>
    </div>
  );
};

export default IndividualProjectPage;
