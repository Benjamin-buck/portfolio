import { GitHub } from "@/constants/projects/GitHub";
import Image from "next/image";
import React from "react";

const page = () => {
  const project = GitHub;
  return (
    <div>
      <div className="w-full h-[400px] my-5 grid grid-cols-2 object-fill overflow-hidden gap-2">
        <div className="w-full h-[400px] max-xl:col-span-2 col-span-1">
          <Image
            src="/github-1.png"
            className="h-[100%] w-[100%] rounded-md overflow-hidden"
            width={1198}
            height={400}
            alt="Github 1"
          />
        </div>

        <div className="grid-cols-2 gap-2 rounded-md overflow-hidden max-xl:hidden grid">
          <div className="w-full h-[400px]">
            <Image
              src="/github-2.png"
              className="h-[100%] w-[100%] rounded-md overflow-hidden"
              width={800}
              height={800}
              alt="Github 2"
            />
          </div>
          <div className="">
            <Image
              src="/github-2.png"
              className="h-[100%] w-[100%] rounded-md overflow-hidden"
              width={800}
              height={800}
              alt="Github 2"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-5">
        <button className="px-5 py-2 bg-black rounded-md text-white">
          GitHub Repo
        </button>
        <button className="px-5 py-2 bg-black rounded-md text-white">
          Live Demo
        </button>
      </div>
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default page;
