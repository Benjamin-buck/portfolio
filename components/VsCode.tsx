import React from "react";
import { IoIosArrowDown, IoIosGitBranch, IoMdClose } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { MdSplitscreen } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const VsCode = () => {
  return (
    <div className="p-2 bg-gray-200 border border-gray-300 shadow-md mb-10 rounded-md">
      <div className="w-full text-white">
        {/* Top Bar */}
        <div className="bg-[#181818] border-b border-gray-600 py-3 px-2 rounded-t-md flex justify-between items-center">
          <div className="flex gap-2 group">
            <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <IoMdClose className="text-gray-800 group-hover:block hidden" />
            </div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
              <BsDash className="text-gray-800 group-hover:block hidden" />
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
              <CgArrowsExpandRight className="text-gray-800 text-[8px] group-hover:block hidden" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 text-xs text-gray-400">
              <FaArrowLeft />
              <FaArrowRight />
            </div>
            <input
              className="bg-[#242424] border border-gray-600 rounded-md placeholder:text-xs text-center w-[600px] max-lg:w-auto cursor-not-allowed"
              disabled
              placeholder="Benjamin Alan"
            />
          </div>
          <div className="flex gap-2">
            <AiOutlineFullscreenExit />
            <MdSplitscreen />
          </div>
        </div>
        {/* Content Section */}
        <div className="flex">
          {/* Side Menu */}
          <div className="bg-[#181818] border-r border-gray-600 w-fit px-3 py-3 flex gap-5 flex-col">
            <VscFiles className="text-2xl text-white" />
            <VscSearch className="text-2xl text-gray-500 hover:text-white" />
            <IoIosGitBranch className="text-2xl text-gray-500 hover:text-white" />
          </div>
          {/* Folder select */}
          <div className="w-[300px] bg-[#181818] border-r border-gray-600 max-lg:hidden text-sm text-gray-300">
            <p className="ml-3 mt-3 mb-4">Explorer</p>
            <p className="ml-3 flex gap-3 font-semibold">
              <IoIosArrowDown /> Portfolio
            </p>
            <ul className="">
              <li className="flex gap-2 items-center ml-6">
                <IoIosArrowDown />
                <FaFolder />
                App
              </li>
              <div className="bg-gray-700 ">
                <li className="flex gap-2 items-center ml-12 mt-1 ">
                  <FaFile />
                  About.tsx
                </li>
              </div>
            </ul>
          </div>

          {/* Main */}
          <div className="bg-[#181818] flex-1">
            <div className="flex border-b border-gray-600">
              <div className="bg-[#272727] px-3 py-2 flex gap-2 items-center border-t border-t-blue">
                <FaFile />
                <p className="text-green-400 text-sm">About.tsx</p>
                <IoMdClose />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-gray-600 bg-[#181818] px-2 text-gray-300 text-xs">
          <div>Icons</div>
          <div>
            <p>Ln 21, Col 23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsCode;
