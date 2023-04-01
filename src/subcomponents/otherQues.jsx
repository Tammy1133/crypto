import React from "react";
import { useNavigate } from "react-router-dom";

export const OtherQuestions = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <div className="p-9">
        <div className="p-5 shadow-slate-700 shadow-2xl">
          <div className="text-lg text-center md:text-2xl lg:text-3xl md:max-w-[70%] mx-auto">
            If you have a question which is beyond our FAQs Kindly contact us or
            Write to Us Now.
          </div>

          <div className="flex justify-center">
            {" "}
            <button
              onClick={() => {
                navigate("/contact");
              }}
              style={{
                background:
                  "linear-gradient(0deg, rgba(203,22,208,1) 0%, rgba(55,21,75,1) 100%, rgba(199,109,255,1) 100%)",
              }}
              className="text-white py-2 px-4 rounded-xl  mt-6 uppercase"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
