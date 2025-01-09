"use client";
import PortfolioCards from "@/components/cards/PortfolioCards";
import { portfolio } from "@/constants/portfolio";
import { allProjects } from "@/constants/projects/AllProjects";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <main className="mb-8">
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

      {isLoading ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 mt-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-8 max-sm:gap-8">
          {allProjects.map((project) => (
            <PortfolioCards
              label={project.title}
              key={project.title}
              image={project.image}
              href={project.href}
              description={project.description}
              status={project.status}
              disabled={project.disabled}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default page;
