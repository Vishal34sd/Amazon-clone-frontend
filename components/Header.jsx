import React, { createContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { FilterContext } from '../utils/filterContext';
import { searchData } from '../utils/dummySearchData';
const Header = () => {
    const [searchText, setSearchText] = useState('');
  const { setFilteredData } = useContext(FilterContext);

  const handleSearch = () => {
    const filtered = searchData.filter(item =>
      item.category.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
    setFilteredData(filtered);
  };
  
  return (
    <div className="flex bg-[#080808]">
      <div className='w-36 h-20' ><img src = "amazino_new.png" className='p-6 bg-transparent opacity-90'></img></div>
     <div className='flex-col'> <p className='text-[#ffff] p-1 text'>Delivering to Prayagraj </p>
         <p className='text-[#ffff] text-xl'>Update location </p>
     </div>
      <div className='ml-6 mt-4'>
        <Link to="/"><button className='bg-blue-200 text-black px-2 py-1 w-8 border-black rounded-tl-sm rounded-bl-sm'>All</button></Link>
        <input 
          onChange ={(e)=> setSearchText(e.target.value)}
          type="text" 
          className="px-3 py-1  bg-white w-2xl border-none outline-none focus:ring-0"
          placeholder="Search Amazino.in"
        />
        <Link to ="/search"><button onClick ={handleSearch} className='bg-amber-600 text-black px-3 py-1 rounded-tr-sm rounded-br-sm ' >Go</button></Link>
      </div >
      <div className="ml-18 mt-4"><Link to ="/login"><button className="bg-amber-500 text-black w-28 rounded-md text-xl pb-0.5 hover:cursor-pointer">Login</button></Link></div>
      <div className='ml-12 mt-2'><p className='text-white pb-0.5'>Track my <br/>
        Orders</p></div>
      <div className = "ml-10 mt-1"><img src = "cart_new.png" className = "w-20 h-15 bg-transparent"></img></div>

    </div>
  )
}

export default Header
