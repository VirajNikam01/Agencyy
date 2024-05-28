import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="max-w-screen-xl w-full px-4 mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap gap-3 py-16">
      <Card
        width={"400"}
        text={"Insights and behind the Scences"}
        para={true}
        button={false}
      />
      <Card
        width={"800"}
        text={"Lets get to it, together."}
        button={true}
        para={false}
        heading={true}
        color={"#7443FF"}
      />
    </div>
  );
};

export default Cards;
