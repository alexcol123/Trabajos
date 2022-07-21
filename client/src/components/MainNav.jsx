import React, { useState } from 'react'
import Logo from './Logo'
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const MainNav = ({ showNav, toggleNav }) => {
  const { user } = useSelector((store) => store.user)
  const [showLogout, setShowLogout] = useState(false)

  const displayLogoutBtn = () => {
    setShowLogout(!showLogout)
  }

  return (
    <div className='flex max-w-7xl mx-auto  w-full px-2 md:px-4 h-24 justify-between items-center  ease-in-out'>
      <div className=' flex flex-col text-3xl  md:text-4xl font-semibold text-gray-700 '>
        <Logo />
      </div>

      <div onClick={toggleNav}>
        <div className='flex  justify-center items-center p-1 rounded-md hover:bg-primary100'>
          <p className='text-xl text-gray-700 font-semibold '>Menu</p>
          {!showNav ? (
            <FaCaretDown size={30} className='text-primary z-10 mt-1' />
          ) : (
            <FaCaretUp size={30} className='text-primary z-10 mt-1' />
          )}
        </div>
      </div>

      <div className='relative flex flex-col'>
        <button
          onClick={displayLogoutBtn}
          className='flex  bg-primary w-fit  px-4 py-2 rounded text-white items-center justify-between hover:bg-primary700 duration-300'
        >
          <div>
            <FaUserCircle className='mr-2 sm:mr-1' />
          </div>
          <div className='hidden md:block'>{user.name}</div>
          <div>
            <FaCaretDown />
          </div>
        </button>

        {showLogout && (
          <button  onClick={()=> console.log('Logout user')} className='btnNormal absolute bottom-[-55px] w-fit bg-red-100 text-red-900 text-sm sm:text-md md:text-lg hover:bg-red-900 hover:text-white duration-300'>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default MainNav
