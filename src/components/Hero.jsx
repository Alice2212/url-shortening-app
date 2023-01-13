import React from "react";
import heroImg from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <>
      <section className="max-width flex lg:flex-nowrap flex-wrap flex-row my-12 mx-auto items-center  justify-between text-center lg:text-left">
        <div className="order-2 lg:order-1 mr-4 lg:my-0 mt-8">
          <h1 className="text-4xl text-bold font-black leading-[1.25] tracking-wider">More than just <br></br>Shorter links</h1>
          <p className="text-gray-500 py-4"> 
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="btn-cta">Get Started</button>
        </div>
        <div className="order-1 lg:order-2 ">
          <img src={heroImg} alt="hero iamge " />
        </div>
      </section>
    </>
  );
};

export default Hero;
