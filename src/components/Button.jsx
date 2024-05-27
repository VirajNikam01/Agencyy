import React from "react";

const Button = ({ data = "Start a Project" }) => {
  return (
    <div className="m-7 lg:mx-0 bg-white text-black rounded-full sm:w-48 cursor-pointer select-none">
      <div className="  overflow-hidden py-2 font-[gilroy] rounded-full px-3">
        {data}
      </div>
    </div>
  );
};

export default Button;
