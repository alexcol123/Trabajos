import React from 'react'
import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { Link } from 'react-router-dom'

const SecondaryNav = () => {
  return (
    <div className='flex  w-full  mx-auto  h-12 py-8 justify-between bg-primary100 items-center md:px-20 shadow-md   '>
      <div className='flex max-w-5xl w-4/5 lg:w-3/5  lg:px-4 xl:px-8  mx-auto'>
        <Link
          to='/'
          className=' group  flex items-center   hover:bg-primary100  w-full py-4   px-2    '
        >
          <IoBarChartSharp
            size={25}
            className='group-hover:text-primary  group-hover:duration:250 group-hover:ml-2 duration-500  '
          />
          <h3 className='ml-2  text-lg hidden sm:block  '>Stats</h3>
        </Link>

        <Link
          to='/all-jobs'
          className=' group  flex items-center   hover:bg-primary100  w-full py-4   px-2   '
        >
          <MdQueryStats
            size={25}
            className='group-hover:text-primary  group-hover:duration:300 group-hover:ml-2 duration-500  '
          />
          <h3 className='ml-2  text-lg  hidden sm:block  '>All Jobs</h3>
        </Link>

        <Link
          to='/add-job'
          className=' group  flex items-center   hover:bg-primary100  w-full py-4   px-2   '
        >
          <FaWpforms
            size={25}
            className='group-hover:text-primary  group-hover:duration:300 group-hover:ml-2 duration-500  '
          />
          <h3 className='ml-2  text-lg   hidden sm:block '>Add job</h3>
        </Link>

        <Link
          to='/profile'
          className=' group  flex items-center   hover:bg-primary100  w-full py-4   px-2   '
        >
          <ImProfile
            size={25}
            className='group-hover:text-primary  group-hover:duration:300 group-hover:ml-2 duration-500  '
          />
          <h3 className='ml-2  text-lg  hidden sm:block  '>Profile</h3>
        </Link>
      </div>
    </div>
  )
}

export default SecondaryNav
