import PortfolioCards from "@/components/cards/PortfolioCards";
import { portfolio } from "@/constants/portfolio";
import prisma from "@/prisma/client";
import React from "react";

const page = async () => {
  const projects = await prisma.project.findMany();
  return (
    <main>
      <div className="mt-12 flex justify-between items-center border-b pb-5 max-sm:mx-8 max-sm:flex-col max-sm:items-start max-sm: gap-2">
        <div>
          <h1 className="text-3xl font-lexend font-semibold">
            {portfolio.title}
          </h1>
          <p>{portfolio.description}</p>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-gray-400 px-4 py-1 rounded-md"
            placeholder="Search for a project..."
          />
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-4 gap-2 mt-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-8 max-sm:gap-8">
        {projects.map((project) => (
          <PortfolioCards
            label={project.title}
            key={project.title}
            image={project.image}
            href={`/portfolio/` + project.id}
            description={project.description}
            status={project.status}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
