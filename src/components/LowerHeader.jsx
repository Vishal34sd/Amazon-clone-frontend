import React from 'react'
import { Link } from 'react-router-dom'

const LowerHeader = () => {
  return (
    <div className = "flex bg-[#232F3E] justify-between">
      <div ><Link to="/"><p className='text-[#f5f5f5] ml-4'>All</p></Link></div>
      <div><p className='text-[#f5f5f5]'>Limited Deals</p></div>
      <div><p className='text-[#f5f5f5]' >Trendy Offers</p></div>
      <div><p className='text-[#f5f5f5]'>Smart Devices</p></div>
      <div><p className='text-[#f5f5f5]'>Footwares</p></div>
      <div><p className='text-[#f5f5f5]'>Style Hub</p></div>
      <div><p className='text-[#f5f5f5]'>Electronics</p></div>
      <div><p className='text-[#f5f5f5]'>Living Essentials</p></div>
      <div><p className='text-[#f5f5f5]'>Laptops</p></div>
      <div><p className='text-[#f5f5f5]'>Books Collection</p></div>
      <div><p className='text-[#f5f5f5] mr-4'>Wheels & Gears</p></div>
      
    </div>
  )
}

export default LowerHeader
