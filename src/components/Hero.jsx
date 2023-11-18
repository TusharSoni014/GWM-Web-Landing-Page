import React from "react";

export default function Hero() {
  return (
    <div className="__hero_section flex justify-between items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-5 h-[200px]">
      <div className="__left">
        <h1 className="text-3xl font-bold opacity-90">AI Watch</h1>
        <h2 className="text-xl font-bold opacity-90">
          Revolutionize your wrist device
        </h2>
        <button className=" bg-white p-3 text-black rounded-lg my-3 shadow-md transition active:scale-[0.95]">Buy Now !</button>
      </div>
      <div className="__right">
        <img
          className=" invert w-[200px]"
          src="https://www.boat-lifestyle.com/cdn/shop/products/WaveFlexConnectPackaging1.2_2000x.png?v=1677645513"
        />
      </div>
    </div>
  );
}
