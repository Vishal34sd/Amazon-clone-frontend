import React from 'react'
import { searchData } from '../utils/dummySearchData'
import SearchCard from './SearchCard'
import Header from './Header'
import LowerHeader from './LowerHeader'
import Filter from './Filter'
import {useState} from "react";
import { useContext } from 'react'
import { FilterContext } from '../utils/filterContext'

const SearchedPage = ()=>{
  const { filteredData } = useContext(FilterContext);
  console.log(filteredData);

  return (
    
    <div>
       <Header/>
       <LowerHeader/>
       <div>
     <h3 className='text-bold text-2xl'> Based on your search , we found these results</h3>
     <div className = "flex flex-row gap-20">
        <Filter/>
     <div>{filteredData.map((item , index)=>{
        return (<SearchCard key = {index} data ={item}/>)
     })}</div>
     </div>
     </div>
    </div>
  )
}

export default SearchedPage
