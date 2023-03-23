import React, { useState } from "react";
import shortnerMobile from "../assets/images/bg-shorten-mobile.svg";
import shortnerDesktop from "../assets/images/bg-shorten-desktop.svg";

// https://api.shrtco.de/v2/shorten?url=

function Shortner() {
  // declear useState
  const [text, setText] = useState("  ");

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="max-width shortner relative ">
        <picture>
          <source media="(min-width:780px) " srcSet={shortnerDesktop} />
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
            />
            <button className=" bg-[#4ecccb] rounded-md px-4 py-2 text-white font-bold w-full md:w-auto">
              Shorten It! onClick = {handleSubmit}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Shortner;
