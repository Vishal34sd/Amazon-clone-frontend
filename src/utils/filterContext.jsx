// context/FilterContext.js
import { createContext, useState } from 'react';
import { searchData } from './dummySearchData';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(searchData);
  return (
    <FilterContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </FilterContext.Provider>
  );
};
