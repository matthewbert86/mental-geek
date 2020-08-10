import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'
import SocialLinks from '../constants/socialLinks'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  )
}

export default Sidebar
