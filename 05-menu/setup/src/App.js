import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const filterItems = (category) => {

    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;


/**
 * Congress finished in these states
 * 
 * Punjab
 * AP
 * Goa - BJP
 * Tamil
 * Telangana
 * Odhisha 
 * West Bengal
 * Bihar 
 * UP - BJP
 * Delhi 
 * North East - 7 (4 - BJP)
 * Sikkim
 * = 18 (6 - BJP)
 * 
 * Very Minimal Player
 * 
 * Maharashtra
 * Kerala
 * Jharkhand
 * = 3 
 * 
 * Strong in these states
 * MP - BJP
 * Rajasthan - INC
 * Chhattisgarh - INC
 * HP - BJP
 * UK - BJP
 * Karnataka -BJP
 * Gujarat -  BJP
 * Haryana - BJP
 * = 8
 */
