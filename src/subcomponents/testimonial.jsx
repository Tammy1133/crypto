import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from "../utils/icon1.png";
import icon2 from "../utils/icon2.png";
import icon3 from "../utils/icon3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const Testimonial = () => {
  return (
    <div>
      <div className="my-7 ">
        <div className="text-center text-4xl mb-4 text-fuchsia-700 font-semibold">
          TESTIMONIALS
        </div>
        <div className="text-center text-2xl mb-9 ">
          what clients say about <br /> our services
        </div>
      </div>
      <div className="mt-8 px-3">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper cursor-grab gap-5"
        >
          <SwiperSlide>
            <div className="p-6 bg-slate-100">
              <div className="flex  items-center">
                <img src={icon1} alt="" className="" />
                <div className="ml-6 flex flex-col">
                  <div className="font-semibold text-xl text-start">
                    Matthew Timothy
                  </div>
                  <div
                    style={{ alignSelf: "flex-start" }}
                    className="items-start"
                  >
                    Nigeria
                  </div>
                </div>
              </div>
              <div className="mt-4 text-slate-800 text-lg text-start pl-5">
                Start Mining contracts are really low-cost. I already
                recommended zeusming to my friends and family. Transparent and
                high quality software infrastructure leads to the best Smart
                Mining site
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-slate-100">
              <div className="flex  items-center">
                <img src={icon3} alt="" className="" />
                <div className="ml-6 flex flex-col">
                  <div className="font-semibold text-xl text-start">
                    Sammy Larry
                  </div>
                  <div className="text-start">Ivory Coast</div>
                </div>
              </div>
              <div className="mt-4 text-slate-800 text-lg text-start pl-5">
                Start Mining contracts are really low-cost. I already
                recommended zeusming to my friends and family. Transparent and
                high quality software infrastructure leads to the best Smart
                Mining site
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-slate-100">
              <div className="flex  items-center">
                <img src={icon2} alt="" className="" />
                <div className="ml-6 flex flex-col">
                  <div className="font-semibold text-xl text-start">
                    Joe Cosgrove
                  </div>
                  <div
                    style={{ alignSelf: "flex-start" }}
                    className="items-start"
                  >
                    Nigeria
                  </div>
                </div>
              </div>
              <div className="mt-4 text-slate-800 text-lg text-start pl-5">
                Start Mining contracts are really low-cost. I already
                recommended zeusming to my friends and family. Transparent and
                high quality software infrastructure leads to the best Smart
                Mining site
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-slate-100">
              <div className="flex  items-center">
                <img src={icon1} alt="" className="" />
                <div className="ml-6 flex flex-col">
                  <div className="font-semibold text-xl text-start">
                    Aaron Madagascar
                  </div>
                  <div
                    style={{ alignSelf: "flex-start" }}
                    className="items-start"
                  >
                    Iceland
                  </div>
                </div>
              </div>
              <div className="mt-4 text-slate-800 text-lg text-start pl-5">
                Start Mining contracts are really low-cost. I already
                recommended zeusming to my friends and family. Transparent and
                high quality software infrastructure leads to the best Smart
                Mining site
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-slate-100">
              <div className="flex  items-center">
                <img src={icon3} alt="" className="" />
                <div className="ml-6 flex flex-col">
                  <div className="font-semibold text-xl text-start">
                    Richard Henderson
                  </div>
                  <div
                    style={{ alignSelf: "flex-start" }}
                    className="items-start"
                  >
                    UK
                  </div>
                </div>
              </div>
              <div className="mt-4 text-slate-800 text-lg text-start pl-5">
                Start Mining contracts are really low-cost. I already
                recommended zeusming to my friends and family. Transparent and
                high quality software infrastructure leads to the best Smart
                Mining site
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
