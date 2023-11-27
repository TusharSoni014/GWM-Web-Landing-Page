import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Social() {
  return (
    <div className="__social py-10 px-3 flex justify-center items-center flex-col gap-3">
      <h1 className=" text-4xl">Follow us on social media!</h1>
      <ul className="flex gap-3">
        <li className="text-4xl cursor-pointer transition hover:scale-[1.1]">
          <FaInstagramSquare />
        </li>
        <li className="text-4xl cursor-pointer transition hover:scale-[1.1]">
          <FaFacebook />
        </li>
        <li className="text-4xl cursor-pointer transition hover:scale-[1.1]">
          <FaYoutube />
        </li>
        <li className="text-4xl cursor-pointer transition hover:scale-[1.1]">
          <FaLinkedin />
        </li>
      </ul>
    </div>
  );
}
