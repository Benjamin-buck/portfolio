import { navigationLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div id="logo">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" width={48} height={48} alt="Logo icon" />
          <h1 className="text-2xl font-bold uppercase max-md:text-xl">
            Benjamin Alan
          </h1>
        </Link>
      </div>
      <div className="max-md:hidden gap-8 flex font-semibold">
        {navigationLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover:text-blue transition-colors duration-250"
          >
            {label}
          </Link>
        ))}
      </div>
      <HiMenu className="max-md:block hidden text-3xl mr-4" />
    </nav>
  );
};

export default Navbar;
