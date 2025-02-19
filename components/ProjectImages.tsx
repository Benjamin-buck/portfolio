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
    <div className="grid grid-cols-12 gap-4 h-[330px] w-full">
      <Image
        src={image1}
        width={800}
        height={800}
        alt="Gallery Image"
        className="col-span-12 md:col-span-6  object-cover w-full rounded-[10px] h-[327px] border border-gray-100 shadow-sm cursor-pointer"
        onClick={handleClick}
      />
      <div className="col-span-6 grid-cols-2 gap-4 hidden md:grid">
        <Image
          src={image2}
          height={800}
          width={800}
          className="w-full h-[150px] object-cover rounded-[10px] border border-gray-100 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image3}
          height={800}
          width={800}
          className="w-full h-[150px] object-cover rounded-[10px] border border-gray-100 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image4}
          height={800}
          width={800}
          className="w-full h-[150px] object-cover rounded-[10px] border border-gray-100 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
        <Image
          src={image5}
          height={800}
          width={800}
          className="w-full h-[150px] object-cover rounded-[10px] border border-gray-100 shadow-sm cursor-pointer"
          alt="Gallery Image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProjectImages;
