import React from 'react'
import FirstCardLayout from './FirstCardLayout'

const Body = () => {
  return (
    <div  className="bg-gradient-to-b from-white to-[#dbeeff] relative">
      <img src="banner.png" className="w-full" alt="Banner" />
      <div className="absolute top-8 left-8 flex gap-4">
        <FirstCardLayout />
       
      </div>
    </div>
  )
}

export default Body
