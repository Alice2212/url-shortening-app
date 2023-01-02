import React from 'react'
import Logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <div>
      <header className='header'>
        {/* logo */}
        <div>
            <img src={Logo} alt="logo"/>
        </div>

      </header>
    </div>
  )
}

export default Header
