import React from "react";
import footerLogo from "../assets/images/footer-logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#393644] py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5">
          {/* footer logo */}
          <article>
            <img src={footerLogo} alt="footer-logo" />
          </article>

          {/* first links */}
          <article>
            <h3 className="text-white tracking-wide text-xl font-bold">
              Features
            </h3>
            <ul>
              <li className="text-slate-200 text-sm mt-1">Link Shortening</li>
              <li className="text-slate-200 text-sm mt-1">Branded Links</li>
              <li className="text-slate-200 text-sm mt-1">Analytics</li>
            </ul>
          </article>

          {/* second links */}
          <article>
            <h3 className="text-white tracking-wide text-xl font-bold">
              Resources
            </h3>
            <ul>
              <li className="text-slate-200 text-sm mt-1">Blog</li>
              <li className="text-slate-200 text-sm mt-1">Developers</li>
              <li className="text-slate-200 text-sm mt-1">Support</li>
            </ul>
          </article>

          {/* third links */}
          <article>
            <h3 className="text-white tracking-wide text-xl font-bold">
              Company
            </h3>
            <ul>
              <li className="text-slate-200 text-sm mt-1">About</li>
              <li className="text-slate-200 text-sm mt-1">Our Teams</li>
              <li className="text-slate-200 text-sm mt-1">Careers</li>
              <li className="text-slate-200 text-sm mt-1">Contact</li>
            </ul>
          </article>

          {/* footer icons */}
          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="facebook icon" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="twitter icon" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="pinterest icon" />
              </li>
              <li>
                <img src={instagram} alt="instagram icon" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
