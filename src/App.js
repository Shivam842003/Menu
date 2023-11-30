import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function expression
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
      <main>
        <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
        {/* <label>
          
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        </label> */}
         <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        {/* <button onClick={toggleDarkMode}>Theme</button> */}
        <section className="menu section">
          <div className="title" >
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
        </div>
      </main>
    );
  }
export default App;
