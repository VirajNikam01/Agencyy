import React from "react";
import { motion } from "framer-motion";

const Stripe = ({ data }) => {
  const { url, number } = data;
  console.log(url, number);
  return (
    <motion.div
      initial={{ x: "0", y: "0" }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
      className="w-1/2 overflow-x-hidden shrink-0 sm:w-[36.66%] p-5 my-0 sm:my-10 border-r-2 border-b-2 border-t-2 flex items-center justify-between"
    >
      <img src={url} alt="" />
      <h1>{number}</h1>
    </motion.div>
  );
};

export default Stripe;
