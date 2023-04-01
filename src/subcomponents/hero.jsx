import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import firstcaro from "../utils/header-bg-a.jpg";
import secondcaro from "../utils/header-bg-b.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div id="home">
      <div className=" relative ] ">
        <div className=" absolute">
          <img
            src={firstcaro}
            alt=""
            className="  h-[90vh] w-screen object-cover brightness-50"
          />
        </div>

        <div className="relative flex flex-col justify-center h-[90vh]  pl-10 z-30 text-white">
          <h1 className=" text-4xl md:text-5xl  lg:text-6xl slide-in-top">
            Bitcoin Investment
          </h1>
          <h1 className=" text-3xl md:text-4xl  lg:text-5xl text-orange-400 slide-in-top">
            You Can Trust
          </h1>
          <div className="pt-2 text-sm md:text-md  lg:text-lg max-w-[80%] md:max-w-[50%] slide-in-top">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nihil, rerum quia magni, debitis unde cum eum sequi dicta
            consectetur assumenda asperiores explicabo molestias non adipisci
            quisquam. Officiis rem optio.
          </div>

          <div className="flex mt-10 slide-in-top ">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="text-sm mr-7 bg-orange-500 text-white px-2 rounded-md py-2  uppercase hover:bg-transparent hover:border-2 hover:border-orange-500"
            >
              Start now
            </button>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="text-sm mr-7 border-2 rounded-md border-orange-500 text-white px-7 py-2 uppercase hover:bg-transparent hover:border-2 hover:bg-orange-500 "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
