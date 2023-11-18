import React from "react";

export default function Header() {
  return (
    <div className="__header h-20 bg-white shadow-md text-slate-800 p-3 flex justify-between items-center">
      <h1 className=" text-2xl font-bold">AI Watch</h1>
      <div className="__nav_menu">
        <ul className="flex gap-6">
          <li>
            <a href="" className=" transition-all font-normal hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="" className=" transition-all font-normal hover:font-bold">
              About
            </a>
          </li>
          <li>
            <a href="" className=" transition-all font-normal hover:font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
