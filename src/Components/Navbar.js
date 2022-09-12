import React from "react";
import Status from "./Status";
import profile from "../Assets/Picture.png";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center px-8 pt-8 mb-4 justify-between">
        <div className="flex flex-row ">
          <Status />
        </div>
        <div>
          <img className="rounded-full" src={profile} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
