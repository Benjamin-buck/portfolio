"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  image: string;
  description: string;
  href: string;
  status: string;
  disabled?: boolean;
}

const PortfolioCards = ({
  label,
  image,
  description,
  href,
  status,
  disabled,
}: Props) => {
  return (
    <div
      className={`border border-gray-200 col-span-1  rounded-md overflow-hidden shadow-sm 
    ${disabled && "bg-gray-300 text-gray-600"}
    `}
    >
      <Image
        src={image}
        width={500}
        height={300}
        className="object-cover h-[200px]"
        alt="Project image"
      />
      <div className="px-4 py-3">
        <div
          className={`px-2 py-0.5 w-fit text-white text-sm rounded mb-2 
            ${status === "In Progress" && "bg-orange-300"}
            ${status === "Done" && "bg-green-500"}
            `}
        >
          {status}
        </div>
        <Link
          href={href}
          className={`text-xl font-semibold ${
            disabled && "cursor-not-allowed"
          }`}
        >
          {label}
        </Link>
        <p className="text-gray-500 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCards;
