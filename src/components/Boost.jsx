import React from "react";
import bgDesktop from "../assets/images/bg-boost-desktop.svg"
import bgMobile from "../assets/images/bg-boost-mobile.svg"

const Boost = () => {
  return (
    <>
      <div className="boost text-slate-100 relative">
        <picture>
          <source media="(min-width: 760px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>
        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-4 text-2xl">Boost your links today</h2>
          <button className="btn-cta">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Boost;
