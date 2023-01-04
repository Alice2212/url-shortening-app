import React from "react";
import footerLogo from "../assets/images/footer-logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#393644]">
        <div className="max-width grid grid-cols-1 gap-5">
          {/* footer logo */}
          <article>
            <img src={footerLogo} alt="footer-logo" />
          </article>

          {/* first links */}
          <article>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </article>

          {/* second links */}
          <article>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </article>

          {/* third links */}
          <article>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Teams</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </article>

          {/* footer icons */}
          <article>
            <ul>
              <li>
                <img src={facebook} alt="facebook icon" />
              </li>
              <li>
                <img src={twitter} alt="twitter icon" />
              </li>
              <li>
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
