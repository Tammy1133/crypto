import React from "react";
import first from "../utils/firstp.png";
import second from "../utils/secondp.png";
import third from "../utils/thirdp.png";
import fourth from "../utils/fourthp.png";

export const Process = () => {
  return (
    <div id="process">
      <div className="py-20">
        <div className="text-purple-700 text-center text-3xl font-semibold">
          SMART MINING PROCESS
        </div>
        <div className="text-center text-xl mt-4 font-semibold">
          How Does Cloud <br />
          Mining Work?
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-20 gap-14">
          <div
            className="flex flex-col items-center justify-center px-5"
            data-aos="fade-up"
          >
            <div
              className="flex items-center justify-center img-div  "
              style={{
                height: "130px",
                width: "130px",
                borderRadius: "50%",
                background:
                  "linear-gradient(0deg, rgba(203,22,208,1) 0%, rgba(55,21,75,1) 100%, rgba(199,109,255,1) 100%)",
              }}
            >
              <img src={first} alt="" className="h-[60px]" />
            </div>
            <div className="text-div mt-3">
              <h3 className="text-center hover:text-purple-800">
                You Register on Smart Mining
              </h3>
              <div className="text-center mt-3">
                Register using your bitcoin wallet address, It takes only 1
                minute.
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center px-5"
            data-aos="fade-up"
          >
            <div
              className="flex items-center justify-center img-div  "
              style={{
                height: "130px",
                width: "130px",
                borderRadius: "50%",
                background:
                  "linear-gradient(0deg, rgba(203,22,208,1) 0%, rgba(55,21,75,1) 100%, rgba(199,109,255,1) 100%)",
              }}
            >
              <img src={second} alt="" className="h-[60px]" />
            </div>
            <div className="text-div mt-3">
              <h3 className="text-center hover:text-purple-800">
                Choose Hashpower and Upgrade
              </h3>
              <div className="text-center mt-3">
                Upgrade free mining plans to premium, more power, more bitcoins.
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center px-5"
            data-aos="fade-up"
          >
            <div
              className="flex items-center justify-center img-div  "
              style={{
                height: "130px",
                width: "130px",
                borderRadius: "50%",
                background:
                  "linear-gradient(0deg, rgba(203,22,208,1) 0%, rgba(55,21,75,1) 100%, rgba(199,109,255,1) 100%)",
              }}
            >
              <img src={third} alt="" className="h-[60px]" />
            </div>
            <div className="text-div mt-3">
              <h3 className="text-center hover:text-purple-800">
                The Mining Process Begins
              </h3>
              <div className="text-center mt-3">
                We are super transparent, You will see live bitcoin mining.
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center px-5"
            data-aos="fade-up"
          >
            <div
              className="flex items-center justify-center img-div  "
              style={{
                height: "130px",
                width: "130px",
                borderRadius: "50%",
                background:
                  "linear-gradient(0deg, rgba(203,22,208,1) 0%, rgba(55,21,75,1) 100%, rgba(199,109,255,1) 100%)",
              }}
            >
              <img src={fourth} alt="" className="h-[60px]" />
            </div>
            <div className="text-div mt-3">
              <h3 className="text-center hover:text-purple-800">
                Receive Daily Your Mined Bitcoins
              </h3>
              <div className="text-center mt-3">
                Withdraw your bitcoin at any time, No minimum payout for premium
                users.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
