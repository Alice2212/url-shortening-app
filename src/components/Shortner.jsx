import React, { useState } from "react";
import shortnerMobile from "../assets/images/bg-shorten-mobile.svg";
import shortnerDesktop from "../assets/images/bg-shorten-desktop.svg";

//

function Shortner() {
  // declare useState
  const [text, setText] = useState("  ");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!text) {
    //   alert("Input is empty");
    // }else{
    const shorten = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
      const data = await res.json();
      console.log(data);
      // }
      shorten();
    };
  };

  return (
    <>
      <section className=" shortner absolute left-6 lg:left-[7.5rem] -mt-14">
        <picture className="">
          <source media="(min-width:780px) " srcSet={shortnerDesktop} className=""/>
          <img src={shortnerMobile} alt="" />
        </picture>

        {/* form */}
        <form className="form m-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2 m-auto">
            <input
              type="url"
              placeholder="Shorten a link here.."
              className="w-full px-5 py-2 rounded-lg mb-2 md:mb-0"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button
              className=" bg-[#4ecccb] rounded-md px-4 py-2 text-white font-bold w-full md:w-auto"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Shortner;
