import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="__footer bg-black text-white p-3 py-6 flex justify-center items-center flex-col">
      <h3 className=" text-2xl"> AI smart watch</h3>
      <p>Seamless Intelligence, Elevate Your Lifestyle </p>
      <ul className="flex gap-3 mt-4">
        <li className=" cursor-pointer transition hover:scale-[1.1]">
          <FaInstagramSquare />
        </li>
        <li className=" cursor-pointer transition hover:scale-[1.1]">
          <FaFacebook />
        </li>
        <li className=" cursor-pointer transition hover:scale-[1.1]">
          <FaYoutube />
        </li>
        <li className=" cursor-pointer transition hover:scale-[1.1]">
          <FaLinkedin />
        </li>
      </ul>
      <div className="__down mt-3 border-t-[1px] text-gray-500 border-gray-700 w-full p-3 flex justify-center items-center">
      All rights reserved | AI Smart Watch
      </div>
    </footer>
  );
}
