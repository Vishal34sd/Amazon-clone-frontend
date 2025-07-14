import React from 'react'

const FirstCardLayout= () => {
  return (
    <div className="flex bg-transparent justify-evenly px-8  ">
      <div className="w-[306px] h-[375px] bg-white ml-10 mt-50 flex flex-col justify-between rounded-md">
        <div>
          <h3 className='text-lg font-bold p-1 ml-2'>Minimum 50% off | Amazon Brands & more</h3>
          <div className='w-[306px] flex flex-wrap'>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
          </div>
        </div>
        <p className='mb-4 text-blue-600 cursor-pointer ml-2'>See all detail</p>
      </div>

      <div className="w-[306px] h-[375px] bg-white ml-50 mt-50 flex flex-col justify-between rounded-md">
        <div>
          <h3 className='text-lg font-bold p-1 ml-2'>Up to 65% off | Offers on home appliances</h3>
          <div className='w-[306px] flex flex-wrap'>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
          </div>
        </div>
        <p className='mb-4 text-blue-600 cursor-pointer ml-2'>See all detail</p>
      </div>

      <div className="w-[306px] h-[375px] bg-white ml-50 mt-50 flex flex-col justify-between rounded-md hover:transform-3d">
        <div>
          <h3 className='text-lg font-bold p-1 ml-2'>Minimum 50% off | Home, kitchen & more</h3>
          <div className='w-[306px] flex flex-wrap'>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
            <div className='m-2 w-32 h-32'>
              <img src="kitchen.jpeg" alt="" />
              <p>Kitchen Essentials</p>
            </div>
          </div>
        </div>
        <p className='mb-4 text-blue-600 cursor-pointer ml-2'>See all detail</p>
      </div>
    </div>
  )
}

export default FirstCardLayout ;
