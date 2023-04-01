import React from "react";
import right from "../utils/right.png";

export const About = () => {
  return (
    <div id="about">
      <div className="py-24 bg-green-50">
        <div
          className="text-center text-fuchsia-700 text-xl lg:text-2xl font-semibold"
          data-aos="fade-up"
        >
          {" "}
          ABOUT SMART MINING
        </div>
        <div
          className="text-center font-semibold text-2xl mb-24 mt-3 lg:text-3xl"
          data-aos="fade-up"
        >
          {" "}
          The Mission of Smart Mining?
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img src={right} alt="" className="h-[420px]" data-aos="fade-up" />

          <div className="px-4 lg:ml-8" data-aos="fade-up">
            <div className="mb-2 mt-16 text-2xl">
              Smart Mining is a free Smart Mining platform developed by crypto
              enthusiastic.
            </div>

            <div className="mt-7 text-lg  " data-aos="fade-up">
              Smart Mining team come from in blockchain industry and IT
              engineers, we have you covered with the knowledge and skills of
              our team,We got the lowest price on electricity and purchasing
              costs in the Cryptocurrency mining industry, especially in terms
              of electric energy. Smart Mining has high-quality wind energy,
              hydro energy, and solar energy. Most of Smart Mining's team are
              from top internet companies such as Amazon, Microsoft, Stanford.
              More than half of our team is R&D department, they have rich
              technical strength. Yue Mining's goal is to expand our business to
              the entire cryptocurrency industry chain in the future and serve
              global users through technological innovation。 Since Smart Mining
              was established in 2018, our specialized mining team has been
              dedicated to making free Smart Mining to people worldwide in the
              last 3 years.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
