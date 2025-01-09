import React from "react";
import { ClipLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <ClipLoader />
    </div>
  );
};

export default loading;
