import React from 'react'

const SearchCard = (props) => {
    const {data} = props ;
  return (
    <div>
      <div><img src={data.imageUrl}></img></div>
      <div>
        <div className ="flex flex-row">
            <h3>{data.name} || {data.specs}</h3>
            <p>{data.price}</p>
            <p>{data.discountPercent}</p>
            <p>{data.delieveredDate}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
