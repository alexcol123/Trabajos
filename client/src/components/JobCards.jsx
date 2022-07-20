import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import JobCard from './JobCard'

const JobCards = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* Content - Amouts of jobs found */}
      <div className=' mt-20'>
        <p className='font-bold text-xl text-gray-700 ml-2'> 7 Jobs found.</p>
      </div>

      {/* Content - Jobs cards */}
      <div className='  mt-5'>
        {/* cards  Container */}
        <div className='grid gap-4 md:grid-cols-2  2xl:grid-cols-3  2xl:gap-8'>
          {/* Card 1*/}

          <JobCard />
          <JobCard />
          <JobCard />
          
        </div>
      </div>
    </div>
  )
}

export default JobCards
