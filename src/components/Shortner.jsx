import React from "react";
import shortnerMobile from "../assets/images/bg-shorten-mobile.svg";
import shortnerDesktop from "../assets/images/bg-shorten-desktop.svg";

function Shortner() {
  return (
    <>
      <section className="max-width shortner relative ">
        <picture>
          <source media="(min-width:780px) " srcSet={shortnerDesktop} />
          <img src={shortnerMobile} alt="" />
        </picture>

        {/* form */}
        <form>
          <div className="flex flex-wrap gap-2 ">
            <input
              type="url"
              placeholder="Shorten a link here.."
              className="px-5 py-2 rounded-lg "
            />
            <button className=" bg-[#4ecccb] rounded-md px-4 py-2 text-white font-bold">
              Shorten It!
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Shortner;
