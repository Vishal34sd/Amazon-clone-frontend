import React from 'react'
import CardLayout from './CardLayout'
import { mobileData } from '../utils/dummyData'
import MobileCard from './MobileCard'

const Body = () => {
  return (
    <div  className="bg-gradient-to-b from-[#368fcb] to-[#ffff] relative">
      <img src="banner.png" className="w-full  [mask-image:linear-gradient(to_bottom,black,transparent)]" alt="Banner" />
      <div className="absolute top-8 left-8 flex gap-4">
        <CardLayout />
       
      </div>
      <div className='mt-8 p-6 bg-[#fefdfd] w-11/12 mx-auto shadow-[4px_4px_8px_-1px_rgba(0,0,0,0.1)]' >
        <h3>Top deals with exchange | Up to ₹60,000 off</h3>
        <div className='bg-white flex justify-between'>
          {
            mobileData.map((item , index)=>{
              return (<MobileCard key = {index} data = {item}/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Body
