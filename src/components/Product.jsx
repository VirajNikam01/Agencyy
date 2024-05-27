import React from "react";
import Button from "./Button";

const Product = ({ data, MoveY, val }) => {
  const { title, description } = data;

  const change = (val) => {
    MoveY(val * 240);
  };
  return (
    <div
      onMouseEnter={() => change(val)}
      className="w-full flex items-center flex-col lg:flex-row mb-20 lg:mb-0 p-2 text-center lg:p-0 lg:text-left justify-center lg:justify-between h-[250px] font-[gilroy]"
    >
      <div className="basis-8/12">
        <h1 className="title text-5xl">{title}</h1>
      </div>
      <div className="des w-full basis-4/12">
        <p className="pb-3 text-base">{description}</p>
        <Button data="Live Website" />
      </div>
    </div>
  );
};

export default Product;
