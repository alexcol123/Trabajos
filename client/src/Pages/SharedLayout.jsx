import React, { useState } from 'react'
import NavContainer from '../components/NavContainer'

import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'

const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const toggleNav = () => {
    dispatch(toggleSidebar())
  }

  return (
    <div>
      <NavContainer showNav={isSidebarOpen} toggleNav={toggleNav} />
      <div className='px-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
