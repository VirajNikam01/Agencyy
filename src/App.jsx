import React from "react";
import { Navbar, Work, Stripes, Products, Marques } from "./components";

const App = () => {
  return (
    <div className="bg-black text-white w-screen h-full select-none ">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
    </div>
  );
};

export default App;
