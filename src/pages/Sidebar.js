// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css'
import { menus } from "../utils/menus"
import ulesson from '../images/ulessson.svg'


const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={ulesson} alt="" style={{ height: 33, width: 30 }} />
        <h2>uLesson</h2>
      </div>
      <ul className='sidebar_ul'>

        {menus.map((menu) => (
          <li className={location.pathname === menu.link ? 'active' : ''}>
            <div className='li_list'>
              <menu.icon1 style={location.pathname === menu.link ? menu.iconActiveStyle : menu.iconStyle} />
              <Link to={menu.link}>{menu.title}</Link>
            </div>
            {menu.icon2 ? <menu.icon2 /> : null}
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Sidebar;
