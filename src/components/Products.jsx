import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const [Yposition, setYposition] = useState(0);
  let ProductsData = [
    {
      title: "Arqitel",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate",
    },
    {
      title: "Cula",
      description:
        "  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      title: "RocketChat",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate",
    },
    {
      title: "Weglot",
      description:
        " s that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing",
    },
    {
      title: "Showcase",
      description:
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
  ];
  console.log(Yposition);

  const MoveY = (val) => {
    setYposition(val * 250);
  };

  return (
    <div className="relative max-w-screen-xl mx-auto sm:my-24 mt-20">
      {ProductsData.map((elem, index) => (
        <Product key={index} data={elem} MoveY={setYposition} val={index} />
      ))}

      <motion.div
        initial={{ y: Yposition, x: `-50%` }}
        animate={{ y: Yposition }}
        className="absolute top-0 left-[45%] w-[0px]  lg:w-[26rem] h-[0px]  lg:h-[15rem] -translate-x-[50%] translate-y-[50%]  overflow-hidden"
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: -Yposition }}
          className="bg-sky-100 h-full w-full border"
        >
          <video
            src="../../Videos/weglotlikemagic.webm"
            type="video/mp4"
            muted
            loop
            autoPlay
          ></video>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: -Yposition }}
          className="bg-sky-200 h-full w-full border"
        >
          <video
            src="../../Videos/Arqitel project video 4_3.webm"
            type="video/mp4"
            muted
            loop
            autoPlay
          ></video>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: -Yposition }}
          className="bg-sky-300 h-full w-full border"
        >
          <video
            src="../../Videos/TTR project video 4_3_H.264.webm"
            type="video/mp4"
            muted
            loop
            autoPlay
          ></video>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: -Yposition }}
          className="bg-sky-400 h-full w-full border"
        >
          <video
            src="../../Videos/Cula_promo_new_4_3.mp4"
            type="video/mp4"
            muted
            loop
            autoPlay
          ></video>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ y: -Yposition }}
          className="bg-sky-500 h-full w-full border"
        >
          <video
            src="../../Videos/jungle-4-3-.webm"
            type="video/mp4"
            muted
            loop
            autoPlay
          ></video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;
