import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const JobCard = () => {
  return (
    <div className='border shadow-md bg-white  flex flex-col p-4  hover:shadow-lg hover:shadow-gray-500 '>
      {/* Card header */}
      <div className='flex items-center '>
        <div className='flex justify-center items-center bg-primary  w-16 h-16 rounded-md mr-6 '>
          <div className='text-3xl text-white text-center font-bold p-2'>A</div>
        </div>
        <div>
          <div className='text-xl'>Airline Pilot</div>
          <div className='text-md text-gray-400 '>Abc Aviation</div>
        </div>
      </div>
      <div className='mt-4 border-b'></div>
      {/* Card Body */}

      <div className='grid grid-cols-2 gap-4  item-center justify-center my-8 text-gray-500 ml-2'>
        <div className=' flex  items-center   text-center  space-x-2'>
          <FaLocationArrow />
          <div className='text-lg'>Colombia</div>
        </div>
        <div className=' flex  items-center   text-center  space-x-2'>
          <FaCalendarAlt />
          <div className='text-lg'>09 17 22</div>
        </div>

        <div className=' flex  items-center   text-center  space-x-2'>
          <FaBriefcase />
          <div className='text-lg'>Part-Time</div>
        </div>

        <div>
          <button className='btnNormal bg-green-100 py-0'>Interview</button>
        </div>
      </div>

      {/* Card Bottoms */}
      <div className='flex gap-3 mb-4 '>
        <button className='btnNormal bg-green-100 py-1 border'>Edit</button>
        <button className=' bg-red-100 text-red-900  btnNormal  py-1  border  '>
          Delete
        </button>
      </div>
    </div>
  )
}

export default JobCard
