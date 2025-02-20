"use client";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

interface Modal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<Modal> = ({ children, onClose, title, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disables background scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable background scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isOpen]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg w-full flex flex-col h-full">
        {/* Static Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-xl">{title}</h2>
          <CgClose onClick={onClose} className="cursor-pointer" />
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-4 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
