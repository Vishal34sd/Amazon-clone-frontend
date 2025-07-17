import React from 'react';
import { Link } from 'react-router-dom';

const NoResultFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center p-6">
     
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">No Results Found</h1>
      <p className="text-gray-600 mb-6">
        We couldn’t find any matches for your search. Try checking your spelling or use more general terms.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NoResultFound;
