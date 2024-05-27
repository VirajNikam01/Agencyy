import React from "react";
import { motion } from "framer-motion";

const Marque = ({ data, direction }) => {
  return (
    <div>
      <motion.div
        initial={{ x: direction === "Right" ? 0 : "-100%" }}
        animate={{ x: direction === "Right" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        className="flex gap-16 py-10"
      >
        {data.map((url, index) => (
          <img key={index} src={url} alt={index} />
        ))}
        {data.map((url, index) => (
          <img key={index} src={url} alt={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
