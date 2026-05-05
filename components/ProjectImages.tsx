"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsImages } from "react-icons/bs";

interface ProjectImagesProps {
  images: { image: string; label: string }[];
  handleClick: () => void;
}

const Skeleton = () => (
  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
);

const ProjectImages = ({ images, handleClick }: ProjectImagesProps) => {
  const [img1, img2, img3, img4, img5] = images;
  const [loaded, setLoaded] = useState<boolean[]>(new Array(5).fill(false));

  const markLoaded = (i: number) =>
    setLoaded((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });

  return (
    <div
      className="grid grid-cols-12 gap-2 h-[300px] lg:h-[500px] w-full cursor-pointer"
      onClick={handleClick}
    >
      {/* Main image */}
      <div className="col-span-12 md:col-span-6 relative overflow-hidden rounded-xl md:rounded-r-none md:rounded-l-xl">
        {!loaded[0] && <Skeleton />}
        <Image
          src={img1.image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={img1.label}
          className="object-cover hover:scale-105 transition-transform duration-500"
          onLoad={() => markLoaded(0)}
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Side grid */}
      <div className="col-span-6 hidden md:grid grid-cols-2 gap-2">
        {[img2, img3, img4].map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden h-full ${i === 1 ? "rounded-tr-xl" : ""}`}
          >
            {!loaded[i + 1] && <Skeleton />}
            <Image
              src={img.image}
              fill
              sizes="25vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
              alt={img.label}
              onLoad={() => markLoaded(i + 1)}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}

        {/* Last tile — "View all" overlay */}
        <div className="relative overflow-hidden rounded-br-xl h-full">
          {!loaded[4] && <Skeleton />}
          <Image
            src={img5.image}
            fill
            sizes="25vw"
            className="object-cover"
            alt={img5.label}
            onLoad={() => markLoaded(4)}
          />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/60 transition-colors duration-200 flex flex-col items-center justify-center gap-2">
            <BsImages className="text-white text-2xl" />
            <span className="text-white font-semibold text-sm">
              View all {images.length} photos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
