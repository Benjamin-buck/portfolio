import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="my-8 flex max-md:flex-col">
      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <Image
          src="/benjamin.png"
          className="w-[250px] rounded-md"
          height={1000}
          width={1000}
          alt="Benjamin Portrait"
        />
        <div className="mt-5 max-md:text-center">
          <h1 className="text-xl font-semibold">Benjamin Alan</h1>
          <p>React / Next.js Web Developer</p>
        </div>
      </div>
      <div className="flex-1 px-10 py-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="border my-2" />
        <p className="text-lg">
          My name is Benjamin Alan and I am a passionate junior full stack web
          developer from Ontario Canada. I specialize in building clean,
          responsive, and intuitive web applications using modern front-end
          technologies like React, Next.js, and Tailwind CSS. Whether youre
          looking for a simple landing page or a complex interactive platform, I
          focus on delivering clean code, user-centric design, and seamless
          functionality.
        </p>
        <h2 className="text-3xl font-bold mt-10">Education</h2>
        <div className="border my-2" />
        <div>
          <h3 className="text-2xl">Algonquin College</h3>
          <h4 className="font-semibold">
            Interactive Media Design with a specialty in Web Development
          </h4>
          <p>
            Completed a 2 year diploma program at Algonquin College with a focus
            in User Experience / User Interface Design & Web Development.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl">Self Study</h3>
          <h4 className="font-semibold">
            Enrolled in online courses to further my web development knowledge /
            education.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default page;
