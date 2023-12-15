import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapsible} style={{ cursor: 'pointer' }}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
