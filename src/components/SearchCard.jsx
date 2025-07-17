import React from 'react'

const SearchCard = (props) => {
    const {data} = props ;
  return (
    <div className='flex flex-row m-4 border-2 border-blue-500 p-6 bg-white/90 shadow-sm border border-gray-200 rounded-md gap-4 hover:shadow-md transition duration-200' >
      <div className="w-40 h-40 flex items-center justify-center">
        <img src={data.imageUrl} className="max-h-36 max-w-36 object-contain" alt={data.name} />
      </div>
      <div>
        <div className ="flex flex-col">
            <h3 className="mb-2">{data.name} || {data.spec}</h3>
            <p className='mb-1'> ₹ {data.price}</p>
            <p className='mb-1'>  {data.description}</p>
            <p className='mb-1'>{data.rating}⭐️</p>
            <div className="w-fit bg-[#f52b2b] text-white p-1 m-1 mr-10">{data.discountPercent}% off</div>
            <p> Delivered By : {data.deliveredDate}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
