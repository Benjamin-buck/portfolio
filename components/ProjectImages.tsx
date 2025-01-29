import Image from "next/image";
import React from "react";

interface Images {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}
const ProjectImages = ({ image1, image2, image3, image4, image5 }: Images) => {
  return (
    <div className="grid grid-cols-2 h-[400px] mt-[20px] gap-3 max-lg:grid-cols-1 max-md:h-[200px] max-lg:h-[300px]">
      <div className="w-full h-full rounded-lg shadow-md border border-gray-200 object-fill overflow-hidden">
        <Image
          src={image1}
          className="object-fill h-full"
          height={1920}
          width={1080}
          alt="Photo"
        />
      </div>
      <div className="w-full h-full  grid grid-cols-2 gap-3 max-lg:hidden">
        <div className="w-full h-full rounded-lg shadow-md border border-gray-200 object-fill overflow-hidden">
          <Image
            src={image2}
            className="object-fill w-full"
            height={1000}
            width={1000}
            alt="Photo"
          />
        </div>
        <div className="w-full h-full rounded-lg shadow-md border border-gray-200 object-fill overflow-hidden">
          <Image
            src={image3}
            className="object-fill w-full"
            height={1000}
            width={1000}
            alt="Photo"
          />
        </div>
        <div className="w-full h-full rounded-lg shadow-md border border-gray-200 object-fill overflow-hidden">
          <Image
            src={image4}
            className="object-fill w-full"
            height={1000}
            width={1000}
            alt="Photo"
          />
        </div>
        <div className="w-full h-full rounded-lg shadow-md border border-gray-200 object-fill overflow-hidden">
          <Image
            src={image5}
            className="object-fill w-full"
            height={1000}
            width={1000}
            alt="Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
