import React, { useContext } from 'react';
import { FilterContext } from '../utils/filterContext';
import Header from './Header';
import LowerHeader from './LowerHeader';
import Filter from './Filter';
import SearchCard from './SearchCard';
import NoResultFound from './NoResultFound';

const SearchedPage = () => {
  const { filteredData } = useContext(FilterContext);
  console.log(filteredData);

  return (
    <div>
      <Header />
      <LowerHeader />
      <div className="p-4">
        {filteredData.length === 0 ? (
          <NoResultFound />
        ) : (
          <div>
            <h3 className="font-bold text-2xl mb-4">
              Based on your search, we found these results:
            </h3>
            <div className="flex flex-row gap-8">
              <Filter />
              <div className="flex flex-col gap-4">
                {filteredData.map((item, index) => (
                  <SearchCard key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchedPage;
