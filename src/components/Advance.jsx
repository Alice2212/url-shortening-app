import React from "react";
import brandImg from "../assets/images/icon-brand-recognition.svg";
import detailImg from "../assets/images/icon-detailed-records.svg";
import customizableImg from "../assets/images/icon-fully-customizable.svg";

const Advance = () => {
  return (
    <>
      <section className="bg-slate-200 lg:py-20">
        <div className="max-width">
          {/* advance title */}
          <div className="text-center">
            <h2 className="text-bold text-3xl">Advanced Statistics</h2>
            <p className=" text-slate-400 mb-10 lg:mb-20 ">
              Track how your links are performing across the web and with <br/> our
              advance Statistics board 
            </p>
          </div>
          {/* advance cards */}
          <div className="grid">
            {/* card one */}
            <div className="bg-white p-5 rounded">
              <img
                src={brandImg}
                alt="brand image"
                className="bg-indigo-900 p-2 rounded-full"
              />
              <h3 className="text-slate-800 text-bold mb-3 font-bold">
                Brand Recognition
              </h3>
              <p className="text-slate-400">
                Build your brand recognition with each click. Generic links
                don't mean a thing. Branded links helps instill confidence in
                your content
              </p>
            </div>
          </div>

          {/* card two */}
          <div className="bg-white p-5 rounded">
            <img
              src={detailImg}
              alt="detail image"
              className="bg-indigo-900 p-2 rounded-full"
            />
            <h3 className="text-slate-800 text-bold mb-3 font-bold">
              Detailed Record
            </h3>
            <p className="text-slate-400">
              Gain insight into who is clicking your links. knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* card three */}
          <div className="bg-white p-5 rounded">
            <img
              src={customizableImg}
              alt="customizable image"
              className="bg-indigo-900 p-2 rounded-full"
            />
            <h3 className="text-slate-800 text-bold mb-3 font-bold">
              Fully customizable
            </h3>
            <p className="text-slate-400">
              Improve rand awareness and content discoverability through
              customizable links, superchanging audience engagement{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advance;
