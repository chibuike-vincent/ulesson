import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown_container'>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="1">Primary 1</option>
        <option value="2">Primary 2</option>
        <option value="3">Primary 3</option>
        <option value="4">Primary 4</option>
        <option value="5">Primary 5</option>
        <option value="6">Primary 6</option>
      </select>

    </div>
  );
};

export default Dropdown;
