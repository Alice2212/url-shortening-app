import React from "react";
import brandImg from "../assets/images/icon-brand-recognition.svg";
import detailImg from "../assets/images/icon-detailed-records.svg";
import customizableImg from "../assets/images/icon-fully-customizable.svg";

const Advance = () => {
  return (
    <>
      <section className="advance-wrapper bg-slate-200">
        <div className="max-width py-16">
          {/* advance title */}
          <div className="text-center">
            <h2 className="text-bold text-2xl">Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web and with our
              advance Statistics board
            </p>
          </div>
          {/* advance cards */}
          <div>
          {/* card one */}
            <div>
              <img src={brandImg} alt="brand image"/>
              <h2>Brand Recognition</h2>
              <p>Build your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content</p>
            </div>
          </div>
 
          {/* card two */}
          <div>
            <img src={detailImg} alt="detail image"  />
            <h2>
              Detailed Record
            </h2>
            <p>Gain insight into who is clicking your links. knowing when and where people engage with your content helps inform better decisions.</p>
          </div>

          {/* card three */}
          <div>
            <img src={customizableImg} alt="customizable image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Advance;
