import React from 'react'
import footerLogo from "../assets/images/footer-logo.svg"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#393644]">
        <div className="max-width">
          {/* footer logo */}
          <article>
            <img src={footerLogo} alt="footer-logo" />
          </article>

          {/* first links */}
          <article>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer
