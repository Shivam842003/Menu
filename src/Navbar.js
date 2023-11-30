// Navbar.js

import React, { useState } from 'react';
import Switch from 'react-switch';

const Navbar = ({ }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

  return (
    <nav style={{ padding: '10px', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span>Logo</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={() => alert(`Searching for: ${searchQuery}`)}>Search</button>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </div>
    </nav>
  );
};

export default Navbar;
