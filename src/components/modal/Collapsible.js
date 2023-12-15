import React, { useState } from 'react';
import './ModalWithTab.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapsible_container'>
      <div onClick={toggleCollapsible} style={{ cursor: 'pointer' }} className='collapse'>
        <h3>{title}</h3>
        {!isOpen ? <RiArrowDropDownLine style={{ width: 33, height: 33 }} /> : <RiArrowDropUpLine style={{ width: 33, height: 33 }} />}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
