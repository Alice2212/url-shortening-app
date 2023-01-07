import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                {/* <h2 className="text-2xl font-bold text-white">LOGO</h2> */}
                <img src={Logo} alt="logo" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gr rounded-md outline-none focus:border-[#4ecccb] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 text-center ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-[#393644] ">
                <li className=" hover:text-[#4ecccb]">
                  <a href="javascript:void(0)">Features</a>
                </li>
                <li className=" hover:text-[#4ecccb]">
                  <a href="javascript:void(0)">Pricing</a>
                </li>
                <li className=" hover:text-[#4ecccb]">
                  <a href="javascript:void(0)">Resources</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block text-center">
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2  text-[#393644] "
                >
                  Log In
                </a>
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-white btn-cta"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a href="javascript:void(0)" className="px-4 py-2 text-[#393644]">
              Log In
            </a>
            <a href="javascript:void(0)" className="px-4 py-2 btn-cta">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
