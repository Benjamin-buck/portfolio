"use client";

import { portfolio } from "@/constants/portfolio";
import { myProjects } from "@/constants/projects/myProjects";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { IoEnter } from "react-icons/io5";
import { RxEnter } from "react-icons/rx";

const Portfolio = () => {
  const portfolioCount = myProjects.length;
  return (
    <main className="mb-8">
      <div className="mt-12 flex justify-between items-center pb-5 max-sm:mx-8 max-sm:flex-col max-sm:items-start max-sm: gap-2">
        <div>
          <h1 className="text-3xl font-lexend font-semibold">
            {portfolio.title} - {portfolioCount} project
          </h1>
          <p>{portfolio.description}</p>
        </div>
      </div>
      <div className="w-full border border-orange-300 rounded-[5px] mb-5 bg-orange-100 px-6 py-3 text-orange-700">
        <p className="font-bold">Site Under Maintenance:</p>
        <p>
          I'm currently updating my portfolio to include more recent projects.
          Check back soon to see the latest additions!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {myProjects.map((project) => (
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Image
              src={project.images[0]}
              width={500}
              height={500}
              alt="Image"
              className="w-full h-[350px] lg:h-[200px] rounded-t-[10px] border border-gray-100 object-cover"
            />
            <div className="border-b border-gray-100 shadow-sm border-l border-r rounded-b-[10px] px-4 py-2">
              <h3 className="text-lg font-semibold font-lexend">
                {project.title}
              </h3>
              <p className="text-gray-500 line-clamp-3">
                {project.description}
              </p>
              <Link href={`/portfolio/${project.id}`}>
                <button className="text-white bg-black rounded-[5px] my-2 w-full hover:bg-gray-800 py-2 flex gap-2 justify-center items-center">
                  <RxEnter className="text-xl" /> View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
