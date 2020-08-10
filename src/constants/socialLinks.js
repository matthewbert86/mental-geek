import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/mentalgeek/">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/mental_geek">
          <FaInstagramSquare className="social-icon dribble-icon"></FaInstagramSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/thementalgeek">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
