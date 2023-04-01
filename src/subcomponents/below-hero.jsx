import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../utils/photo-md-a.jpg";

export const BelowHero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-50 flex flex-col items-center md:flex-row justify-center pl-8 pr-8 lg:px-20 py-[80px]">
      <img
        src={photo}
        alt=""
        data-aos="fade-left"
        className="w-[100%]  object-cover h-[300px] sm:px-10 md:px-0  rounded-lg drop-shadow-lg"
      />

      <div
        data-aos="fade-right"
        className="mt-12 md:mt-0 ml-5  md:pl-10 lg:pl-20"
      >
        <div className="">
          <div className=" text-2xl lg:text-4xl lg:max-w-[80%] font-semibold pr-11 sm:pr-0 mb-4 text-slate-800 ">
            Bitcoin is an innovative & a new kind of money.
          </div>
        </div>
        <div className=" text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </div>
        <button
          onClick={() => {
            navigate("/about");
          }}
          className=" mybut mt-6 text-sm mr-7 bg-orange-500
          px-2 rounded-md py-2  uppercase hover:bg-transparent
          hover:border-2 hover:border-orange-500  font-semibold text-white"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
