import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../utils/logo.png";
// import navimage from "../utils/calc-bg.jpg";
import navimage from "../utils/post-thumb-c.jpg";
import { use100vh } from "react-div-100vh";
import Div100vh from "react-div-100vh";

export const Navbar = () => {
  const height = use100vh();
  const halfHeight = height ? height / 1.11111111111 : "80vh";

  const navigate = useNavigate();
  const [isOpen, setIsopen] = useState(false);

  const user = useSelector((state) => {
    return state.user.users;
  });

  return (
    <div className=" fixed top-0 z-50 bg-white w-screen">
      <div className=" h-[10vh] flex justify-between px-3 py-3  shadow-sm  items-center ">
        <a href=" #home">
          <div
            className=" cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="" className="h-[40px]" />
          </div>
        </a>
        <div className=" flex items-center gap-x-9 pt-2 mr-10">
          <a href="#home">
            <button
              // onClick={() => {
              //   navigate("/");
              // }}
              className="hidden md:block"
            >
              <h5 className="text-lg font-semibold hover:text-amber-700 text-uppercase">
                HOME
              </h5>
            </button>
          </a>

          <a href="">
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="hidden md:block"
            >
              <h5 className="text-lg font-semibold hover:text-amber-700 text-uppercase">
                About
              </h5>
            </button>
          </a>

          <a href="#features">
            <button
              // onClick={() => {
              //   navigate("/");
              // }}
              className="hidden md:block"
            >
              <h5 className="text-lg font-semibold hover:text-amber-700 text-uppercase">
                Features
              </h5>
            </button>
          </a>
          <a href="">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="hidden md:block"
            >
              <h5 className="text-lg font-semibold hover:text-amber-700 text-uppercase">
                Contact
              </h5>
            </button>
          </a>

          <button
            onClick={() => {
              setIsopen(!isOpen);
            }}
            className="block md:hidden "
          >
            {!isOpen ? (
              <i className="bi bi-list text-4xl scale-in-ver-center "></i>
            ) : (
              <i className="bi bi-x text-4xl scale-in-ver-center"></i>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ height: halfHeight }}
          className=" scale-in-center    fixed top-0 z-30 mt-[10vh]"
        >
          <div
            style={{ height: halfHeight }}
            className=" md:hidden    right-0 justify-end flex"
          >
            <div
              className="w-[40vw]  bg-zinc-600"
              style={{ opacity: "20%", height: halfHeight }}
              onClick={() => {
                setIsopen(false);
              }}
            ></div>
            <div
              style={{ height: halfHeight }}
              className=" relative w-[60vw]  bg-amber-900 rounded-l-sm shadow-inner"
            >
              <a href="#home">
                <div
                  style={{ height: halfHeight }}
                  className="absolute  w-[60vw] "
                >
                  <img
                    src={navimage}
                    alt=""
                    onClick={() => {
                      setIsopen(false);
                    }}
                    style={{ height: halfHeight }}
                    className="object-cover cursor-pointer  brightness-[30%]"
                  />
                </div>
              </a>
              <div className="relative">
                <div
                  style={{ height: halfHeight }}
                  className=" w-[60vw]  py-14 px-4 flex flex-col items-center justify-center"
                >
                  <a href="#home">
                    <button
                      onClick={() => {
                        setIsopen(false);
                      }}
                    >
                      <h5 className=" text-white  text-2xl">HOME</h5>
                    </button>
                  </a>
                  <a href="#process">
                    <button
                      onClick={() => {
                        setIsopen(false);
                      }}
                    >
                      <h5 className=" text-white  text-2xl mt-10">PROCESS</h5>
                    </button>
                  </a>
                  <a href="">
                    <button
                      onClick={() => {
                        setIsopen(false);
                        navigate("/about");
                      }}
                    >
                      <h5 className=" text-white  text-2xl mt-10">ABOUT</h5>
                    </button>
                  </a>
                  <a href="#features">
                    <button
                      onClick={() => {
                        setIsopen(false);
                      }}
                    >
                      <h5 className=" text-white  text-2xl mt-10">FEATURES</h5>
                    </button>
                  </a>
                  <a href="#features">
                    <button
                      onClick={() => {
                        setIsopen(false);
                        navigate("/contact");
                      }}
                    >
                      <h5 className=" text-white  text-2xl mt-10">CONTACT</h5>
                    </button>
                  </a>
                </div>

                <div
                  className="fixed text-white bg-zinc-900 shadow-2xl bottom-0 w-[60vw] text-center py-2 text-xl cursor-pointer"
                  onClick={() => {
                    setIsopen(false);
                  }}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
