"use client";
import { navigationLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const displayMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <nav className="flex justify-between items-center">
      <div id="logo">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            width={48}
            height={48}
            alt="Logo icon"
            className="z-50"
          />
          <h1 className="font-lexend text-2xl font-bold uppercase max-md:text-xl z-50">
            Benjamin Alan
          </h1>
        </Link>
      </div>
      <div className="max-md:hidden gap-8 flex font-semibold items-center justify-center">
        {navigationLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`hover:text-blue transition-colors duration-250 ${
              pathName === href ? "text-blue" : "text-black"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link href="/portfolio">
          <button className="button-style">My Portfolio</button>
        </Link>
      </div>
      <HiMenu
        className="max-md:block hidden text-3xl mr-4"
        onClick={displayMobileNav}
      />
      {mobileNav && (
        <div className="w-full h-[100vh] bg-white absolute top-0 left-0">
          <div className="mt-[5rem] flex flex-col ">
            {navigationLinks.map(({ label, href }) => (
              <Link
                href={href}
                className="text-2xl border-y py-4 font-semibold text-gray-600 hover:bg-black hover:text-white text-center"
                key={label}
                onClick={displayMobileNav}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/portfolio"
              className="text-2xl border-y py-4 font-semibold text-gray-600 hover:bg-black hover:text-white text-center"
              onClick={displayMobileNav}
            >
              Portfolio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
