import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = ({
  width,
  para,
  text,
  button = false,
  heading = false,
  color,
}) => {
  console.log(width, "width");
  return (
    <div
      className={`bg-[#3E3E46] hover:px-10 transition-all duration-150 ease-in-out hover:bg-[${color}] flex items-start flex-col justify-between w-[${width}px] w-full sm:w-1/2 h-[350px] rounded-xl p-6`}
    >
      <div className="top w-full">
        <div className="head flex items-center justify-between">
          <p className="">Up Next: News</p>
          <FaLongArrowAltRight />
        </div>
        <h1>{text}</h1>
      </div>
      <div className="bottom">
        {para && <p>Explore what drives our team.</p>}
        {heading && <h1 className="text-6xl">Start a Project</h1>}
        {button && (
          <button className="mt-3 px-3 py-1 border border-white rounded-2xl">
            Contact US
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
