import React from 'react';
import './Header.css'
import Search from '../searchInput/search';
import Dropdown from '../dropdown/Dropdown';
import notIcon from '../../images/Frame 237921.png'

const Header = () => {
  return (
    <div className='container'>
      <div className='search'>
        <Search />
      </div>
      <div className='notification'>
        <Dropdown />
        <img src={notIcon} alt='' />
      </div>
    </div>
  );
};

export default Header;
