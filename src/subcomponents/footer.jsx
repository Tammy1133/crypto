import React from "react";

export const Footer = () => {
  return (
    <div className="bg-amber-800 py-3  mt-5 shadow-2xl shadow-rose-700 ">
      <div className="flex justify-center items-center gap-x-5 mt-3">
        <i className="bi bi-facebook  text-white  hover:text-slate-600 hover:scale-125 transition-all text-3xl cursor-pointer pr-5"></i>
        <i className="bi bi-twitter text-white text-3xl hover:text-slate-600 hover:scale-125 transition-all cursor-pointer pr-5"></i>
        <i className="bi bi-instagram text-white text-3xl hover:text-slate-600 hover:scale-125 transition-all cursor-pointer pr-5"></i>
        <i className="bi bi-youtube text-white text-3xl hover:text-slate-600 hover:scale-125 transition-all cursor-pointer pr-5"></i>
      </div>
      <div className="text-center mt-3 text-xl text-white">
        Copyright 2023 CryptoCoin
      </div>
    </div>
  );
};
