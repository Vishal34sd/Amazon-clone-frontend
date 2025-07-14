import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex bg-black">
      <div className='w-36 h-16' ><img src = "amazonLogo1.png" className='p-6'></img></div>
     <div className='flex-col'> <p className='text-[#ffff] p-1 text'>Delivering to Prayagraj </p>
         <p className='text-[#ffff] text-xl'>Update location </p>
     </div>
      <div className='ml-6 mt-4'>
        <button className='bg-blue-200 text-black px-2 py-1 w-8 border-black rounded-tl-sm rounded-bl-sm'>All</button>
        <input 
          type="text" 
          className="px-3 py-1  bg-white w-2xl border-none outline-none focus:ring-0"
          placeholder="Search Amazon.in"
        />
        <button className='bg-amber-600 text-black px-3 py-1 rounded-tr-sm rounded-br-sm '>Go</button>
      </div >
      <div className="ml-18 mt-4"><Link to ="/login"><button className="bg-amber-500 text-black w-28 rounded-md text-xl pb-0.5 hover:cursor-pointer">Login</button></Link></div>
      <div className='ml-12 mt-2'><p className='text-white pb-0.5'>Returns & <br/>
        Orders</p></div>
      <div className = "ml-10 mt-1"><img src = "cart.png" className = "w-20 h-15"></img></div>

    </div>
  )
}

export default Header
