import React from 'react'
import { Link } from 'react-router-dom'

const LowerHeader = () => {
  return (
    <div className = "flex bg-[#232F3E] justify-between">
      <div ><Link to="/"><p className='text-[#f5f5f5] ml-4'>All</p></Link></div>
      <div><p className='text-[#f5f5f5]'>Prime Day Deals</p></div>
      <div><p className='text-[#f5f5f5]' >MX Player</p></div>
      <div><p className='text-[#f5f5f5]'>Mobiles</p></div>
      <div><p className='text-[#f5f5f5]'>Prime</p></div>
      <div><p className='text-[#f5f5f5]'>Fashion</p></div>
      <div><p className='text-[#f5f5f5]'>Electronics</p></div>
      <div><p className='text-[#f5f5f5]'>Home & Kitchen</p></div>
      <div><p className='text-[#f5f5f5]'>Computers</p></div>
      <div><p className='text-[#f5f5f5]'>Books</p></div>
      <div><p className='text-[#f5f5f5] mr-4'>Car & Motorbike</p></div>
      
    </div>
  )
}

export default LowerHeader
