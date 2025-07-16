import React from 'react'
import { searchData } from '../utils/dummySearchData'
import SearchCard from './SearchCard'

const SearchedPage = () => {
  return (
    <div>
     <h3> Based on your search , we found these results</h3>
     {searchData.map((item , index)=>{
        return (<SearchCard key = {index} data ={item}/>)
     })}
    </div>
  )
}

export default SearchedPage
