
import React from "react";
import Logos from "../components/Logos";
import { Outlet } from "react-router-dom";


const Authlayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logos />

      <div className="flex items-center min-h-screen">

        {/* left side */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* right side image */}
        {/* <div className="flex-1 flex justify-center items-center">
          <img
            src={authImage}
            alt="auth"
            className="w-[90%] object-contain"
          />
        </div> */}

      </div>
    </div>
  );
};

export default Authlayout;