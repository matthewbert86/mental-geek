import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-icons"/>
      <p>
        &copy;{new Date().getFullYear()} Mental Geek || All Rights Reserved
      </p>
    </div>
    </footer>
  )
}

export default Footer
