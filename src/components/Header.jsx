import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <header className="header max-width flex justify-between h-24 items-center sticky">
        <div className="flex">
          {/* logo */}
          <div className="pr-12">
            <img src={Logo} alt="logo" />
          </div>

          {/* nav-links */}
          <div>
            <nav>
              <ul className="flex placeholder:justify-between">
                <li>Features</li>
                <li className="px-12">Pricing</li>
                <li>Resourses</li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <ul className="flex">
            <li className="pr-8">Login</li>
            <li className="btn-signUp">Sign Up</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
