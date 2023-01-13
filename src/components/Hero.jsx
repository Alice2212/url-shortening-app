import React from "react";
import heroImg from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <>
      <section className="max-width flex lg:flex-nowrap md:flex-wrap flex-row my-12">
        <div className="">
          <h1 className="">MORE THAN JUST SHORTHER LINKS</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="btn-cta">Get Started</button>
        </div>
        <div className="">
          <img src={heroImg} alt="hero iamge"/>
        </div>
      </section>
    </>
  );
};

export default Hero;
