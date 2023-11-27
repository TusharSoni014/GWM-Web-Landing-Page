import React from "react";

export default function Newsletter() {
  return (
    <div className="__newsletter p-6">
      <div className="__inner bg-gradient-to-br from-pink-400 to-purple-400 p-6 rounded-xl flex justify-center items-center flex-col gap-3">
        <h1 className="text-white text-3xl font-bold">Subscribe our newsletter</h1>
        <form className="w-full flex justify-center items-center gap-3">
          <input placeholder="Type your email address" type="email" className=" w-1/3 p-3 rounded outline-none"/>
          <button className=" bg-purple-500 p-3 rounded text-white border-2 border-white" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
