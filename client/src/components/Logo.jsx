import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='flex items-center'>
      <div className='flex justify-center items-center bg-primary  w-12 h-12 rounded-xl '>
        <div className='text-4xl text-white text-center font-bold '>T</div>
      </div>
      <div className='text-primary text-3xl font-bold ml-3'> Trabajos</div>
    </Link>
  )
}

export default Logo
