import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const [Images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "45%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "55%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setImages((prev) =>
        prev.map((elem, index) =>
          arr.indexOf(index) === -1
            ? { ...elem, isActive: false }
            : { ...elem, isActive: true }
        )
      );
    }

    const value = Math.floor(data * 100);
    switch (value) {
      case 0:
        showImages([]);
        break;
      case 2:
        showImages([0]);
        break;
      case 7:
        showImages([0, 1]);
        break;
      case 10:
        showImages([0, 1, 2]);
        break;
      case 16:
        showImages([0, 1, 2, 3]);
        break;
      case 20:
        showImages([0, 1, 2, 3, 4]);
        break;
    }
  });

  return (
    <div className=" w-full">
      <div className="max-h-fit max-w-screen-xl mx-auto py-5 sm:py-14 px-3 relative w-full ">
        <h1 className="  leading-none tracking-tight text-[33vw] text-center font-bold font-[gilroy] ">
          Work
        </h1>

        <h1 className=" sm:hidden leading-none tracking-tight text-[33vw] text-center font-bold font-[gilroy] ">
          Work
        </h1>
        <h1 className=" sm:hidden leading-none tracking-tight text-[33vw] text-center font-bold font-[gilroy] ">
          Work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {Images.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  alt=""
                  className={`w-40 lg:w-72 absolute -translate-x-[50%] -translate-y-[50%]`}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
            );
          })}
        </div>

        <p className="text-gray-400 text-center py-10 sm:py-5">
          Web Design, Webflow Development, Creative Development
        </p>
      </div>
    </div>
  );
};

export default Work;
