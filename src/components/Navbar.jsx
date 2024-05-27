import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between ">
      <div className="hidden lg:flex items-center gap-16">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />

        <div className="navlist">
          {["Home", "Work", "About", "News", "Career"].map((elem, index) => {
            return (
              <a
                key={index}
                href={elem.toLowerCase()}
                className="mx-4 font-[gilroy] font-normal"
              >
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
