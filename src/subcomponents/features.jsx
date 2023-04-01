import React from "react";
import feature1 from "../utils/feature1.png";
import feature2 from "../utils/feature2.png";
import feature3 from "../utils/feature3.png";
import feature4 from "../utils/feature4.png";
import feature5 from "../utils/feature5.png";
import feature6 from "../utils/feature6.png";

export const Features = () => {
  return (
    <div id="features">
      <div className="py-20">
        <div className="text-center max-w-[70%] text-fuchsia-800 text-2xl mx-auto tex">
          PROFIT EVERY HOUR AND INTANTANTLY WITHDRAW IT TO YOUR WALLET
        </div>

        <div className="font-semibold text-2xl text-center mt-5 uppercase">
          Our Features
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-28">
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature1}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Safe & Secure
              </div>
              <div className=" text-center text-slate-600 text-xl">
                Your bitcoin and account are secured with our advanced security
                features. No one can access your newly mined bitcoins except
                you.
              </div>
            </div>
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature2}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Hassle-Free Mining
              </div>
              <div className=" text-center text-slate-600 text-xl">
                We have a professional team to manage our cloud platform and
                mining pool. Our servers are located worldwide and running 24/7.
              </div>
            </div>
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature3}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Advance Hardware
              </div>
              <div className=" text-center text-slate-600 text-xl">
                We are using the latest hardware like ASIC Miner & Mining rigs
                to ensure a high-speed mining experience in a cost-effective
                manner.
              </div>
            </div>
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature4}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Instant Withdrawal
              </div>
              <div className=" text-center text-slate-600 text-xl">
                You can withdraw your mined bitcoin instantly once you reach the
                minimum payment threshold, without any delays or freezing!
              </div>
            </div>
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature5}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Instantly Connect
              </div>
              <div className=" text-center text-slate-600 text-xl">
                We are Simple, Add your bitcoin wallet address, Mining Start
                immediately. In case you upgrade, mining starts instantly once
                we confirmed payment.
              </div>
            </div>
            <div
              className=" justify-center flex flex-col items-center hover:shadow-2xl p-7"
              data-aos="fade-up"
            >
              <img
                src={feature6}
                alt=""
                className="h-[180px] w-[180px] object-cover"
              />

              <div className=" pt-10 mb-4 text-center text-slate-800 text-2xl font-semibold">
                Low Maintenance Frees
              </div>
              <div className=" text-center text-slate-600 text-xl">
                We are super transparent, No maintenance fees for premium plans.
                No hidden fees or commission. Everything is visible to you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
