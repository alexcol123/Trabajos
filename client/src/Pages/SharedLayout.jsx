import React, { useState } from 'react'
import NavContainer from '../components/NavContainer'

import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <NavContainer showNav={showNav} toggleNav={toggleNav} />
      <div className='px-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
