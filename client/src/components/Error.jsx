import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <div className=' max-w-7xl  mx-auto flex flex-col  '>
      {/* Main  */}
      <div>
        {/* Right Hidden in Md  */}
        <div>
          <img
            src={NotFound}
            alt=''
            className='w-full md:max-w-2xl mx-auto px-4 object-cover'
          />
          <div className='text-center space-y-4   mt-16'>
            <h3 className=' text-2xl md:text-4xl text-gray-700'>
              Ohh! Page Not Found
            </h3>
            <p>We can't seem to find the page you're looking for.</p>
            <Link className='text-blue-500 underline  block' to='/'>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
