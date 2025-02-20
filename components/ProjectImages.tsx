import Image from "next/image";
import React from "react";

interface Images {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  handleClick: () => void;
}
const ProjectImages = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  handleClick,
}: Images) => {
  return (
    <div className="grid grid-cols-12 gap-2 h-[500px] w-full">
      {/* Big Image */}
      <Image
        src={image1}
        width={800}
        height={800}
        alt="Gallery Image"
        className="col-span-12 md:col-span-6  object-scale-down w-full rounded-l-[10px] h-[500px] border border-gray-200 cursor-pointer"
        onClick={handleClick}
      />

      {/* Image Grid */}
      <div className="col-span-6 grid-cols-2 gap-2 hidden md:grid">
        <Image
          src={image2}
          height={800}
          width={800}
          className="w-full h-full object-scale-down border border-gray-200 cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image3}
          height={800}
          width={800}
          className="w-full h-full object-scale-down rounded-tr-[10px] border border-gray-200 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image4}
          height={800}
          width={800}
          className="w-full h-full object-scale-down border border-gray-200 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image5}
          height={800}
          width={800}
          className="w-full h-full object-scale-down rounded-br-[10px] border border-gray-200 cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProjectImages;
