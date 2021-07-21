import React from 'react';

const SearchBar = ({searchBar, handleSortChange, handleFilterChange}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={searchBar.itemChecked === 'Alphabetically' ? true : false} onChange={handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={searchBar.itemChecked === 'Price' ? true : false} onChange={handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
