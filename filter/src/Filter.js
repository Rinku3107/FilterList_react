import React, { useState } from 'react';

function FilteredList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple'
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
