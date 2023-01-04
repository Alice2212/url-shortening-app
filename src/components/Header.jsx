import React from 'react'
import Logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <div>
      <header className="header max-width ">
        <div>
          {/* logo */}
          <img src={Logo} alt="logo" />

          {/* nav-links */}
          <nav>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resourses</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul>
            <li>Login</li>
            <li className='btn-signUp'>Sign Up</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header
