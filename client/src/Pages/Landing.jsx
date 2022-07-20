import React from 'react'
import Logo from '../components/Logo'
import MainImg from '../assets/images/main.svg'

const Landing = () => {
  return (
    <div className=' max-w-7xl  mx-auto flex flex-col h-screen p-10  '>
      {/* Logo  */}
      <Logo />

      {/* Main  */}
      <div className='flex  mt-40  items-end  md:items-center  md:flex-row md:justify-around  md:mt-10 '>
        {/* Left  */}
        <div className='w-full  space-y-8 md:w-1/2  '>
          <h1 className='text-3xl  md:text-3xl lg:text-5xl font-semibold text-blk   '>
            Job <span className='text-primary'>Tracking </span>App
          </h1>
          <p>
            Alias quaerat! Repellat, labore consectetur culpa ex, molestias
            magnam odio nemo, illo laboriosam autem rerum quam undipisci, eaque
            eligendi. Recuacto a temporibus magni repellat?
          </p>
          <button className='btnFull sm:btnNormal  sm:text-center bg-primary text-white'>
            Login/Register
          </button>
        </div>

        {/* Right Hidden in Md  */}
        <div className='hidden  md:flex'>
          <img src={MainImg} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Landing
