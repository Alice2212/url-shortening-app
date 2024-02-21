import React, { useState } from "react";
import shortnerMobile from "../assets/images/bg-shorten-mobile.svg";
import shortnerDesktop from "../assets/images/bg-shorten-desktop.svg";
import axios from "axios";

//

function Shortner() {
  // declare useState
  const [text, setText] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    async function shorten() {
      try {
        const response = await axios.post(
          `https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(text)}`
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    shorten();
  };

  return (
    <>
      <section className=" shortner absolute left-6 lg:left-[9.5rem] -mt-14">
        <picture className="">
          <source
            media="(min-width:780px) "
            srcSet={shortnerDesktop}
            className=""
          />
          <img src={shortnerMobile} alt="" />
        </picture>

        {/* form */}
        <form className="form mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2 mx-auto justify-center items-center ml-4 ">
            <input
              type="url"
              placeholder="Shorten a link here.."
              className="lg:w-[30rem] w-[20rem]  px-4 py-4 rounded-lg mb-2 md:mb-0 mx-auto  "
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button
              className=" bg-[#4ecccb] rounded-md px-5 py-4 text-white font-bold w-full md:w-auto"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
        <div>
          <p >link</p>
        </div>
      </section>
    </>
  );
}

export default Shortner;
